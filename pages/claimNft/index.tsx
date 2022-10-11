import React, { useEffect, useState } from "react"
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
import { Http } from "@Services/API/Http"
import { HttpResponse } from "@Services/API/Http/SimpleErrorResponse"
import axios from "axios"
import { ClaimNftService } from "@Services"
import { IClaimNftPayload } from "src/Pages/ClaimNft/IClaimNftPayload"

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

    return (
        <React.Fragment>
            <NavigationBar isLoggedIn={false} onConnectWalletClicked={openConnectModal} />
            <Button variant="contained" color="secondary" onClick={getRecaptchaToken}>
                Claim Nft
            </Button>
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
