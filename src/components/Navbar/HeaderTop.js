import { useMediaQuery } from "@mui/material"
import { useSelectLanguage } from "../../context/LanguageChoice"
import { useTranslation } from "react-i18next"
import nepaliFlag from '../../media/FlagInfo/NepalFlag.png'
import newariFlag from '../../media/FlagInfo/NewariFlag.png'
import englishFlag from '../../media/FlagInfo/EnglishFlag.svg'
import mithilaFlag from '../../media/FlagInfo/MithilaFlag.png'
export const HeaderTop=()=>{
    const isMobile=useMediaQuery('(max-width:800px)')
    const {selectLanguage,setSelectLanguage}=useSelectLanguage()
    const {i18n}=useTranslation()
    const {t}=useTranslation()
    return(
        <div className={`${isMobile?'flex-col ':'flex-row  px-20 h-[100px]'} flex w-screen justify-between items-center p-2 `}>
            <div>
                Nepal LOGO
                guthi logo
            </div>
            <div className={`${isMobile?'w-full flex-col':'w-[50%] flex-row'} flex h-full items-center justify-center px-10`}>
                <div className={`${isMobile?'w-full h-[100px]':'w-[70%] h-full'} relative  flex items-center justify-center`}>
                    <div 
                        className={`${selectLanguage==='nepali'?'h-[50px] w-[50px] border-black border-2':'h-[40px] w-[40px]'} absolute left-[10%] bg-gray-50 rounded-full shadow-md cursor-pointer transition-all overflow-hidden items-center flex justify-center`} 
                        onClick={()=>{setSelectLanguage('nepali');i18n.changeLanguage('nepali')}}>
                        <img src={nepaliFlag} className="max-h-full max-w-full"></img></div>
                    <div 
                        className={`${selectLanguage==='newari'?'h-[50px] w-[50px] border-black border-2 ':'h-[40px] w-[40px]'} absolute left-[35%] bg-gray-50 rounded-full shadow-md cursor-pointer transition-all overflow-hidden items-center flex justify-center`}  
                        onClick={()=>{setSelectLanguage('newari');i18n.changeLanguage('newari')}}>
                        <img src={newariFlag} className="max-h-full max-w-full"></img></div>
                    <div 
                        className={`${selectLanguage==='english'?' h-[50px] w-[50px] border-black border-2 ':'h-[40px] w-[40px]'} absolute left-[60%] bg-gray-50 rounded-full shadow-md cursor-pointer transition-all overflow-hidden items-center flex justify-center`}  
                        onClick={()=>{setSelectLanguage('english');i18n.changeLanguage('english')}}>
                        <img src={englishFlag} className="max-h-full max-w-full"></img></div>
                    <div 
                        className={`${selectLanguage==='mithila'?' h-[50px] w-[50px] border-black border-2':'h-[40px] w-[40px]'} absolute left-[85%] bg-gray-50 rounded-full shadow-md cursor-pointer transition-all overflow-hidden items-center flex justify-center`}  
                        onClick={()=>{setSelectLanguage('mithila');i18n.changeLanguage('mithila')}}>
                        <img src={mithilaFlag} className="max-h-full max-w-full"></img></div>
                </div>
                <div className={`${isMobile?'':'w-[30%]'} bg-gray-50 p-2 px-3 mx-4 rounded-full hover:bg-gray-200 cursor-pointer shadow-sm font-bold`}>
                    {t('donate')}
                </div>
            </div>
        </div>
    )
}