import { Http } from "@Services"
import { HttpResponse, SimpleErrorResponse } from "@Services/API/Http/SimpleErrorResponse"
import axios, { AxiosResponse } from "axios"
import { IClaimNftPayload } from "./IClaimNftPayload"
import { IClaimNftResponse } from "./IClaimNftResponse"

export const ClaimNftService = {
    ValidateCaptcha: async (payload: IClaimNftPayload): Promise<AxiosResponse<IClaimNftResponse>> => {
        return await axios.post("/api/proxy/validateCaptcha", payload)
    },
}
