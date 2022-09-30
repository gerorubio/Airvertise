declare namespace Process {
    interface ProcessEnv {
        PROXY_MODE: string
        API_URL: string
    }
}

declare namespace jest {
    interface Options {
        media?: string
        modifier?: string
        supports?: string
    }
}
