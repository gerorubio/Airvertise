import { CampaignRequest } from "./campaign.d"
import { BigNumberish, ethers } from "ethers"
import { makeAutoObservable } from "mobx"
import { ICampaignStore } from "./campaign"
import moment, { now } from "moment"

/**
 * Store to save campaign information
 */

export class CampaignStore implements ICampaignStore {
    title = ""
    name = ""
    description = ""
    airdropValue = "0"
    advertisementUri = ""
    destinations = []
    endDateTime = moment().toDate()
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
        this.airdropValue = value
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

    setEndDateTime = (value: Date) => {
        this.endDateTime = value
    }

    setIsCampaignEndlessSelected(enabled: boolean) {
        this.isCampaignEndlessSelected = enabled
    }

    createCampaignData(): CampaignRequest {
        const endDateTime = this.isCampaignEndlessSelected ? 0 : moment(this.endDateTime).unix()
        return {
            title: this.title,
            description: this.description,
            airdropValue: ethers.utils.parseUnits(this.airdropValue, "wei"),
            name: this.name,
            advertisementUri: "TODO: https://trello.com/c/Z86PX7sk/4-implement-ipfs",
            destinations: this.destinations,
            endDateTime: endDateTime,
        }
    }
}
