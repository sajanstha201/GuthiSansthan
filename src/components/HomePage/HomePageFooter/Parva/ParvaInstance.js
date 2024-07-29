import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMediaQuery } from "@mui/material"
import { motion } from "framer-motion"
import { useState } from "react"
export const ParvaInstance=({name,detail,img})=>{
    const displayDetail=()=>{}
    const [isHidden, setIsHidden]=useState(true)
    const isMobile=useMediaQuery('(max-width:800px)')
    return(
        <>
        <div className={`${isMobile?'h-[100px] w-[150px]':'h-[150px] w-[200px]'}  `} onClick={()=>setIsHidden(false)}>
            <div className=" relative h-full w-full flex items-center justify-center bg-cover bg-center -z-10 bg-red-500 " style={{backgroundImage:`url(${img})`}}>
                <div  className={`${isMobile?'text-[15px]':'text-[30px]'}  absolute h-full w-full items-center justify-center flex text-white font-bold  z-40`}>
                {name}
                </div>
                <div className="absolute bg-gray-900/50 h-full w-full "></div>
            </div>
        </div>
        { !isHidden && <motion.div  className={`${isHidden?'h-0 w-0':'h-full w-full'} absolute flex items-center justify-center z-50  backdrop-blur-xl overflow-auto transition-all duration-500 ease-out`}>
            <div  className="h-[75%] w-[80%] lg:w-[60%] relative backdrop-blur-xl  bg-neutral-200/70 flex flex-col items-center  shadow-lg rounded-xl">
            <FontAwesomeIcon icon={faClose} size={'2x'} className="absolute top-0 right-1 text-red-600" onClick={()=>setIsHidden(true)}/> 
 
                <div className={`${isMobile?'text-[30px]':'text-[50px]'} text-black  font-bold`}>{name}</div>
                <div><img src={img} className="h-44 lg:h-56"></img></div>
                <p className="text-preety">{detail}</p>
            </div>
        </motion.div>}
        </>
    )
}