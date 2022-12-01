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
    const router = useRouter()
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
            {/* Hero */}
            <Container>
                <Grid container
                    spacing={5}
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '60vh' }}
                >
                    <Grid item sm={12} md={7} sx={{ width: { xs: '95%', md: '75%' }}}>
                            <Typography variant="h3" gutterBottom>
                                {t("home.heroTitle")}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                                {t("home.heroInfo")}
                            </Typography>
                            <Button variant="contained">
                                {t("home.heroButton")}
                            </Button>
                    </Grid>
                    <Grid item sm={12} md={5}>
                        <img src="https://rabbithole.gg/home/artisan.png" style={{width: '100%'}}/>
                    </Grid>
                </Grid>
            </Container>
            {/* Features */}
            <Box py={4}>
                <Container>
                    <Grid container>
                        {features.map((feature) => (
                            <Grid item md={4} paddingY={'1rem'}>
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
                                    <Typography variant="body2" color="text.secondary">
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
            <Box px={3}>
                <Grid container spacing={0}
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '60vh' }}>
                    <Grid item md={4}>
                        <Container sx={{width: {sx: '50%', lg: '75%'}, marginX: 'auto'}}>
                            <Typography variant="h6">Magna dolor labore ipsum cupidatat enim anim sint nostrud ullamco in irure nostrud consequat. Lorem quis sint et aute duis Lorem ex officia occaecat consectetur aliquip velit. Dolore sit voluptate ad sint minim reprehenderit ipsum qui sint duis ipsum cupidatat dolore. </Typography>
                        </Container>
                    </Grid>
                    <Grid item md={4}>
                        <img src="https://static.vecteezy.com/system/resources/previews/008/506/601/original/money-and-finances-3d-icon-3d-rendering-png.png" style={{width: '100%'}}/>
                    </Grid>
                    <Grid item md={4}>
                        <Container sx={{width: {sx: '50%', lg: '75%'}, marginX: 'auto'}}>
                            <Typography variant="h6">Magna dolor labore ipsum cupidatat enim anim sint nostrud ullamco in irure nostrud consequat. Lorem quis sint et aute duis Lorem ex officia occaecat consectetur aliquip velit. Dolore sit voluptate ad sint minim reprehenderit ipsum qui sint duis ipsum cupidatat dolore. </Typography>
                        </Container>
                    </Grid>
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
