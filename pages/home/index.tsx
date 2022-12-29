import React from "react"
import { NextPage } from "next"
import { IHomePage } from "@Interfaces"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { useSigner } from "wagmi"
import { ethers } from "ethers"
import { Signer } from "ethers"
import { Typography, Box, Grid, Container, Stack, Button, Card, CardMedia, CardContent } from "@mui/material";
import FooterBar from "@Components/FooterBar"
import Roadmap from "@Components/Roadmap"
import Hero from "@Components/Hero"
import ProcessSection from "@Components/ProcessSection"
import ContactForm from "@Components/ContactForm"
import UseCases from "@Components/UseCases"



const Home: NextPage<IHomePage.IProps> = () => {
    const { t } = useTranslation()

    const { data: walletConnectSigner } = useSigner()

    return (
        <React.Fragment>
            {/* <div style={{ background: 'linear-gradient(-14deg, #121212 87%, #FE7B26 92%, #FB145E 100%)' }}> */}
            <>
                <Hero />
                <ProcessSection />
                {/* Features */}
                <UseCases />
                {/* More info */}
                {/* <Box px={5}>
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
                </Box> */}
                {/* Roadmap */}
                <Roadmap />
                {/* Chains */}
                <Box py={2} bgcolor={'#181818'}>
                    <Container>
                        <Typography variant="h4" textAlign={'center'} gutterBottom pb={2}>
                            Supported chains
                        </Typography>
                        <Grid container>
                            <Grid item xs={4}>
                                <Stack spacing={2} alignItems="center">
                                    <img src="https://pbs.twimg.com/profile_images/1366339686432579587/THNz1DZm_400x400.png" width={'35%'} height={'auto'}  />
                                    <Typography variant="h6">{t("common.chains.polygon")}</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2} alignItems="center">
                                    <img src="https://gateway.optimism.io/static/media/optimism.caeb9392.svg" width={'35%'} height={'auto'}  />
                                    <Typography variant="h6">{t("common.chains.optimism")}</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2} alignItems="center">
                                    <img src="https://chainbase.online/assets/chain/Arbitrum-logo.png" width={'35%'} height={'auto'}  />
                                    <Typography variant="h6">{t("common.chains.arbitrum")}</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <ContactForm />
            </>
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
