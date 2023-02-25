// Declaring this interface provides type safety for message keys
type Messages = typeof import('./src/translations/en.json');
declare interface IntlMessages extends Messages {}
