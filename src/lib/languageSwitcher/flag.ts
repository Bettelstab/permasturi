/* Show flag for locale */
export function flag(locale: string) {
    switch(locale) {
        case "en":
            return "🇬🇧";
        case "es":
            return "🇪🇸";
        default:
            return "🏳️";
    }
}
