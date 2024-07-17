import { useMediaQuery } from "@mui/material"
import {motion} from "framer-motion"


export const InstanceService=({image,name,link ,des})=>{
    const isMobile=useMediaQuery('(max-width:800px)')
    return(
        <motion.div  initial={{ opacity:0 , y:40}} animate={{y:0,opacity:1}} transition={{duration:1.4}} className={`${isMobile?'w-[150px] h-[150px]':'w-[300px] h-[300px]'} relative overflow-hidden  backdrop-blur-md  shadow-xl shadow-zinc-600 hover:shadow-red-600/50 rounded-lg  hover:scale-105 ease-in-out transition-all`}>
            <div className="absolute  no-underline w-full h-full">
                <a href={link} className="no-underline w-full h-full">
                    <div className='p-3 flex  flex-col bg-transparent  h-full rounded-lg overflow-hidden '>
                           <div  className='w-full h-[50%] bg-cover bg-center flex  justify-center items-center relative rounded-lg overflow-hidden' style={{backgroundImage:`URL(${image})`}}>
                                 <h2 className={`${isMobile?'text-[15px]':''} text-white z-10 font-bold `}>{name}</h2>
                                 <div className='bg-neutral-900/40 absolute h-full w-full ' ></div>
                           </div>
                          <div className='flex overflow-auto h-[50%]'>
                              <p className={`${isMobile?'text-[10px] ':'text-sm '} text-white font-semibold text-balance  w-full track`}>{des}</p>
                          </div>
                    </div>
                </a>
            </div>
        </motion.div>


    )
}