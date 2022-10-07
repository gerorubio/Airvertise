import React, { useEffect } from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { IHomePage } from "@Interfaces"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import Button from "@mui/material/Button"
import NavigationBar from "@Components/NavigationBar"
import { useConnectModal } from "@web3modal/react"
import { useProvider, useSigner } from "@web3modal/react"
import { useAccount } from "@web3modal/react"
import { AirvertiseContractService } from "@Services/Contracts/AirvertiseContractService"
import { ethers } from "ethers"
import { Signer } from "ethers"

const Home: NextPage<IHomePage.IProps> = () => {
    const router = useRouter()
    const { t } = useTranslation()
    const { open: openConnectModal } = useConnectModal()

    const { data: walletConnectSigner } = useSigner()

    function getDevelopmentSignerOrDefault(): Signer {
        const isLocalDevelopmentEnabled = process.env.NEXT_PUBLIC_LOCAL_DEVELOPMENT_ENABLED === "true"
        if (isLocalDevelopmentEnabled) {
            return new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_URL_RCP_PROVIDER).getSigner(
                process.env.NEXT_PUBLIC_ADDRESS_SIGNER
            )
        }

        return walletConnectSigner
    }

    function createCampaign() {
        const signer = getDevelopmentSignerOrDefault()

        if (!signer) {
            openConnectModal()
            return
        }

        const airvertiseContractService = new AirvertiseContractService(
            process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
            signer
        )

        airvertiseContractService.createCampaign("NFT!", "nftTest", 20000, "https://www.google.com", [
            "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
        ])
    }

    return (
        <React.Fragment>
            <NavigationBar isLoggedIn={false} onConnectWalletClicked={openConnectModal} />
            <Button variant="contained" color="secondary" onClick={createCampaign}>
                Create Campaign
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

export default Home
