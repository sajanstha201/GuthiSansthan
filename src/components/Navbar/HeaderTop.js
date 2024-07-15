import { useMediaQuery } from "@mui/material"
import { useSelectLanguage } from "../../context/LanguageChoice"
import { useTranslation } from "react-i18next"
import nepaliFlag from '../../media/FlagInfo/NepalFlag.png'
import newariFlag from '../../media/FlagInfo/NewariFlag.png'
import englishFlag from '../../media/FlagInfo/EnglishFlag.svg'
import mithilaFlag from '../../media/FlagInfo/MithilaFlag.png'
import guthiLogo from '../../media/guthi sansthan.png'
import nepalLogo from '../../media/nepalLogo.png'
import { Link, useLocation } from "react-router-dom"
import { HeaderButtom } from "./HeaderButtom"
import { useEffect, useRef, useState } from "react"
import { Dropdown,DropdownButton,DropdownItem } from "react-bootstrap"
export const HeaderTop=()=>{
    const isMobile=useMediaQuery('(max-width:1200px)')
    const {selectLanguage,setSelectLanguage}=useSelectLanguage()
    const {i18n}=useTranslation()
    const {t}=useTranslation()
    const loc=useLocation()
    const [languageOptionHidden,setLanguageOptionHidden]=useState(true)
    const divRef=useRef()
    const handleClickOutside=(event)=>{
        if (divRef.current && !divRef.current.contains(event.target)) {
            setLanguageOptionHidden(true)
          }
    }
    useEffect(()=>{
        document.addEventListener('mousedown',handleClickOutside)
        return()=>{
            document.removeEventListener('mousedown',handleClickOutside)
        }
    })
    return(
        <div className={`${isMobile?'h-[80px] ':'flex-row  px-20 h-[100px]'}  flex w-screen justify-between items-center p-2 `} >
            <Link to='/' className={`${isMobile?'flex-col justify-start items-center w-[70%]':'flex-row w-[30%] items-center'}  h-full flex-row flex   `}>
                <img className={`${isMobile?'h-[50px]':'h-[80px]'}  backdrop-blur-md`} src={nepalLogo}/>
                <img className={`${isMobile?'h-[50px] pr-4':'h-[80px] pr-10'} backdrop-blur-md bg-yellow-50  rounded-full shadow-lg `} src={guthiLogo}/>
            </Link>
            {loc.pathname!=='/'&&!isMobile&&<div className={`${isMobile?'h-[100px]':''} w-[40%] flex items-center justify-center`}>
                <HeaderButtom/>
            </div>}
            {/* <div className={``}>
                <DropdownButton 
                title={<div className={`${isMobile?'h-[20px] w-[20px]':'h-[50px] w-[50px]'}  bg-gray-50 rounded-full shadow-md cursor-pointer transition-all overflow-hidden items-center flex justify-center`}>
                    {selectLanguage==='nepali'&&<img src={nepaliFlag} className="max-h-full max-w-full"></img>}
                    {selectLanguage==='newari'&&<img src={newariFlag} className="max-h-full max-w-full"></img>}
                    {selectLanguage==='english'&&<img src={englishFlag} className="max-h-full max-w-full"></img>}
                    {selectLanguage==='mithila'&&<img src={mithilaFlag} className="max-h-full max-w-full"></img>}
                </div>}
                >
                    <Dropdown.Item>            
                        <div 
                        className={`${selectLanguage==='nepali'?`transform scale-125 transition-transform border-black border-1`:''} ${isMobile?'h-[20px] w-[20px]':'h-[50px] w-[50px]'}  bg-gray-50 rounded-full shadow-md cursor-pointer transition-all overflow-hidden items-center flex justify-center`} 
                        onClick={()=>{setSelectLanguage('nepali');i18n.changeLanguage('nepali')}}>
                        <img src={nepaliFlag} className="max-h-full max-w-full"></img>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <div 
                        className={`${selectLanguage==='newari'?`transform scale-125 transition-transform border-black border-1`:''} ${isMobile?'h-[20px] w-[20px]':'h-[50px] w-[50px]'}  bg-gray-50 rounded-full shadow-md cursor-pointer transition-all overflow-hidden items-center flex justify-center`}                        onClick={()=>{setSelectLanguage('newari');i18n.changeLanguage('newari')}}>
                        <img src={newariFlag} className="max-h-full max-w-full"></img></div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <div 
                        className={`${selectLanguage==='english'?`transform scale-125 transition-transform border-black border-1`:''} ${isMobile?'h-[20px] w-[20px]':'h-[50px] w-[50px]'}  bg-gray-50 rounded-full shadow-md cursor-pointer transition-all overflow-hidden items-center flex justify-center`}                        onClick={()=>{setSelectLanguage('english');i18n.changeLanguage('english')}}>
                        <img src={englishFlag} className="max-h-full max-w-full"></img></div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <div 
                        className={`${selectLanguage==='mithila'?`transform scale-125 transition-transform border-black border-1`:''} ${isMobile?'h-[20px] w-[20px]':'h-[50px] w-[50px]'}  bg-gray-50 rounded-full shadow-md cursor-pointer transition-all overflow-hidden items-center flex justify-center`}                        onClick={()=>{setSelectLanguage('mithila');i18n.changeLanguage('mithila')}}>
                        <img src={mithilaFlag} className="max-h-full max-w-full"></img></div>
                    </Dropdown.Item>
                </DropdownButton>
            </div> */}
            <div className={`${isMobile?'gap-2 ':' gap-7 '} w-[20%]  relative flex-row flex h-full items-center justify-end px-2`}>
                <div ref={divRef} className={`${isMobile?'gap-2 w-[40px]':' gap-7 w-[60px]'}  relative flex-row flex h-full items-center justify-end `}>
                    <div className={`${isMobile?'h-[40px] w-[40px]':'h-[60px] w-[60px]'}  bg-gray-50 rounded-full shadow-md cursor-pointer transition-all overflow-hidden items-center flex justify-center`}
                        onClick={()=>{setLanguageOptionHidden(!languageOptionHidden)}}>
                        {selectLanguage==='nepali'&&<img src={nepaliFlag} className="max-h-full max-w-full"></img>}
                        {selectLanguage==='newari'&&<img src={newariFlag} className="max-h-full max-w-full"></img>}
                        {selectLanguage==='english'&&<img src={englishFlag} className="max-h-full max-w-full"></img>}
                        {selectLanguage==='mithila'&&<img src={mithilaFlag} className="max-h-full max-w-full"></img>}
                    </div>
                    <div className={`${languageOptionHidden?'hidden':''} absolute flex flex-col left-0 top-[100%] items-start w-[120px] z-10 gap-3`}>
                        <div 
                            className={`cursor-pointer transition-all overflow-hidden items-center flex justify-center`} 
                            onClick={()=>{setSelectLanguage('nepali');i18n.changeLanguage('nepali');setLanguageOptionHidden(true)}}>
                            <img src={nepaliFlag} className={`${isMobile?'h-[30px] w-[30px]':'h-[60px] w-[60px]'} max-h-full max-w-full rounded-full`}></img>
                            <div className="text-white">Nepali</div>
                            </div>

                        <div 
                            className={`cursor-pointer transition-all overflow-hidden items-center flex justify-center`}                        
                            onClick={()=>{setSelectLanguage('newari');i18n.changeLanguage('newari');setLanguageOptionHidden(true)}}>
                            <img src={newariFlag} className={`${isMobile?'h-[30px] w-[30px]':'h-[60px] w-[60px]'} max-h-full max-w-full rounded-full `}></img>
                            <div className={`text-white`}>Newari</div>
                            </div>
                        <div 
                            className={` cursor-pointer transition-all overflow-hidden items-center flex justify-center`}                        
                            onClick={()=>{setSelectLanguage('english');i18n.changeLanguage('english');setLanguageOptionHidden(true)}}>
                            <img src={englishFlag} className={`${isMobile?'h-[30px] w-[30px]':'h-[60px] w-[60px]'} max-h-full max-w-full rounded-full `}></img>
                            <div className={`text-white`}>English</div>
                            </div>
                        <div 
                            className={` cursor-pointer transition-all overflow-hidden items-center flex justify-center`}                        
                            onClick={()=>{setSelectLanguage('mithila');i18n.changeLanguage('mithila');setLanguageOptionHidden(true)}}>
                            <img src={mithilaFlag} className={`${isMobile?'h-[30px] w-[30px]':'h-[60px] w-[60px]'} max-h-full max-w-full rounded-full `}></img>
                            <div className={`text-white`}>Mithila</div>
                            </div>
                    </div>
                </div>
                <div className={`${isMobile?'text-[10px] h-[25px] w-[80%]':'h-[60%] w-[80%] px-5 py-2'}  bg-red-600 text-white flex items-center justify-center mx-2 rounded-full hover:bg-red-700 cursor-pointer shadow-sm font-bold`}>
                    {t('donate')}
                </div>
            </div>

        </div>
    )
}