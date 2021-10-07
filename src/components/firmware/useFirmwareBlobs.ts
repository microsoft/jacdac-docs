import { useCallback, useContext, useState } from "react"
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"
import {
    FirmwareBlob,
    parseFirmwareFile,
} from "../../../jacdac-ts/src/jdom/flashing"
import DbContext, { DbContextProps } from "../DbContext"
import { useChangeAsync } from "../../jacdac/useChange"
import { deviceSpecifications } from "../../../jacdac-ts/src/jdom/spec"
import { unique } from "../../../jacdac-ts/src/jdom/utils"
import { fetchLatestRelease, fetchReleaseBinary } from "../github"
import useIdleCallback from "../hooks/useIdleCallback"
import useMounted from "../hooks/useMounted"
import useAnalytics from "../hooks/useAnalytics"

export default function useFirmwareBlobs() {
    const { bus } = useContext<JacdacContextProps>(JacdacContext)
    const { db } = useContext<DbContextProps>(DbContext)
    const { trackEvent } = useAnalytics()
    const [throttled, setThrottled] = useState(false)
    const mounted = useMounted()
    const firmwares = db?.firmwares

    const loadFirmwares = useCallback(async () => {
        console.log(`firmware: load`)
        const names = await firmwares?.list()
        if (!names) return

        const missingSlugs = unique(
            deviceSpecifications()
                .filter(spec => !!spec?.productIdentifiers?.length) // needs some product identifiers
                .map(spec => spec.repo)
                .filter(repo => /^https:\/\/github.com\//.test(repo))
                .map(repo => repo.substr("https://github.com/".length))
                .filter(slug => names.indexOf(slug) < 0)
        )
        for (const slug of missingSlugs) {
            console.log(`db: fetch latest release of ${slug}`)
            const { status, release } = await fetchLatestRelease(slug, {
                ignoreThrottled: true,
            })
            trackEvent("github.fetch", { status, slug })
            if (status === 403) {
                if (mounted()) setThrottled(true)
            }
            if (!release?.version) {
                console.warn(`release not found`)
                return
            }
            setThrottled(false)
            console.log(`db: fetch binary release ${slug} ${release.version}`)
            const fw = await fetchReleaseBinary(slug, release.version)
            if (fw) {
                console.log(
                    `db: binary release ${slug} ${release.version} downloaded`
                )
                firmwares.set(slug, fw)
            }
            // throttle github queries
            await bus.delay(5000)
        }
    }, [db, firmwares, throttled])
    useIdleCallback(loadFirmwares, 5000, [db, firmwares])
    useChangeAsync(
        firmwares,
        async fw => {
            console.log(`firmwares: change`)
            const names = await fw?.list()
            console.log(`import stored uf2`, names)
            const uf2s: FirmwareBlob[] = []
            if (names?.length) {
                for (const name of names) {
                    const blob = await fw.get(name)
                    const uf2Blobs = await parseFirmwareFile(blob, name)
                    uf2Blobs?.forEach(uf2Blob => {
                        uf2s.push(uf2Blob)
                    })
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

            const blob = await firmwares?.get(repoSlug)
            if (!blob) {
                return undefined
            } else {
                const uf2Blobs = await parseFirmwareFile(blob, repoSlug)
                return uf2Blobs
            }
        },
        [repoSlug]
    )

    const setFirmwareFile = async (tag: string, f: Blob) => {
        await firmwares?.set(repoSlug, f)
    }

    return {
        firmwareBlobs: blobs,
        setFirmwareFile,
    }
}
