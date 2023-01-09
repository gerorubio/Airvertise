import React, { useEffect } from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { IHomePage } from "@Interfaces"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import Button from "@mui/material/Button"
import NavigationBar from "@Components/NavigationBar"
import { useWeb3Modal  } from "@web3modal/react"
import { useSigner } from "wagmi"
import { AirvertiseContractService } from "@Services/Contracts/AirvertiseContractService"
import { ethers } from "ethers"
import { Signer } from "ethers"
import CampaignForm from "@Components/CampaignForm"
import { Box } from "@mui/material"

const App: NextPage<IHomePage.IProps> = () => {
    const router = useRouter()
    const { t } = useTranslation()
    const { open: openConnectModal } = useWeb3Modal ()

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

    async function createCampaign() {
        const signer = getDevelopmentSignerOrDefault()

        if (!signer) {
            openConnectModal()
            return
        }

        const airvertiseContractService = new AirvertiseContractService(
            process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
            signer
        )
        const value = ethers.utils.parseUnits("2500", "wei")
        const gasLimit = await signer.getGasPrice()

        await airvertiseContractService.createCampaign(
            "title",
            "description",
            "name",
            100,
            "http://www.google.com",
            ["0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"],
            0,
            { value, gasLimit }
        )
    }

    return (
        <React.Fragment>
            <Box sx={{ backgroundImage: 'url("/assets/logo/Texture.png")', backgroundSize: 'cover', minHeight: '93vh', width: '100%', position: 'absolute' }}>
                <CampaignForm />
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

export default App
