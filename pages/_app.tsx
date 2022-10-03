import * as React from "react"
import "../styles/global.css"
import { AppProps } from "next/app"
import { appWithTranslation } from "next-i18next"
import Head from "next/head"
import { CacheProvider, EmotionCache } from "@emotion/react"
import createEmotionCache from "../src/Definitions/Styled/createEmotionCache"
import lightThemeOptions from "../src/Definitions/Styled/theme"
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface AirvertiseProps extends AppProps {
    emotionCache?: EmotionCache
}

function WebApp(props: AirvertiseProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
    const lightTheme = createTheme(lightThemeOptions)

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Airvertise</title>
                <meta name="description" content="Arrocera" />
                <meta name="robots" content="noodp" />
                <meta name="keywords" content="" />
            </Head>
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    )
}

export default appWithTranslation(WebApp)
