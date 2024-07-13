import { DropdownButton, DropdownItem } from "react-bootstrap"
import { useSelectLanguage } from "../../context/LanguageChoice"
import { ContactUs } from "../../webpage/ContactUs"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { HeaderTop,HeaderButtom } from "./"
import { useLocation } from "react-router-dom"
export const HeaderMain=()=>{
    const location=useLocation()
    const isFirstPage=location.pathname === '/'||location.pathname==='/log-in'||location.pathname==='/sign-in'
    const {selectLanguage,setSelectLanguage}=useSelectLanguage()
    const {i18n}=useTranslation()
    return(
        <div className={`${location.pathname==='/'?'':'shadow-lg'} top-0  flex  flex-col justify-center z-10 relative`}>
            
        <HeaderTop></HeaderTop>
        {!isFirstPage&&<HeaderButtom/> }
        </div>
    )
}