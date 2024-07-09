import { DropdownButton, DropdownItem } from "react-bootstrap"
import { useSelectLanguage } from "../../context/LanguageChoice"
import { ContactUs } from "../../webpage/ContactUs"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { HeaderTop,HeaderButtom } from "./"
export const HeaderMain=()=>{
    const {selectLanguage,setSelectLanguage}=useSelectLanguage()
    const {i18n}=useTranslation()
    return(
        <div className="top-0 shadow-lg flex justify-center bg-white h-full">
        <HeaderTop></HeaderTop>
        {/* <HeaderButtom/> */}
        </div>
    )
}