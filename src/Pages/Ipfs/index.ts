import axios, { AxiosResponse } from "axios"
import { IUploadImageResponse } from "./IUploadImageResponse"

export const IpfsService = {
    UploadImage: async (payload: FormData): Promise<AxiosResponse<IUploadImageResponse>> => {
        return await axios.post("/api/proxy/ipfs/uploadImage", payload)
    },
}
