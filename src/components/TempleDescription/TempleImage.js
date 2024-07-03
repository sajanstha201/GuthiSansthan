import { useState } from "react"
import { TemplePdfViewer } from "./TemplePdfViewer"
import { useMediaQuery } from "@mui/material"
const images=require.context('../../media/TempleInformation')
export const TempleImage=({templeObject})=>{
    const isMobile=useMediaQuery('(max-width:800px)')
    const [isClicked,setIsClicked]=useState(false)
    const [isRemoveHidden,setIsRemoveHidden]=useState(false)
    return(
        <div 
            onClick={()=>{
                setIsClicked(!isClicked)
                setIsRemoveHidden(false)
                setTimeout(()=>setIsRemoveHidden(true),2000)
            }}
            className="flex items-center justify-center m-2 min-h-[300px] min-w-[300px] max-h-full">
                <div className="bg-black h-[80%] flex items-center justify-center">
                <img src={images(`.${templeObject.imageUrl}`)} alt={templeObject.nepaliName} ></img>
                </div>
            
            <div className={`${isClicked?'h-screen':'h-0'} overflow-hidden flex items-center justify-center  w-screen bg-gray-200 absolute left-0 bg-opacity-80 top-0 transition-all duration-500`} id='popDiv'>
                    <div className="bg-white p-10 rounded shadow relative w-1/2 flex items-center justify-center">
                        <div className=" absolute right-2 top-2 flex flex-row">
                            <div className={`${isRemoveHidden?'hidden':''}  bg-gray-300 p-2 m-2 rounded-md flex items-center justify-center`}  id='remove-temple'>Remove</div>
                            <div 
                                onClick={()=>setIsClicked(!isClicked)}
                                onMouseEnter={()=>setIsRemoveHidden(false)}
                                onMouseLeave={()=>setIsRemoveHidden(true)}
                                className={`${isMobile?'w-[20px] h-[20px]':'w-[30px] h-[30px]'} bg-red-600 rounded-full flex items-center justify-center cursor-pointer border-2 border-black`}>x</div>
                        </div>
                        <TemplePdfViewer templeObject={templeObject} className={`${isClicked?'w-0 h-0':''}`}/>
                    </div>
                
            </div>
        </div>
    )
}