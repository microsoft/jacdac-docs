import { useCallback, useContext, useState } from "react"
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"
import {
    FirmwareBlob,
    parseFirmwareFile,
} from "../../../jacdac-ts/src/jdom/flashing"
import DbContext, { DbContextProps } from "../DbContext"
import { useChangeAsync } from "../../jacdac/useChange"
import { unique } from "../../../jacdac-ts/src/jdom/utils"
import {
    fetchLatestFirmwareRelease,
    fetchFirmwareReleaseBinary,
} from "../github"
import useIdleCallback from "../hooks/useIdleCallback"
import useMounted from "../hooks/useMounted"
import useAnalytics from "../hooks/useAnalytics"
import { prettyDuration } from "../../../jacdac-ts/src/jdom/pretty"
import useDeviceSpecifications from "../devices/useDeviceSpecifications"

export default function useFirmwareBlobs() {
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const { db } = useContext<DbContextProps>(DbContext)
    const { trackEvent } = useAnalytics()
    const [throttled, setThrottled] = useState(false)
    const mounted = useMounted()
    const firmwares = db?.firmwares
    const specifications = useDeviceSpecifications()

    const loadFirmwares = useCallback(async () => {
        const names = await firmwares?.list()
        if (!names) return

        const slugs = unique(
            specifications
                .filter(spec => !!spec?.productIdentifiers?.length) // needs some product identifiers
                .map(spec => spec.repo)
                .filter(repo => /^https:\/\/github.com\//.test(repo))
                .map(repo => repo.substring("https://github.com/".length))
        )
        //console.debug(`firmware: found ${slugs.join(", ")}`)
        for (const slug of slugs) {
            const fw = await firmwares.get(slug)
            if (fw) {
                const { time } = fw
                const age = Date.now() - time
                //console.debug(`firmware: ${slug} age ${prettyDuration(age)}`)
                if (age < 3600_000) {
                    // console.debug(`firmware: skipping fresh firmware ${slug}`)
                    continue
                }
            }
            console.debug(`firmware: fetch latest release of ${slug}`)
            const { status, release } = await fetchLatestFirmwareRelease(slug, {
                ignoreThrottled: true,
            })
            trackEvent("github.fetch", { status, slug })
            if (status === 403) {
                trackEvent("github.fetch.throttled", { repo: slug })
                if (mounted()) setThrottled(true)
            }
            if (!release?.version) {
                trackEvent("github.fetch.notfound", { repo: slug })
                console.warn(`firmware: release not found`)
                return
            }
            setThrottled(false)
            console.log(
                `firmware: fetch binary release ${slug} ${release.version}`
            )
            const firmware = await fetchFirmwareReleaseBinary(
                slug,
                release.version
            )
            if (firmware) {
                console.debug(
                    `firmware: binary release ${slug} ${release.version} downloaded`
                )
                firmwares.set(slug, { time: Date.now(), firmware })
            }
            // throttle github queries
            await bus.delay(5000)
        }
    }, [db, firmwares, throttled])
    // reload firmwares
    useIdleCallback(
        () => {
            try {
                loadFirmwares()
            } catch (e) {
                console.debug(e)
            }
        },
        5000,
        [db, firmwares]
    )
    // update bus with info on changes
    useChangeAsync(
        firmwares,
        async fw => {
            const names = await fw?.list()
            const uf2s: FirmwareBlob[] = []
            if (names?.length) {
                for (const name of names) {
                    const { firmware } = (await fw.get(name)) || {}
                    if (firmware) {
                        const uf2Blobs = await parseFirmwareFile(firmware, name)
                        uf2Blobs?.forEach(uf2Blob => {
                            uf2s.push(uf2Blob)
                        })
                    }
                }
            }
            bus.firmwareBlobs = uf2s
        },
        []
    )

    return { throttled }
}

export function useFirmwareBlob(repoSlug: string) {
    repoSlug = repoSlug?.replace(/^https:\/\/github\.com\//i, "")
    const { db } = useContext<DbContextProps>(DbContext)
    const firmwares = db?.firmwares

    const blobs = useChangeAsync(
        firmwares,
        async () => {
            if (!repoSlug) return undefined

            const { firmware } = (await firmwares?.get(repoSlug)) || {}
            if (!firmware) {
                return undefined
            } else {
                const uf2Blobs = await parseFirmwareFile(firmware, repoSlug)
                return uf2Blobs
            }
        },
        [repoSlug]
    )

    const setFirmwareFile = async (tag: string, f: Blob) => {
        if (!f) await firmwares?.set(repoSlug, undefined)
        else await firmwares?.set(repoSlug, { time: Date.now(), firmware: f })
    }

    return {
        firmwareBlobs: blobs,
        setFirmwareFile,
    }
}
