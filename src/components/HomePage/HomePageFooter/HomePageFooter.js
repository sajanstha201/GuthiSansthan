import { useEffect, useState } from 'react'
import './HomePageFooter.css'
import { useMediaQuery } from '@mui/material'
import { useRef } from 'react'
import { Calendar } from './Calender/Calender';
import { Parva } from './Parva/Parva'
import { Teams } from './Teams/Teams'
import FooterBg from '../../../media/HomePage/FooterBg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faGopuram, faUsers ,faClose} from '@fortawesome/free-solid-svg-icons'

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
            <div className={`${isMobile?'bg-gray-300/40 backdrop-blur-md rounded-tl-md rounded-tr-md':''} z-10 absolute bottom-0 w-full  justify-evenly  items-center flex flex-row  text-white font-bold`}>
                <div className={`${isMobile?'px-3':'px-16 '} home-footer-div flex flex-col items-center justify-center hover:scale-150 transition-transform duration-75 ease-in hover:-translate-y-3`} onClick={()=>setSelectedSection('calender')}><FontAwesomeIcon icon={faCalendarAlt}  size='2x' className=''/> <h2 className='text-base'>Calender</h2> </div>
                <div className={`${isMobile?'px-3':'px-16'} home-footer-div flex flex-col items-center justify-center  hover:scale-150 transition-transform duration-75 ease-in hover:-translate-y-3 `} onClick={()=>setSelectedSection('parva')}><FontAwesomeIcon icon={faGopuram} size='2x' className='' /> <h2 className='text-base'>Parva</h2> </div>
                <div className={` ${isMobile?'px-3':'px-16'} home-footer-div flex flex-col items-center justify-center hover:scale-150 transition-transform duration-75 ease-in hover:-translate-y-3 `} onClick={()=>setSelectedSection('teams')}><FontAwesomeIcon icon={faUsers} size='2x' className='' /> <h2 className='text-base'>Teams</h2> </div>
            </div>
        </div>
        <div className='w-full' ref={hiddenDivRef}>
            <div  className={`${selecedSection==='calender'?'bottom-0 ':'bottom-[-300%]'} absolute backdrop-blur-lg w-full h-[80vh] transition-all ease-in-out duration-500 rounded-xl z-20`}>
            <FontAwesomeIcon icon={faClose} size={'2x'} className="absolute top-0 right-3 text-red-600" onClick={()=>setSelectedSection('')}/> 

                <Calendar/>
            </div>
            <div  className={`${selecedSection==='parva'?'bottom-0 ':'bottom-[-300%]'} absolute backdrop-blur-lg w-full h-[80vh] transition-all ease-in-out duration-500 rounded-xl z-20`}>
            <div onClick={()=>setSelectedSection('')}className="absolute bg-red-700 w-[30px] h-[30px] top-2 right-2 flex items-center justify-center rounded-full border-black border-2 cursor-pointer">x</div>

              
                <Parva />
            </div>
            <div className={`${selecedSection==='teams'?'bottom-0 ':'bottom-[-300%]'} absolute backdrop-blur-lg  w-full h-[80vh] transition-all ease-in-out duration-500 rounded-xl z-20`}>
            <FontAwesomeIcon icon={faClose} size={'2x'} className="absolute top-0 right-3 text-red-600" onClick={()=>setSelectedSection('')}/> 
                
                {selecedSection==='teams'&&<Teams/>}
            </div>
        </div>

        </>

    )
}