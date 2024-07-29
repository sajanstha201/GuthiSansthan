import { useEffect, useState } from 'react'
import { useMediaQuery } from '@mui/material'
import { useRef } from 'react'
import { Calendar } from './Calender/Calender';
import { Parva } from './Parva/Parva'
import { Teams } from './Teams/Teams'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faGopuram, faUsers ,faClose, faCalendarDay} from '@fortawesome/free-solid-svg-icons'

import { useDispatch, useSelector } from 'react-redux'
import { setFooterBgImg, setNewFooterBgImg } from '../../../state/HomePageSlices/HomePageSlice'
import { fetchImageToURL } from '../../ReuseableFunctions'
import { EditBgImage } from '../../EditComponents/EditBgImage'
import Temple  from './Temple/Temple';

export const  HomePageFooter=()=>{
    const [selecedSection,setSelectedSection]=useState('')
    const isMobile=useMediaQuery('(max-width:800px)')
    const hiddenDivRef=useRef()
    const homePageDetail=useSelector(state=>state.homePageDetail)
    const dispatch=useDispatch()
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const handleHiddenDiv=(event)=>{
        if(!hiddenDivRef.current.contains(event.target)&&hiddenDivRef.current){
            setSelectedSection('')
        }
    }
    useEffect(()=>{
        const fetchFooterImg=async ()=>{
            dispatch(setFooterBgImg(await fetchImageToURL(baseUrl+homePageDetail.details['footer-bg-img'].image)))
        }
        if(!homePageDetail['footer-bg-img'].isFetched&&homePageDetail.isFetched) fetchFooterImg()
        document.addEventListener('mousedown',handleHiddenDiv)
        return ()=>{
            document.removeEventListener('mousedown',handleHiddenDiv)
        }
    })
    return(
        <>
        <div className="absolute bottom-0 h-[200px] w-full justify-center flex items-center overflow-hidden" >
            <EditBgImage imageId={homePageDetail['footer-bg-img'].id} url={homePageDetail.url} setNewImage={setNewFooterBgImg} isActualUploadedSame={homePageDetail['footer-bg-img'].imgSrc===homePageDetail['footer-bg-img'].actualImgSrc}>
            <div className="fixed bottom-0 -z-20 bg-cover bg-center h-[200px] w-full opacity-70 "style={{backgroundImage:`url(${homePageDetail['footer-bg-img'].imgSrc})`}}></div>
            </EditBgImage>
            <div className={`${isMobile?'bg-gray-300/40 backdrop-blur-md rounded-tl-md rounded-tr-md':''} z-10 absolute bottom-0 w-full  justify-evenly  items-center flex flex-row  text-white font-bold`}>
                <div className={`${isMobile?'px-3':'px-16 '} home-footer-div flex flex-col items-center justify-center hover:scale-150 transition-transform duration-75 ease-in hover:-translate-y-3`} onClick={()=>setSelectedSection('calender')}><FontAwesomeIcon icon={faCalendarAlt}  size='2x' className=''/> <h2 className='text-base'>Calender</h2> </div>
                <div className={` ${isMobile?'px-3':'px-16'} home-footer-div flex flex-col items-center justify-center hover:scale-150 transition-transform duration-75 ease-in hover:-translate-y-3 `} onClick={()=>setSelectedSection('temple')}><FontAwesomeIcon icon={faGopuram} size='2x' className='' /> <h2 className='text-base'>Temple</h2> </div>
                <div className={`${isMobile?'px-3':'px-16'} home-footer-div flex flex-col items-center justify-center  hover:scale-150 transition-transform duration-75 ease-in hover:-translate-y-3 `} onClick={()=>setSelectedSection('parva')}><FontAwesomeIcon icon={faCalendarDay} size='2x' className='' /> <h2 className='text-base'>Parva</h2> </div>
                <div className={` ${isMobile?'px-3':'px-16'} home-footer-div flex flex-col items-center justify-center hover:scale-150 transition-transform duration-75 ease-in hover:-translate-y-3 `} onClick={()=>setSelectedSection('teams')}><FontAwesomeIcon icon={faUsers} size='2x' className='' /> <h2 className='text-base'>Teams</h2> </div>
            </div>
        </div>
        <div className='w-full' ref={hiddenDivRef}>
            <div  className={`${selecedSection==='calender'?'bottom-0 ':'bottom-[-300%]'} absolute backdrop-blur-lg w-full h-[80vh] transition-all ease-in-out duration-500 rounded-xl z-20`}>
            <FontAwesomeIcon icon={faClose} size={'2x'} className="cursor-pointer absolute top-0 right-3 text-red-600 z-50" onClick={()=>setSelectedSection('')}/> 

                <Calendar/>
            </div>
            <div  className={`${selecedSection==='parva'?'bottom-0 ':'bottom-[-300%]'} absolute backdrop-blur-lg w-full h-[80vh] transition-all ease-in-out duration-500 rounded-xl z-20`}>
            <FontAwesomeIcon icon={faClose} size={'2x'} className="cursor-pointer  absolute top-0 right-3 text-red-600 z-50" onClick={()=>setSelectedSection('')}/> 
              
                <Parva />
            </div>
            <div  className={`${selecedSection==='temple'?'bottom-0 ':'bottom-[-300%]'} absolute backdrop-blur-lg w-full h-[80vh] transition-all ease-in-out duration-500 rounded-xl z-20`}>
            <FontAwesomeIcon icon={faClose} size={'2x'} className="cursor-pointer  absolute top-0 right-3 text-red-600 z-50" onClick={()=>setSelectedSection('')}/> 
              
                <Temple/>
            </div>
            <div className={`${selecedSection==='teams'?'bottom-0 ':'bottom-[-300%]'} absolute backdrop-blur-lg  w-full h-[80vh] transition-all ease-in-out duration-500 rounded-xl z-20`}>
            <FontAwesomeIcon icon={faClose} size={'2x'} className="cursor-pointer absolute top-0 right-3 text-red-600 z-50" onClick={()=>setSelectedSection('')}/> 
                
                {selecedSection==='teams'&&<Teams/>}
            </div>
        </div>

        </>

    )
}