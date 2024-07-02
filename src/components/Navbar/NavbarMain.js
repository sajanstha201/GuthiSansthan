import { DropdownButton, DropdownItem } from "react-bootstrap"
import { useSelectLanguage } from "../../context/LanguageChoice"
export const NavbarMain=()=>{
    const {selectLanguage,setSelectLanguage}=useSelectLanguage()
    return(
        <div className="w-full h-[10vh] flex flex-row justify-between items-center p-5 bg-gray-400">
            <div>
            <h1>This is navbar</h1>
            </div>
            <div>
                <DropdownButton title={selectLanguage}>
                    <DropdownItem onClick={()=>setSelectLanguage('Nepali')}>Nepali</DropdownItem>
                    <DropdownItem onClick={()=>setSelectLanguage('English')}>English</DropdownItem>
                    <DropdownItem onClick={()=>setSelectLanguage('Newari')}>Newari</DropdownItem>
                    <DropdownItem onClick={()=>setSelectLanguage('Mithila')}>Mithila</DropdownItem>
                </DropdownButton>
            </div>

        </div>
    )
}