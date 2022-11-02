import { BigNumberish } from "ethers"
export interface ICampaignStore {
    title: string
    name: string
    description: string
    airdropValue: number
    advertisementUri: string
    destinations: string[]
    startDateTime: Date
    endDateTime: Date
    isCampaignEndlessSelected: boolean
    setTitle: (value: string) => void
    setName: (value: string) => void
    setDescription: (value: string) => void
    setAirdropValue: (value: string) => void
    setIsCampaignEndlessSelected: (checked: boolean) => void
    setEndDateTime: (date: Date) => void
    setStartDateTime: (date: Date) => void
    createCampaignData(): CampaignRequest
    setDestinations: (destinations: string[]) => void
    setAdvertisementUri: (value: string) => void
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
