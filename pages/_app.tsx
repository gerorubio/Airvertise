import * as React from "react"
import 'nprogress/nprogress.css';
import "../styles/global.css"
import { AppProps } from "next/app"
import { appWithTranslation } from "next-i18next"
import Head from "next/head"
import { CacheProvider, EmotionCache } from "@emotion/react"
import createEmotionCache from "../src/Definitions/Styled/createEmotionCache"
import lightThemeOptions from "../src/Definitions/Styled/theme"
import { ThemeProvider, CssBaseline, createTheme, Box } from "@mui/material"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { RootStoreProvider } from "@mobx"
// Loading page
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NProgress from 'nprogress';
// Animation on scroll styles
import "animate.css/animate.min.css";
/******************web3modal*******************/
import {
    EthereumClient,
    modalConnectors,
    walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygonMumbai } from 'wagmi/chains'
import NavigationBar from "@Components/NavigationBar";
import Router from "next/router";

// 1. Get projectID at https://cloud.walletconnect.com
if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
    throw new Error('You need to provide NEXT_PUBLIC_PROJECT_ID env variable')
}

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

// 2. Configure wagmi client
const chains = [mainnet, polygonMumbai]
const { provider } = configureChains(chains, [walletConnectProvider({ projectId })])
const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({ appName: 'web3Modal', chains }),
    provider
})

// 3. Configure modal ethereum client
export const ethereumClient = new EthereumClient(wagmiClient, chains)

/**********************************************/

interface AirvertiseProps extends AppProps {
    walletConnectProjectId?: string
    infuraApiKey?: string
}
const serverSideEmotionCache = createEmotionCache()

function WebApp(props: AirvertiseProps) {
    const { Component, pageProps } = props
    const lightTheme = createTheme(lightThemeOptions)

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        
        // Used for page transition
        const start = () => {
            setLoading(true);
        }
        const end = () => {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
        Router.events.on("routeChangeStart", start)
        Router.events.on("routeChangeComplete", end)
        Router.events.on("routeChangeError", end)
        return () => {
            Router.events.off("routeChangeStart", start)
            Router.events.off("routeChangeComplete", end)
            Router.events.off("routeChangeError", end)
        }
    }, []);

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
                            <WagmiConfig client={wagmiClient}>
                                {loading ?
                                    <Box sx={{ backgroundColor: '#FE7B26', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <div className="sk-chase">
                                            <div className="sk-chase-dot" />
                                            <div className="sk-chase-dot" />
                                            <div className="sk-chase-dot" />
                                            <div className="sk-chase-dot" />
                                            <div className="sk-chase-dot" />
                                            <div className="sk-chase-dot" />
                                        </div>
                                    </Box>
                                    :
                                    <>
                                        <NavigationBar />
                                        <Component {...pageProps} />
                                    </>
                                }
                            </WagmiConfig>
                            <Web3Modal
                                projectId={projectId}
                                ethereumClient={ethereumClient}
                                themeColor="purple"
                            />
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
