
import { useSelectLanguage } from "../../context/LanguageChoice"
import { ContactUs } from "../../webpage/ContactUs"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { HeaderTop,HeaderButtom } from "./"
import { useLocation } from "react-router-dom"
import { useMediaQuery } from "@mui/material"
export const HeaderMain=()=>{
    const location=useLocation()
    const isMobile=useMediaQuery('(max-width:1200px)')
    const isFirstPage=location.pathname === '/'||location.pathname==='/log-in'||location.pathname==='/sign-in'||!(isMobile)
    const {selectLanguage,setSelectLanguage}=useSelectLanguage()
    const {i18n}=useTranslation()
    return(
        <div className={`${location.pathname==='/'?'':''} top-0  flex  flex-col justify-center z-40 relative`}>
            
        <HeaderTop></HeaderTop>
        {!isFirstPage&&<HeaderButtom/> }
        </div>
    )
}