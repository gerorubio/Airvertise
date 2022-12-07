import React, { useEffect } from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { IHomePage } from "@Interfaces"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import NavigationBar from "@Components/NavigationBar"
import { useConnectModal } from "@web3modal/react"
import { useProvider, useSigner } from "@web3modal/react"
import { ethers } from "ethers"
import { Signer } from "ethers"
import { Typography, Box, Grid, Container, Stack, Button, Card, CardMedia, CardContent } from "@mui/material";
import Image from "next/image"
import FooterBar from "@Components/FooterBar"
import Roadmap from "@Components/Roadmap"
import Hero from "@Components/Hero"
import ProcessSection from "@Components/ProcessSection"
import ContactForm from "@Components/ContactForm"


const features = [
    {
        "title": "home.featureTitle1",
        "text": "home.feature1",
        "img": "..."
    },
    {
        "title": "home.featureTitle2",
        "text": "home.feature2",
        "img": "..."
    },
    {
        "title": "home.featureTitle3",
        "text": "home.feature3",
        "img": "..."
    }
];

const Home: NextPage<IHomePage.IProps> = () => {
    const { t } = useTranslation()
    const { open: openConnectModal } = useConnectModal()

    const { data: walletConnectSigner } = useSigner()

    function getDevelopmentSignerOrDefault(): Signer {
        const isLocalDevelopmentEnabled = process.env.NEXT_PUBLIC_LOCAL_DEVELOPMENT_ENABLED === "true"
        if (isLocalDevelopmentEnabled) {
            return new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_URL_RPC_PROVIDER).getSigner(
                process.env.NEXT_PUBLIC_ADDRESS_SIGNER
            )
        }

        return walletConnectSigner
    }

    return (
        <React.Fragment>
            <NavigationBar isLoggedIn={false} onConnectWalletClicked={openConnectModal} />
            <div style={{ background: 'linear-gradient(-14deg, #121212 82%, #FE7B26 90%, #FB145E 100%)' }}>
                <Hero />
                <ProcessSection />
                {/* Features */}
                <Box py={4}>
                    <Container>
                        <Typography variant="h3" align="center" gutterBottom>{t('home.feature')}</Typography>
                        <Grid container>
                            {features.map((feature) => (
                                <Grid key={feature.title} item md={4} paddingY={'1rem'}>
                                    <Card sx={{ width: '90%', mx: 'auto', height:'100%' }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image="https://rabbithole.gg/home/artisan.png"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {t(feature.title)}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary">
                                            {t(feature.text)}
                                        </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
                {/* More info */}
                <Box px={5}>
                    <Grid container spacing={0}
                        alignItems="center"
                        justifyContent="center"
                        style={{ minHeight: '60vh' }}>
                        <Grid item md={1} />
                        <Grid item md={3}>
                            <Container sx={{width: {sx: '50%', lg: '75%'}, marginX: 'auto'}}>
                                <Typography variant="h6">{t("home.leftImageText")}</Typography>
                            </Container>
                        </Grid>
                        <Grid item md={4}>
                            <img src="https://static.vecteezy.com/system/resources/previews/008/506/601/original/money-and-finances-3d-icon-3d-rendering-png.png" style={{width: '100%'}}/>
                        </Grid>
                        <Grid item md={3}>
                            <Container sx={{width: {sx: '50%', lg: '75%'}, marginX: 'auto'}}>
                                <Typography variant="h6">{t("home.rightImageText")}</Typography>
                            </Container>
                        </Grid>
                        <Grid item md={1} />
                    </Grid>
                </Box>
                {/* Roadmap */}
                <Roadmap />
                {/* Chains */}
                <Box py={5} bgcolor={'#181818'}>
                    <Container>
                        <Typography variant="h4" textAlign={'center'} gutterBottom pb={5}>
                            Supported chains
                        </Typography>
                        <Grid container>
                            <Grid item xs={3}>
                                <Stack spacing={2} alignItems="center">
                                    <img src="https://pbs.twimg.com/profile_images/1366339686432579587/THNz1DZm_400x400.png" width={'50%'} height={'auto'}  />
                                    {t("common.chains.polygon")}
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack spacing={2} alignItems="center">
                                    <img src="https://gateway.optimism.io/static/media/optimism.caeb9392.svg" width={'50%'} height={'auto'}  />
                                    {t("common.chains.optimism")}
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack spacing={2} alignItems="center">
                                    <img src="https://chainbase.online/assets/chain/Arbitrum-logo.png" width={'50%'} height={'auto'}  />
                                    {t("common.chains.arbitrum")}
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack spacing={2} alignItems="center">
                                    <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/5691.png" width={'50%'} height={'auto'}  />
                                    {t("common.chains.skale")}
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <ContactForm />
            </div>
            <FooterBar />
        </React.Fragment>
    )
}

export const getServerSideProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    }
}

export default Home
