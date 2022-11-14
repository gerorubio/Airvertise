import { CampaignRequest } from "./campaign.d"
import { BigNumberish, ethers } from "ethers"
import { makeAutoObservable } from "mobx"
import { ICampaignStore } from "./campaign"
import moment, { now } from "moment"
import { number } from "mobx-state-tree/dist/internal"

/**
 * Store to save campaign information
 */

export class CampaignStore implements ICampaignStore {
    maticWeiValue = 1_000_000_000_000_000_000
    title = ""
    name = ""
    description = ""
    airdropValue = 0
    advertisementUri = ""
    destinations = []
    endDateTime = moment().toDate()
    startDateTime = moment().toDate()
    isCampaignEndlessSelected = true

    constructor() {
        makeAutoObservable(this)
    }

    setTitle = (value: string) => {
        this.title = value
    }

    setName = (value: string) => {
        this.name = value
    }

    setAirdropValue = (value: string) => {
        this.airdropValue = Number(value)
    }

    setDescription = (value: string) => {
        this.description = value
    }

    setDestinations = (value: string[]) => {
        this.destinations = value
    }

    setAdvertisementUri = (value: string) => {
        this.advertisementUri = value
    }

    setDestination = (value: string[]) => {
        this.destinations = value
    }

    setStartDateTime = (value: Date) => {
        this.startDateTime = value
    }

    setEndDateTime = (value: Date) => {
        this.endDateTime = value
    }

    setIsCampaignEndlessSelected = (enabled: boolean) => {
        this.isCampaignEndlessSelected = enabled
    }

    createCampaignData(): CampaignRequest {
        const endDateTime = this.isCampaignEndlessSelected ? 0 : moment(this.endDateTime).unix()
        return {
            title: this.title,
            description: this.description,
            airdropValue: ethers.utils.parseUnits((this.airdropValue * this.maticWeiValue).toString(), "wei"),
            name: this.name,
            advertisementUri: this.advertisementUri,
            destinations: this.destinations,
            endDateTime: endDateTime,
        }
    }
}
