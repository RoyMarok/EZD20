import i18n from "i18next"
import Backend from 'i18next-http-backend'
import { initReactI18next } from "react-i18next"

i18n
    .use(Backend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // resources,
        lng: "ru", 
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n