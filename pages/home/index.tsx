import React from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { IHomePage } from "@Interfaces"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import Button from "@mui/material/Button"
import NavigationBar from "@Components/NavigationBar"
import { useConnectModal } from "@web3modal/react"
import { useAccount } from "@web3modal/react"

const Home: NextPage<IHomePage.IProps> = () => {
    const router = useRouter()
    const { t } = useTranslation()
    const { open: openConnectModal } = useConnectModal()

    const { address, connector } = useAccount()

    return (
        <React.Fragment>
            <NavigationBar isLoggedIn={false} onConnectWalletClicked={openConnectModal} />
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
