import { ICampaignStore } from "./campaign/campaign.d"
import { CampaignStore } from "./campaign/index"
import { IRoot } from "./store"

export class RootStore implements IRoot {
    campaignStore: ICampaignStore

    constructor() {
        this.campaignStore = new CampaignStore()
    }
}
