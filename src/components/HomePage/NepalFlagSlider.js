import { useState } from 'react'
import nepalFlagGif from '../../media/Flag_of_Nepal.gif'
import {TemplesDisplayMain} from './TempleDescription'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import './NepalFlagSlider.css'
export const NepalFlagSlider=({content})=>{
    const [isHover,setIsHover]=useState(false)
    const {t}=useTranslation()
    const isMobile=useMediaQuery('(max-width:1000px)')
    return(
        <>
        <div className={` flex flex-row items-center relative w-full h-[40vh] m-2 overflow-hidden`} onMouseLeave={()=>{setIsHover(false)}}>
            <div className={`${isMobile?'text-[60px]':'text-[90px]'} ${isHover?'left-[-30%] opacity-0':''} absolute left-0  text-white font-bold w-[60%] p-[10%] transition-left duration-500 font-reggaeOne`}>
                {t('welcome-to-guthi-sansthan')}
            </div>
            <img 
            onMouseEnter={()=>{setIsHover(true)}}
            src={nepalFlagGif} 
            className={`${isHover?' left-[10%]':'left-[60%]'} absolute w-[30vh] h-full z-10  transition-all duration-300 ease-in-out`}></img>
            <div className={`${isHover?'left-[30%]  ':'left-[100%] w-0'} max-w-[60%] h-[50%]  absolute transition-left duration-500 ease-in-out flex items-center justify-center align-text overflow-auto `}>
                    {/* <TemplesDisplayMain/> */}
                    <Link to='/' className='feature-div'>
                        {t('home')}
                    </Link>
                    <Link to='/services' className='feature-div'>
                        {t('our-services')}
                    </Link>
                    <Link to='/about-us' className='feature-div'>
                       {t('about-us')}
                    </Link>
                    <Link to='/contact-us' className='feature-div'>
                        {t('contact-us')}
                    </Link>
            </div>
        </div>
        </>
    )
}