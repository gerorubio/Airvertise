import React, { useEffect } from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { IHomePage } from "@Interfaces"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import NavigationBar from "@Components/NavigationBar"
import { useConnectModal } from "@web3modal/react"
import { useProvider, useSigner } from "@web3modal/react"
import { useAccount } from "@web3modal/react"
import { ethers } from "ethers"
import { Signer } from "ethers"
import { Typography, Box, Grid, Container, Stack, Button, Card, CardMedia, CardContent, CardActions, CardActionArea } from "@mui/material";
import Image from "next/image"

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
            <Container>
                <Grid container
                    spacing={0}
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '60vh' }}
                >
                    <Grid item sm={12} md={8}>
                        <Box sx={{
                            width: {
                                xs: '95%',
                                md: '75%'
                            }
                        }}>
                            <Typography variant="h3" gutterBottom>
                                Amazing title in this section
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                                Ullamco esse dolor et enim mollit fugiat pariatur nisi est sint. Deserunt fugiat labore labore amet laboris.
                            </Typography>
                            <Button variant="contained">
                                Start
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item sm={0} md={4} style={{backgroundImage: `url(${'https://rabbithole.gg/home/artisan.png'})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} height='300px' />
                </Grid>
            </Container>
            <Box py={4}>
                <Container>
                    <Grid container>
                        <Grid item md={4}>
                            <Card sx={{ width: '90%', mx: 'auto', height:'100%' }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://rabbithole.gg/home/artisan.png"
                                    alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Features
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Nisi pariatur ea consectetur do proident et. Sit culpa elit voluptate ea exercitation.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" variant="contained" sx={{ width: '100%' }}>
                                    Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item md={4}>
                            <Card sx={{ width: '90%', mx: 'auto', height:'100%' }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://rabbithole.gg/home/artisan.png"
                                    alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Features
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Nisi pariatur ea consectetur do proident et. Sit culpa elit voluptate ea exercitation.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" variant="contained" sx={{ width: '100%' }}>
                                    Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item md={4}>
                            <Card sx={{ width: '90%', mx: 'auto', height:'100%' }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://rabbithole.gg/home/artisan.png"
                                    alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Features
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Nisi pariatur ea consectetur do proident et. Sit culpa elit voluptate ea exercitation.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" variant="contained" sx={{ width: '100%' }}>
                                    Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
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
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Airvertise
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
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
