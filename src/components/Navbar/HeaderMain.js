import { DropdownButton, DropdownItem } from "react-bootstrap"
import { useSelectLanguage } from "../../context/LanguageChoice"
import { ContactUs } from "../../webpage/ContactUs"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
export const HeaderMain=()=>{
    const {selectLanguage,setSelectLanguage}=useSelectLanguage()
    const {i18n}=useTranslation()
    return(
        <div className="w-full h-[10vh] flex flex-row justify-between items-center p-5 bg-gray-400">
            <div>
            <h1>This is navbar</h1>
            </div>
            <div>
            <Link to='/contact-us'>Contact us</Link>
            </div>
            <div>
                <DropdownButton title={selectLanguage}>
                    <DropdownItem onClick={()=>{setSelectLanguage('Nepali');i18n.changeLanguage('nepali')}}>Nepali</DropdownItem>
                    <DropdownItem onClick={()=>{setSelectLanguage('English');i18n.changeLanguage('english')}}>English</DropdownItem>
                    <DropdownItem onClick={()=>{setSelectLanguage('Newari');i18n.changeLanguage('newari')}}>Newari</DropdownItem>
                    <DropdownItem onClick={()=>{setSelectLanguage('Mithila');i18n.changeLanguage('mithila')}}>Mithila</DropdownItem>
                </DropdownButton>
            </div>

        </div>
    )
}