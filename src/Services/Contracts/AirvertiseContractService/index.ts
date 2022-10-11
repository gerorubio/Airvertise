import { Airvertise__factory } from "./../../../../types/ethers-contracts/factories/Airvertise__factory"
import { BigNumberish, PayableOverrides } from "ethers"
import { Airvertise } from "types/ethers-contracts/Airvertise"
import { Signer } from "ethers"
import { PromiseOrValue } from "types/ethers-contracts/common"

export class AirvertiseContractService {
    private contract: Airvertise

    /**
     *
     * @param address address where the contract was deployed
     * @param signer the signer account used to sign transactions
     */
    constructor(address: string, signer: Signer) {
        this.contract = Airvertise__factory.connect(address, signer)
    }

    /*** Allows user to create ad campaign
     * @param title title meant to be displayed to final users
     * @param name internal campaign identifier meant to be used by customer
     * @param airdropValue value in wei for each individual airdrop
     * @param advertisementUri IPFS URI of the advertisement image
     * @param to list of addresses to airdrop
     */
    async createCampaign(
        title: string,
        name: string,
        airdropValue: BigNumberish,
        advertisementUri: string,
        to: string[],
        overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<void> {
        await this.contract.createCampaign(title, name, airdropValue, advertisementUri, to, overrides)
    }
}
