import * as React from "react"
import "../styles/global.css"
import { AppProps } from "next/app"
import { appWithTranslation } from "next-i18next"
import Head from "next/head"
import { CacheProvider, EmotionCache } from "@emotion/react"
import createEmotionCache from "../src/Definitions/Styled/createEmotionCache"
import lightThemeOptions from "../src/Definitions/Styled/theme"
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material"
import { chains, providers } from "@web3modal/ethereum"
import type { ConfigOptions } from "@web3modal/react"
import { Web3Modal } from "@web3modal/react"

interface AirvertiseProps extends AppProps {
    walletConnectProjectId?: string
    infuraApiKey?: string
}
const serverSideEmotionCache = createEmotionCache()

function WebApp(props: AirvertiseProps) {
    const { Component, pageProps } = props
    const lightTheme = createTheme(lightThemeOptions)

    // Configure web3modal
    const modalConfig: ConfigOptions = {
        projectId: props.walletConnectProjectId,
        theme: "dark",
        accentColor: "default",
        ethereum: {
            appName: "airvertise",
            autoConnect: true,
            chains: [chains.polygonMumbai],
            providers: [
                providers.walletConnectProvider({
                    projectId: props.walletConnectProjectId,
                }),
                providers.infuraProvider({
                    apiKey: props.infuraApiKey,
                }),
            ],
        },
    }

    return (
        <CacheProvider value={serverSideEmotionCache}>
            <Head>
                <title>Airvertise</title>
                <meta name="description" content="Arrocera" />
                <meta name="robots" content="noodp" />
                <meta name="keywords" content="" />
            </Head>
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <>
                    <Component {...pageProps} />
                    <Web3Modal config={modalConfig} />
                </>
            </ThemeProvider>
        </CacheProvider>
    )
}

WebApp.getInitialProps = async appContext => {
    const walletConnectProjectId = process.env.WALLET_CONNECT_PROJECT_ID
    const infuraApiKey = process.env.INFURA_API_KEY

    return {
        walletConnectProjectId: walletConnectProjectId,
        infuraApiKey: infuraApiKey,
    }
}

export default appWithTranslation(WebApp)
