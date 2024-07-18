import { useEffect, useState } from 'react'
import './HomePageFooter.css'
import { useMediaQuery } from '@mui/material'
import { useRef } from 'react'
import { Calender } from './Calender/Calender'
import { Parva } from './Parva/Parva'
import { Teams } from './Teams/Teams'
import FooterBg from '../../../media/HomePage/FooterBg.png'
export const  HomePageFooter=()=>{
    const [selecedSection,setSelectedSection]=useState('')
    const isMobile=useMediaQuery('(max-width:800px)')
    const hiddenDivRef=useRef()
    const handleHiddenDiv=(event)=>{
        if(!hiddenDivRef.current.contains(event.target)&&hiddenDivRef.current){
            setSelectedSection('')
        }
    }
    useEffect(()=>{
        document.addEventListener('mousedown',handleHiddenDiv)
        return ()=>{
            document.removeEventListener('mousedown',handleHiddenDiv)
        }
    })
    return(
        <>
        <div className="absolute bottom-0 h-[200px] w-full justify-center flex items-center overflow-hidden " >
            <div className="-z-20 bg-cover bg-center h-full w-full opacity-70 "style={{backgroundImage:`url(${FooterBg})`}}></div>
            <div className={`${isMobile?'bg-red-700 rounded-tl-md rounded-tr-md':''} z-30 absolute bottom-0 w-[90%] h-[20%] justify-between  items-center flex flex-row  text-white font-bold`}>
                <div className={`${isMobile?'px-3':'px-16 bg-red-700'} home-footer-div`} onClick={()=>setSelectedSection('calender')}>Calender</div>
                <div className={`${isMobile?'px-3':'px-16'} home-footer-div bg-red-700`} onClick={()=>setSelectedSection('parva')}>Parva</div>
                <div className={` ${isMobile?'px-3':'px-16'} home-footer-div bg-red-700`} onClick={()=>setSelectedSection('teams')}>Teams</div>
            </div>
        </div>
        <div className='w-full' ref={hiddenDivRef}>
            <div  className={`${selecedSection==='calender'?'bottom-0 ':'bottom-[-300%]'} absolute backdrop-blur-lg w-full h-[80vh] transition-all ease-in-out duration-500 rounded-xl z-20`}>
                
                <Calender/>
            </div>
            <div  className={`${selecedSection==='parva'?'bottom-0 ':'bottom-[-300%]'} absolute backdrop-blur-lg w-full h-[80vh] transition-all ease-in-out duration-500 rounded-xl z-20`}>
                
                <Parva/>
            </div>
            <div className={`${selecedSection==='teams'?'bottom-0 ':'bottom-[-300%]'} absolute backdrop-blur-lg  w-full h-[80vh] transition-all ease-in-out duration-500 rounded-xl z-20`}>
                
                {selecedSection==='teams'&&<Teams/>}
            </div>
        </div>

        </>

    )
}