import { motion } from "framer-motion"
import { useState } from "react"
export const ParvaInstance=({name,detail,img})=>{
    const displayDetail=()=>{}
    const [isHidden, setIsHidden]=useState(true)
    return(
        <>
        <div className="h-[200px] w-[200px]" onClick={()=>setIsHidden(false)}>
            <div className=" relative h-full w-full flex items-center justify-center bg-cover bg-center -z-10">
                <img src={img} className="w-full"></img>
                <div className="text-[30px] absolute h-full w-full items-center justify-center flex text-white font-bold  z-40">
                {name}
                </div>
            </div>
        </div>
        <div className={`${isHidden?'h-0 w-0':'h-full w-full'} absolute flex items-center justify-center z-60 backdrop-blur-xl overflow-auto transition-all duration-500`}>
            <div  className="h-[60%] w-[60%] relative backdrop-blur-xl bg-neutral-200/70 flex flex-col items-center justify-center shadow-lg rounded-xl">
                <div onClick={()=>setIsHidden(true)}className="absolute bg-red-700 w-[30px] h-[30px] top-2 right-2 flex items-center justify-center rounded-full border-black border-2 cursor-pointer">x</div>
                <div className="text-black text-[60px] font-bold">{name}</div>
                <div><img src={img}></img></div>
                <div>{detail}</div>
            </div>
        </div>
        </>
    )
}