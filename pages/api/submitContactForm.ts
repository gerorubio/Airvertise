import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type ContactForm = {
    name: string,
    email: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if(req.method !== 'POST') {
      return res.status(405).send({message: 'Only POST request are allowed'})
    }

    const body = req.body as ContactForm;

    try {
      const auth = new google.auth.GoogleAuth({
          credentials: {
              client_email: process.env.NEXT_PUBLIC_GOOGLE_EMAIL,
              private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
          },
          scopes: [
              'https://www.googleapis.com/auth/drive',
              'https://www.googleapis.com/auth/drive.file',
              'https://www.googleapis.com/auth/spreadsheets'
          ]
      });

      const sheets = google.sheets({
          auth,
          version: 'v4'
      });

      const response = await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
          range: 'A1:B1',
          valueInputOption: 'USER_ENTERED',
          requestBody: {
              values: [
                  [body.name, body.email]
              ]
          }
      });

      return res.status(200).json({
        data: response.data
      });

  } catch (error) {
      return res.status(500).send({message: error.message ?? 'Something went wrong'});
  }
}