import { useTranslation } from "react-i18next"

export const ContactUs=()=>{
    const {t}=useTranslation()
    return(
        <>
        <h1>{t('contact-us')}</h1>
        </>
    )
}