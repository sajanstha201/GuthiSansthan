import { useState } from 'react'
import nepalFlagGif from '../../media/Flag_of_Nepal.gif'
export const NepalFlagSlider=({content})=>{
    const [isHover,setIsHover]=useState(false)
    return(
        <>
        <div className={` flex flex-row items-center relative w-full h-[20vh] m-2`} onMouseLeave={()=>setIsHover(false)}>
            <img 
            onMouseEnter={()=>setIsHover(true)}
            src={nepalFlagGif} 
            className={`${isHover?' left-[20%]':'left-[45%]'} absolute w-[20vh] h-full z-10 border transition-left duration-500`}></img>
            <div className={`${isHover?'left-[30%]  w-1/2 h-full':'left-[100%] w-0 h-0'} bg-gray-300 px-[5%]  absolute transition-left duration-500 flex items-center justify-center align-text overflow-auto`}>
                    {content}
            </div>
        </div>
        </>
    )
}