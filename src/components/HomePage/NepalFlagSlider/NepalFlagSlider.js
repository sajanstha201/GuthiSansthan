import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import './NepalFlagSlider.css'
import { OneImage } from './OneImage'
import img from '../../../media/guthi sansthan.png'
import bg from '../../../media/TempleInformation/patandurbarsquare.png'
import { useDispatch, useSelector } from 'react-redux'
import { addLanguage ,fetchGifToURL} from '../../ReuseableFunctions'
import { setSliderImg } from '../../../state/HomePageSlices/HomePageSlice'
import { EditImage } from '../../EditComponents/EditImage'
import { useEditing } from '../../../context/EditingProvider'
export const NepalFlagSlider=({content})=>{
    const [isHover,setIsHover]=useState(false)
    const {isEditing,setIsEditing}=useEditing()
    const [activateEdit,setActivateEdit]=useState(false)
    const dispatch=useDispatch()
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const homePageDetail=useSelector(state=>state.homePageDetail)
    const {t}=useTranslation()
    const isMobile=useMediaQuery('(max-width:1000px)')
    useEffect(()=>{
        const fetchData=async()=>{
                addLanguage({ key: 'welcome-to-guthi-sansthan', lngs: homePageDetail['details']['welcome-to-guthi-sansthan']['text'] });
                dispatch(setSliderImg(await fetchGifToURL(baseUrl + homePageDetail['details']['slider-img'].image.substr(1))));
        }
        if(!homePageDetail['slider-img'].isFetched&&homePageDetail.isFetched) fetchData()
    })
    return(
        <>
        <div className={` ${isMobile?'h-[30vh]':'h-[40vh]'} flex flex-row items-center relative w-full  m-2 overflow-hidden`} onMouseLeave={()=>{setIsHover(false)}}>
            <div className={`${isMobile?'text-[30px] w-[50%]':'text-[80px] p-[10%] w-[60%]'} ${isHover?'left-[-100%] opacity-0 ':''} absolute left-0  text-white font-bold   transition-left duration-500 font-reggaeOne`}>
                {t('welcome-to-guthi-sansthan')}
            </div>
                <img 
                onMouseEnter={()=>{setIsHover(true)}}
                src={homePageDetail['slider-img']['gif']} 
                className={`${isHover?` ${isMobile?'opacity-0 left-[-100%]':''} left-[10%]`:'left-[60%]'} ${isMobile?'w-[20vh]':'w-[30vh]'} absolute  h-full z-10  transition-all duration-300 ease-in-out`}></img>
   

            <div className={`${isHover?`${isMobile?'left-[0%] ':'left-[25%]'}`:'left-[100%]'} ${isMobile?'w-[100%]':'max-w-[90%] '} h-[50%]  absolute  px-2 transition-all duration-300 ease-in-out flex items-center justify-center gap-2  bg-black/60 rounded-lg  backdrop:blur-sm overflow-auto `}>
                    {/* <TemplesDisplayMain/> */}
                    {isEditing&&!activateEdit&&<div onClick={()=>setActivateEdit(true)} className=' absolute top-1 flex bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded-md cursor-pointer'>Edit</div>}
                    <Link to='/services' className='feature-div' onClick={(e) => {isEditing&&activateEdit&&e.preventDefault()}}>
                         <OneImage  name={'Our-service-tab'} activateEdit={activateEdit}/>
                    </Link>
                    <Link to='/about-us' className='feature-div' onClick={(e) => {isEditing&&activateEdit&&e.preventDefault()}}>
                        <OneImage  name={'About-us-tab'} activateEdit={activateEdit}/>
                       
                    </Link>
                    <Link to='/contact-us' className='feature-div' onClick={(e) => {isEditing&&activateEdit&&e.preventDefault()}}>
                        <OneImage  name={'Contact-us-tab'} activateEdit={activateEdit}/>    
                    </Link>
                    <Link to='/articles' className='feature-div' onClick={(e) => {isEditing&&activateEdit&&e.preventDefault()}}>
                        <OneImage  name={'Article-tab'} activateEdit={activateEdit}/>
                    </Link>
                    {isEditing&&activateEdit&&<div className=' absolute top-1 flex bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded-md cursor-pointer' onClick={()=>setActivateEdit(false)}><div className=' flex bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded-md cursor-pointer'>No Edit</div></div>}
                </div>
            </div>

        </>
    )
}