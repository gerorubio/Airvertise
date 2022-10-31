import { BigNumberish } from "ethers"
export interface ICampaignStore {
    title: string
    name: string
    description: string
    airdropValue: string
    advertisementUri: string
    destinations: string[]
    endDateTime: Date
    isCampaignEndlessSelected: boolean
    setTitle: (string) => void
    setName: (string) => void
    setDescription: (string) => void
    setAirdropValue: (string) => void
    setIsCampaignEndlessSelected: (checked: boolean) => void
    setEndDateTime: (date: Date) => void
    createCampaignData(): CampaignRequest
    setDestinations: (destinations: string[]) => void
}

export interface CampaignRequest {
    title: string
    name: string
    description: string
    airdropValue: BigNumberish
    advertisementUri: string
    destinations: string[]
    endDateTime: BigNumberish
}
