/* Return language name in its own language */
export function languageName(locale: string) {
    switch(locale) {
        case "en":
            return "English";
        case "es":
            return "Español";
        default:
            return locale;
    }
}
