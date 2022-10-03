import "isomorphic-unfetch"
import { HttpModel } from "@Interfaces"
import {
    generateErrorResponse,
    generateHttpErrorResponse,
    generateHttpResponse,
    generateHttpUnhandledErrorResponse,
    generateUnhandledErrorResponse,
} from "@Services/API/Utils/ErrorUtil"
import { HttpResponse, SimpleErrorResponse } from "./SimpleErrorResponse"

export const Http = {
    Request: async <A>(
        methodType: string,
        url: string,
        params?: HttpModel.IRequestQueryPayload,
        payload?: HttpModel.IRequestPayload,
        apiUrl: string = null
    ): Promise<A | SimpleErrorResponse> => {
        return new Promise((resolve, reject) => {
            let baseUrl = process.env.API_URL
            if (apiUrl !== null) {
                baseUrl = apiUrl
            }

            const query = params || ""
            fetch(`${baseUrl}${url}${query}`, {
                body: JSON.stringify(payload),
                cache: "no-cache",
                headers: {
                    "content-type": "application/json",
                },
                method: `${methodType}`,
            })
                .then(async response => {
                    if (response.status === 401) {
                    } else if (response.status === 400) {
                        response
                            .clone()
                            .json()
                            .then(error => {
                                return resolve(generateErrorResponse(error.message, error.type))
                            })
                    } else if (response.status > 402) {
                        // @ts-ignore
                        return resolve(generateUnhandledErrorResponse())
                    } else {
                        response.json().then(jsonResp => {
                            if (!jsonResp.success) {
                                return resolve(jsonResp)
                            }
                            return resolve(jsonResp)
                        })
                    }
                })
                .catch(e => {
                    return resolve(generateErrorResponse("error", "error"))
                })
        })
    },

    HttpRequest: async <A>(
        methodType: string,
        url: string,
        params?: HttpModel.IRequestQueryPayload,
        payload?: HttpModel.IRequestPayload,
        headers?: HttpModel.IRequestPayload
    ): Promise<HttpResponse> => {
        return new Promise((resolve, reject) => {
            const baseUrl = process.env.API_URL
            const query = params || ""
            const queryHeaders = headers || ""

            fetch(`${baseUrl}${url}${query}`, {
                body: payload ? JSON.stringify(payload) : null,
                cache: "no-cache",
                headers: { ...queryHeaders, "content-type": "application/json" },
                method: `${methodType}`,
            })
                .then(async response => {
                    if (response.status === 401) {
                        return resolve(generateHttpErrorResponse(401, "No autenticado", "error"))
                    }
                    if (response.status === 400) {
                        response
                            .clone()
                            .json()
                            .then(error => {
                                return resolve(generateHttpErrorResponse(400, error.message, error.type))
                            })
                    } else if (response.status > 401) {
                        return resolve(generateHttpUnhandledErrorResponse())
                    } else {
                        response.json().then(jsonResp => {
                            return resolve(generateHttpResponse(200, jsonResp))
                        })
                    }
                })
                .catch(e => {
                    return resolve(generateHttpUnhandledErrorResponse())
                })
        })
    },

    ResolvePromiseFromHttpResponse: async <A>(response: HttpResponse): Promise<A> => {
        return new Promise((resolve, reject) => {
            if (response.status === 200 && response.data.success == true) {
                resolve(response.data)
            }

            reject(response.data)
        })
    },
}
