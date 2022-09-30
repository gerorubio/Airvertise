export interface SimpleErrorResponse {
    message: string
    type: string
    success: boolean
}

export interface HttpResponse {
    status: number
    data: any
}
