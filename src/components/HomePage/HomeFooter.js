import { useEffect, useState } from 'react'
import './HomePage.css'
import { useMediaQuery } from '@mui/material'
import { useRef } from 'react'
export const  HomeFooter=()=>{
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
        <div className="absolute bottom-0 h-[10%] w-full justify-center flex items-center overflow-hidden z-30">
            <div className="w-[90%] justify-between  h-full items-center flex flex-row  text-white font-bold">
                <div className={`${isMobile?'px-3':'px-16'} home-footer-div`} onClick={()=>setSelectedSection('calender')}>Calender</div>
                <div className={`${isMobile?'px-3':'px-16'} home-footer-div`}>Calender</div>
                <div className={` ${isMobile?'px-3':'px-16'} home-footer-div`}>Calender</div>
            </div>
        </div>
        <div ref={hiddenDivRef}className={`${selecedSection==='calender'?'bottom-0 ':'bottom-[-100%]'} absolute backdrop-blur-sm w-full h-[50vh] transition-all ease-in-out duration-500 rounded-xl z-20`}>
            <div  className="fixed bg-zinc-800/25 bg-center top-0 w-full h-full"></div> 
        </div>
        </>

    )
}