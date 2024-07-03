import { useTranslation } from "react-i18next"

export const Footer=()=>{
    const {t}=useTranslation()
    const {i18n}=useTranslation()
    return(
        <div className="w-full bg-slate-200 h-[500px]">
            <h1>{t('hello')}</h1>
            <button onClick={()=>{console.log("changing to english",t('hello'));i18n.changeLanguage('english')}}>English</button>
            <button onClick={()=>{i18n.changeLanguage('nepali');console.log("changing to nepali",t('hello'));}}>Nepali</button>
        </div>
    )
}