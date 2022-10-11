import { IClaimNftResponse } from "./../../../src/Pages/ClaimNft/IClaimNftResponse"
import { Http } from "@Services/API/Http"
import { HttpResponse, SimpleErrorResponse } from "@Services/API/Http/SimpleErrorResponse"
import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { recaptchaToken } = req.body

    // Rewrite the URL to verify with Google if the captcha is valid (The token is valid only for 2 minutes)
    req.url = "https://www.google.com/recaptcha/api/siteverify"
    req.body = `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
    const config = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    }

    const response: any = await axios.post(req.url, req.body, config)

    const data: IClaimNftResponse = {
        status: response.data.success,
        score: response.data.score,
        errorCodes: response.data["error-codes"],
    }

    res.status(200).json({ ...data })
}
