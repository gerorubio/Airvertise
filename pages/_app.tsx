import * as React from "react"
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import Router, { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
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
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { RootStoreProvider } from "@mobx"
// Animation on scroll styles
import "animate.css/animate.min.css";

interface AirvertiseProps extends AppProps {
    walletConnectProjectId?: string
    infuraApiKey?: string
}
const serverSideEmotionCache = createEmotionCache()

Router.events.on('routeChangeStart', () =>  console.log('AAAA'));
Router.events.on('routeChangeComplete', () => console.log('AAAA'));
Router.events.on('routeChangeError', () => console.log('AAAA'));

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
            <RootStoreProvider>
                <Head>
                    <title>Airvertise</title>
                    <meta name="description" content="" />
                    <meta name="robots" content="noodp" />
                    <meta name="keywords" content="" />
                </Head>
                <GoogleReCaptchaProvider
                    reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    useRecaptchaNet
                    useEnterprise={false} //TODO: https://trello.com/c/PvuzAlvs/65-check-if-it-is-necessary-googlerecaptchaprovider-enterprise
                    scriptProps={{
                        async: true,
                        defer: true,
                        appendTo: "body",
                    }}
                >
                    <ThemeProvider theme={lightTheme}>
                        <CssBaseline />
                        <>
                            <Component {...pageProps} />
                            <Web3Modal config={modalConfig} />
                        </>
                    </ThemeProvider>
                </GoogleReCaptchaProvider>
            </RootStoreProvider>
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
