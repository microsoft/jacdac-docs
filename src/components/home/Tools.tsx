import { Grid } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import React, { useContext } from "react"
import CenterGrid from "./CenterGrid"
import SplitGrid from "./SplitGrid"
import AppContext, { DrawerType } from "../AppContext"
import Suspense from "../ui/Suspense"
import DashboardDevice from "../dashboard/DashboardDevice"

export default function Tools() {
    const { setDrawerType } = useContext(AppContext)
    const handleShowDeviceTree = () => setDrawerType(DrawerType.Dom)
    const handleShowPacketConsole = () => setDrawerType(DrawerType.Packets)
    return (
        <Grid
            container
            spacing={10}
            direction="column"
            alignContent="center"
            alignItems="center"
        >
            <CenterGrid
                title="Web Tools"
                subtitle3="Visualize, debug, sniff, track, record, replay, update... from your browser."
            />

            <SplitGrid
                right={true}
                subtitle="Digital Twins and Simulators."
                description="Visualize and interact with digital twins of physical devices, or simulated devices. Interact with the simulators on the left. To see more details, open the device tree."
                image={<StaticImage src="./dashboard.png" alt="Dashboard" />}
                buttonText="Open Device Tree"
                buttonVariant="link"
                onButtonClick={handleShowDeviceTree}
            />

            <SplitGrid
                right={false}
                subtitle="Packet Console"
                description="Sniff the packet traffic, record and replay traces in the packet console."
                image={<StaticImage src="./packets.png" alt="Packet view" />}
                buttonText="Open Packet Console"
                buttonVariant="link"
                onButtonClick={handleShowPacketConsole}
            />

            <SplitGrid
                right={true}
                subtitle="Data collector."
                description="Record any register data into a CSV file."
                buttonText="Collect data"
                buttonVariant="link"
                buttonUrl="/tools/collector/"
                image={
                    <StaticImage
                        src="./recordit.png"
                        alt="Data collector user interface"
                    />
                }
            />

            <SplitGrid
                right={false}
                subtitle="Device Tester."
                description="A compliance test suite for module development or the factory floor."
                buttonText="Test your device"
                buttonVariant="link"
                buttonUrl="/tools/device-tester/"
                image={
                    <StaticImage
                        src="./device-tester.png"
                        alt="Device Tester contains a device twin of a device and a tree of unit tests"
                    />
                }
            />

            <CenterGrid
                subtitle2="Can I build my own tools?"
                description="Absolutely! You can use the JavaScript package to build your own Jacdac tooling."
                buttonText="Integrate Jacdac into your web app"
                buttonVariant="link"
                buttonUrl="/clients/javascript/"
            />

            <CenterGrid
                subtitle2="More web tools"
                buttonText="Read more"
                buttonVariant="link"
                buttonUrl="/tools/more"
            />
        </Grid>
    )
}
