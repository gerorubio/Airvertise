import dotenv from "dotenv"
import nock from "nock"
import "@testing-library/jest-dom"

dotenv.config({ path: ".env.test" })

nock("http://localhost:3000")
    .get("/api/planetary/apod")
    .query({ api_key: "NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo", hd: true })
    .reply(200, {
        copyright: "Airvertise",
        date: "2020-12-19",
        explanation: "",
        hdurl: "",
        media_type: "",
        service_version: "",
        title: "",
        url: "",
    })

nock("http://localhost:3000")
    .get("/api/planetary/apod")
    .query({ api_key: "NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo", hd: false })
    .reply(500)

nock("http://localhost:3000").get("/api/200").reply(200, { success: true })

nock("http://localhost:3000").get("/api/404").reply(404, { success: false })
