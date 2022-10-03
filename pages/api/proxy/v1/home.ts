import { Http } from "@Services/API/Http"
import { HttpResponse } from "@Services/API/Http/SimpleErrorResponse"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    req.url = req.url.replace("proxy/", "")
    const result = await Http.HttpRequest<HttpResponse>(req.method, req.url, null, null)

    res.status(200).json(result.data)
}
