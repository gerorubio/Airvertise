import React, { useEffect, useState, useCallback } from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { IClaimNftPage } from "@Interfaces"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import Button from "@mui/material/Button"
import NavigationBar from "@Components/NavigationBar"
import { useConnectModal } from "@web3modal/react"
import { useSigner } from "@web3modal/react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { ClaimNftService } from "@Services"
import { IClaimNftPayload } from "src/Pages/ClaimNft/IClaimNftPayload"
import { Container, Box, Stack, Card, CardMedia, CardContent, Grid, Typography } from "@mui/material"
import ImageViewer from 'react-simple-image-viewer';

const ClaimNft: NextPage<IClaimNftPage.IProps> = ({ pageReference }) => {
    const [recaptchaToken, setRecaptchaToken] = useState("")

    const router = useRouter()
    const { t } = useTranslation()
    const { open: openConnectModal } = useConnectModal()
    const { executeRecaptcha } = useGoogleReCaptcha()

    useEffect(() => {
        if (recaptchaToken.length > 0) {
            console.log(recaptchaToken)
            verifyRecaptcha()
        }
    }, [recaptchaToken])

    const verifyRecaptcha = async () => {
        //we have a token, proceed to validate it
        const validateCaptchaPayload: IClaimNftPayload = {
            recaptchaToken: recaptchaToken,
        }
        const { data } = await ClaimNftService.ValidateCaptcha(validateCaptchaPayload)
        if (data.score && data.score >= 0.5) {
            // Is more likely a human
            console.log(`I'm a human: score ${data.score}`)
        } else {
            console.log(`I'm a bot: score ${data.score}`)
        }
    }

    const getRecaptchaToken = async () => {
        if (!executeRecaptcha) {
            console.log("Recaptcha has not been loaded")
            return
        }

        const token = await executeRecaptcha(pageReference)
        setRecaptchaToken(token)
    }

    // Claim button
    const [btnEnable, setBtnEnable] = useState(true);

    // Image viewer
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const image = ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/17a9bb86-0797-4eae-91b4-0971d16366b6/df34j0j-7161f111-edbd-4e98-8e34-6334e811ee3a.png/v1/fill/w_774,h_1032,q_70,strp/mother_nature___nft_by_raccoondesignstudio_df34j0j-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcwNyIsInBhdGgiOiJcL2ZcLzE3YTliYjg2LTA3OTctNGVhZS05MWI0LTA5NzFkMTYzNjZiNlwvZGYzNGowai03MTYxZjExMS1lZGJkLTRlOTgtOGUzNC02MzM0ZTgxMWVlM2EucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YpOqm1MIf0SIDDLGyQvaSrCEDkKaUeHwEvGX6z3OxuQ"];

    const openImageViewer = useCallback(() => {
        setIsViewerOpen(true);
        setTimeout(() => setBtnEnable(false), 5000)
    }, []);

    const closeImageViewer = () => {
        setIsViewerOpen(false);
    };

    

    return (
        <React.Fragment>
            <NavigationBar isLoggedIn={false} onConnectWalletClicked={openConnectModal} />
            <Box sx={{ backgroundImage: "url('/assets/logo/Texture.png')", backgroundSize: 'cover' }}>
                <Container>
                    <Grid container spacing={2} py={5}>
                        <Grid item md={6} >
                            <Card sx={{ padding: '1rem' }}>
                                <img src={image[0]} style={{ width: '100%', height: 'auto' }} onClick={ () => openImageViewer() } />
                                {isViewerOpen && (
                                    <ImageViewer
                                        src={ image }
                                        currentIndex={ 0 }
                                        disableScroll={ false }
                                        closeOnClickOutside={ true }
                                        backgroundStyle={{
                                            backgroundColor: "rgba(0,0,0,0.75)"
                                        }}
                                        onClose={ closeImageViewer }
                                    />
                                )}
                            </Card>
                        </Grid>
                        <Grid item md={6} justifyContent="center" alignItems="center" >
                            <Stack justifyContent="center" alignItems="center">
                                <Typography variant="h1" gutterBottom>Nature Art</Typography>
                                <Typography variant="subtitle1" align="justify" gutterBottom>
                                    Nature Art is a collection of Non-Fungible Tokens (NFTs) that celebrates nature and its beauty. Each token is a digital representation of an original artwork created by an artist, inspired by the natural world. The artwork is either abstract or realistic and can range from vibrant, detailed paintings of animals and plants to more minimalist, abstract works of art. The NFTs are unique, one-of-a-kind, and can never be duplicated. They are stored on the blockchain, providing a secure and immutable record of ownership. Nature Art is the perfect way to bring nature into your home and enjoy true works of art.
                                </Typography>
                                <Button variant="contained" sx={{ marginY:'0.5rem' }} onClick={getRecaptchaToken} disabled={btnEnable}>
                                    Claim reward
                                </Button>
                                <Typography variant="caption" gutterBottom>Click the image to claim your reward</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
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

export default ClaimNft
