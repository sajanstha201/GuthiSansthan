import { useState } from "react"
import { useMediaQuery } from "@mui/material"
export const MoreDescriptionDiv=()=>{
    const isMobile=useMediaQuery('(max-width:800px)')
    const [isRemoveHidden,setIsRemoveHidden]=useState(false)
    return(
        <div 
            id='more-description-div'
            onClick={()=>{
                setIsRemoveHidden(false)
                setTimeout(()=>setIsRemoveHidden(true),2000)
            }}
            className={` fixed flex items-center justify-center h-[100vh] w-screen z-20 bg-gray-200 bg-opacity-100 transition-all duration-500 overflow-auto`} style={{top:'-200%'}}>
            <div className={` overflow-auto flex items-center justify-center h-screen  w-screen  left-0 bg-opacity-80 top-0 transition-all duration-500`} >
                    <div className={`${isMobile?'w-[90%]':'w-[50%]'} bg-white h-[90%] p-10 rounded shadow relative  flex flex-col items-center justify-center overflow-auto`}>
                        <h1 id='more-description-heading'></h1>
                        <img id='more-description-img' className=" bg-black"></img>
                        <div className=" absolute right-2 top-2 flex flex-row">
                            <div className={`${isRemoveHidden?'hidden':''}  bg-gray-300 p-2 m-2 rounded-md flex items-center justify-center`}  id='remove-temple'>Remove</div>
                            <div 
                                onMouseEnter={()=>setIsRemoveHidden(false)}
                                onMouseLeave={()=>setIsRemoveHidden(true)}
                                onClick={()=>{
                                    document.getElementById('more-description-div').style.top='-200%'
                                }}
                                className={`${isMobile?'w-[20px] h-[20px]':'w-[30px] h-[30px]'} bg-red-600 rounded-full flex items-center justify-center cursor-pointer border-2 border-black`}>x</div>
                        </div>
                        <div id='more-description'>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}
