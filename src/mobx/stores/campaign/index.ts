import { BigNumberish } from "ethers"
import { makeAutoObservable } from "mobx"
import { ICampaignStore } from "./campaign"

/**
 * Store to save campaign information
 */

export class CampaignStore implements ICampaignStore {
    title = ""
    name = ""
    description = ""
    airdropValue = 0 as BigNumberish
    advertisementUri = ""
    destinations = []
    endDateTime = 0 as BigNumberish

    constructor() {
        makeAutoObservable(this)
    }

    setTitle = (value: string) => {
        this.title = value
    }

    setName = (value: string) => {
        this.name = value
    }
    setDescription = (value: string) => {
        this.description = value
    }
    setAirdropValue(value: BigNumberish) {
        this.airdropValue = value
    }
    setAdvertisementUri = (value: string) => {
        this.advertisementUri = value
    }
    setDestination(value: string[]) {
        this.destination = value
    }
    setEndDateTime(value: BigNumberish) {
        this.endDateTime = value
    }
}
