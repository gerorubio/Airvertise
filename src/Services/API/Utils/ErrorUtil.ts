import { SimpleErrorResponse } from "@Services/API/Http/SimpleErrorResponse"
import { ErrorType } from "./ErrorType"

export const generateErrorResponse = (message: string, type: ErrorType): SimpleErrorResponse => {
    return {
        message,
        type,
        success: false,
    }
}

// TODO: use i18n
export const generateUnhandledErrorResponse = () => {
    return {
        message: "Hubo un error al procesar la solicitud. Por favor intenta más tarde",
        type: "error",
        success: false,
    }
}

export const generateHttpResponse = (status: number, data: any) => {
    return {
        status,
        data,
    }
}

export const generateHttpErrorResponse = (status: number, message: string, type: ErrorType) => {
    return {
        status,
        data: {
            message,
            type,
            success: false,
        },
    }
}

// TODO: use i18n
export const generateHttpUnhandledErrorResponse = () => {
    return {
        status: 402,
        data: {
            message: "Hubo un error al procesar la solicitud. Por favor intenta más tarde",
            type: "error",
            success: false,
        },
    }
}
