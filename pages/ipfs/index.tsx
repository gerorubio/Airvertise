import React from "react"
import { NextPage } from "next"
import { IHomePage } from "@Interfaces"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { useSigner } from "wagmi"

const Home: NextPage<IHomePage.IProps> = () => {
  const { t } = useTranslation()

  const { data: walletConnectSigner } = useSigner()

  return (
      <></>
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
