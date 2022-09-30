export enum TrackRoute {
    HOME = "/home",
}

export enum TrackPage {
    HOME = "Home",
}

export enum TrackButton {
    CONTINUE = "Continue",
    SUBMIT = "Submit",
    SHOW_MORE = "Show More",
}

export enum TrackCategory {}

export const AnalyticsService = {
    /** *
     * @description Track when a page was viewed
     * @param {TrackRoute} route the route of the page
     * @param {TrackPage} page The page was viewed
     * @constructor
     */
    TrackPageViewed(route: TrackRoute, page: TrackPage) {
        const eventLabel = `Site - ${page} - Screen Viewed`
        const description = `This event fires when a user lands on the ${page} Screen`

        track("event", "page_view", {
            event_label: eventLabel,
            description,
            page_path: route,
            page_title: page,
        })
    },

    /** *
     * @description Track when a button is tapped inside a Page
     * @param {TrackPage} page The page in which the button is located
     * @param {TrackCategory} category The component in which the button is inflated
     * @param {TrackButton} button the title of the button
     * @param {string} action description of the screen/view/action the button will execute. E.g: "show sign up dialog"
     * @param {object} additionalInfo additional info to track besides the track itself"
     * @constructor
     */
    TrackButtonTapped(
        page: TrackPage,
        category: TrackCategory,
        button: TrackButton,
        action: String,
        additionalInfo?: object
    ) {
        const eventLabel = `Site - ${page} - ${category} - ${button} Button Tapped`
        const description = `This event fires when a user taps on ${button} to ${action.toLowerCase()}`

        track("event", "button_tapped", {
            event_category: category,
            event_label: eventLabel,
            description,
            ...additionalInfo,
        })
    },
}

function track(event: String, action: String, additionalInfo: object) {
    // @ts-ignore
    window.gtag(event, action, additionalInfo)
}
