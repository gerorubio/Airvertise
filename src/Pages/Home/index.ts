import { Http } from "@Services"
import { HttpResponse, SimpleErrorResponse } from "@Services/API/Http/SimpleErrorResponse"
import axios from "axios"

export const HomeService = {
    GetHomeData: async (): Promise<null | SimpleErrorResponse> => {
        const response: HttpResponse = await axios.get("/api/proxy/v1/home")
        return Http.ResolvePromiseFromHttpResponse<null | SimpleErrorResponse>(response)
    },
}
