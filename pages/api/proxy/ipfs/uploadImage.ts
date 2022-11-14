import { NextApiRequest, NextApiResponse } from "next"
import { create } from "ipfs-http-client"
import formidable from "formidable"

export const config = {
    api: {
        bodyParser: false,
    },
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const form = new formidable.IncomingForm()
    return form.parse(req, async function (err, fields, files) {
        // Received the file
        const file = files.file

        const authorization =
            "Basic " +
            Buffer.from(process.env.INFURA_IPFS_PROJECT_ID + ":" + process.env.INFURA_IPFS_API_SECRET_KEY).toString(
                "base64"
            )

        const client = create({
            host: "ipfs.infura.io",
            port: 5001,
            protocol: "https",
            headers: {
                authorization: authorization,
            },
        })

        try {
            const result = await client.add(JSON.stringify(file))
            return res.status(200).json({ ...result })
        } catch (error) {
            return res.status(200).json({ ...error })
        }
    })
}
