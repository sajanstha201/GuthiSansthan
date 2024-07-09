import { useState } from 'react'
import nepalFlagGif from '../../media/Flag_of_Nepal.gif'
import {TemplesDisplayMain} from './TempleDescription'
import { useTranslation } from 'react-i18next'
export const NepalFlagSlider=({content})=>{
    const [isHover,setIsHover]=useState(false)
    const {t}=useTranslation()
    return(
        <>
        <div className={` flex flex-row items-center relative w-full h-[40vh] m-2`} onMouseLeave={()=>{setIsHover(false)}}>
            <div className={`${isHover?'left-[-30%] opacity-0':''} absolute left-0 text-[100px] text-white font-bold w-[60%] p-[10%] transition-left duration-1000`}>
                {t('welcome-to-guthi-sansthan')}
            </div>
            <img 
            onMouseEnter={()=>{setIsHover(true)}}
            src={nepalFlagGif} 
            className={`${isHover?' left-[10%]':'left-[60%]'} absolute w-[30vh] h-full z-10 border transition-all duration-300 ease-in-out`}></img>
            <div className={`${isHover?'left-[20%]  w-[80%] h-full':'left-[100%] w-0'}  absolute transition-left duration-500 ease-in-out flex items-center justify-center align-text overflow-auto`}>
                    <TemplesDisplayMain/>
            </div>
        </div>
        </>
    )
}