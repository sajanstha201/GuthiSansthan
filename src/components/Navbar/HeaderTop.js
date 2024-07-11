import { useMediaQuery } from "@mui/material"
import { useSelectLanguage } from "../../context/LanguageChoice"
import { useTranslation } from "react-i18next"
import nepaliFlag from '../../media/FlagInfo/NepalFlag.png'
import newariFlag from '../../media/FlagInfo/NewariFlag.png'
import englishFlag from '../../media/FlagInfo/EnglishFlag.svg'
import mithilaFlag from '../../media/FlagInfo/MithilaFlag.png'
import guthiLogo from '../../media/guthi sansthan.png'
import nepalLogo from '../../media/nepalLogo.png'
import { Link } from "react-router-dom"
export const HeaderTop=()=>{
    const isMobile=useMediaQuery('(max-width:800px)')
    const {selectLanguage,setSelectLanguage}=useSelectLanguage()
    const {i18n}=useTranslation()
    const {t}=useTranslation()
    return(
        <div className={`${isMobile?' h-[50px]':'flex-row  px-20 h-[100px]'} flex w-screen justify-between items-center p-2 `} style={{background: 'linear-gradient(to right, #FFFFFF, #FF9900)',}}>
            <Link to='/' className={`${isMobile?'flex-col justify-center':'flex-row'} w-[30%] h-full flex-row flex items-center `}>
                <img className={`${isMobile?'w-[40px]':'w-[80px]'}  `} src={nepalLogo}/>
                <img className={`${isMobile?'w-[40px]':'w-[80px]'}  `} src={guthiLogo}/>
            </Link>
            <div className={`${isMobile?'gap-2':' gap-7'} w-[70%] flex-row flex h-full items-center justify-center `}>
                <div className={`${isMobile?' h-[100px] gap-2':' h-full gap-7'} w-[70%] flex items-center justify-end `}>
                    <div 
                        className={`${selectLanguage==='nepali'?`${isMobile?'h-[25px] w-[25px] border-black border-2':'h-[50px] w-[50px] border-black border-2'}`:`${isMobile?'h-[25px] w-[25px]':'h-[50px] w-[50px]'}`}  bg-gray-50 rounded-full shadow-md cursor-pointer transition-all overflow-hidden items-center flex justify-center`} 
                        onClick={()=>{setSelectLanguage('nepali');i18n.changeLanguage('nepali')}}>
                        <img src={nepaliFlag} className="max-h-full max-w-full"></img></div>
                    <div 
                        className={`${selectLanguage==='newari'?`${isMobile?'h-[25px] w-[25px] border-black border-2':'h-[50px] w-[50px] border-black border-2'}`:`${isMobile?'h-[25px] w-[25px]':'h-[50px] w-[50px]'}`}  bg-gray-50 rounded-full shadow-md cursor-pointer transition-all overflow-hidden items-center flex justify-center`}                        onClick={()=>{setSelectLanguage('newari');i18n.changeLanguage('newari')}}>
                        <img src={newariFlag} className="max-h-full max-w-full"></img></div>
                    <div 
                        className={`${selectLanguage==='english'?`${isMobile?'h-[25px] w-[25px] border-black border-2':'h-[50px] w-[50px] border-black border-2'}`:`${isMobile?'h-[25px] w-[25px]':'h-[50px] w-[50px]'}`}  bg-gray-50 rounded-full shadow-md cursor-pointer transition-all overflow-hidden items-center flex justify-center`}                        onClick={()=>{setSelectLanguage('english');i18n.changeLanguage('english')}}>
                        <img src={englishFlag} className="max-h-full max-w-full"></img></div>
                    <div 
                        className={`${selectLanguage==='mithila'?`${isMobile?'h-[25px] w-[25px] border-black border-2':'h-[50px] w-[50px] border-black border-2'}`:`${isMobile?'h-[25px] w-[25px]':'h-[50px] w-[50px]'}`}  bg-gray-50 rounded-full shadow-md cursor-pointer transition-all overflow-hidden items-center flex justify-center`}                        onClick={()=>{setSelectLanguage('mithila');i18n.changeLanguage('mithila')}}>
                        <img src={mithilaFlag} className="max-h-full max-w-full"></img></div>
                </div> 
                <div className={`${isMobile?'text-[10px] h-[25px] w-[30%]':'h-[50%] w-[10%]'}  bg-red-600 text-white flex items-center justify-center mx-2 rounded-full hover:bg-red-700 cursor-pointer shadow-sm font-bold`}>
                    {t('donate')}
                </div>
            </div>
        </div>
    )
}