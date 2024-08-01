import bgImg from '../../media/AboutUsPage/Pashupatinath_temple,kathmandu,Nepal.jpg'
import '../../App.css'
import { useMediaQuery } from '@mui/material'
import {motion} from 'framer-motion'
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

export const OneDonation = ({ name,img,qr,detail,location }) => {
  const isMobile = useMediaQuery('(max-width:800px)')
  const [isHidden, setIsHidden] = useState(true);


  return (
    <motion.div initial={{y:100 ,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1.4, delay:0.5}} className='flex flex-col hover:scale-105 transition-all duration-100 ease-in-out'>
      <div className={`${isMobile ? 'w-[100px] h-[100px]' : 'w-[200px] h-[200px]'} relative flex flex-col items-center justify-center overflow-hidden`}>
        <div className={`rounded-full  overflow-hidden relative z-1 shadow-lg bg-center bg-cover  flex flex-wrap items-center px-2 justify-center`} style={{ backgroundImage: `url(${img})`, width: '100%', height: '100%' }}>
          <div className={`text-xl font-bold text-white z-50`}>{name}</div>
          <div className='absolute w-full h-full bg-zinc-700/30 z-10'></div>
        </div>
      </div>
      <div>
      
       <div onClick={()=>setIsHidden(false)} className={`${isMobile ? 'text-sm' : 'text-3xl'} font-bold text-white bg-blue-700 rounded-full hover:scale-105 transition-all duration-100 py-2 mt-2`}>Donate</div>
      
      </div>
      {<motion.div  className={`${isHidden?'h-0 w-0':' h-[60%] w-[90%] md:h-fit md:w-[50%] lg:w-[54%]'} left-3 md:left-[20%] top-[20%]  fixed rounded-xl bg-neutral-900/30    flex flex-col items-center justify-start z-50   backdrop-blur-lg overflow-auto transition-all duration-200 ease-out`}>
            
            <FontAwesomeIcon icon={faClose} size={'2x'} className="absolute top-0 right-1 text-red-600" onClick={()=>setIsHidden(true)}/> 
 
                <div className="w-full py-2 bg-slate-300/40 flex flex-col items-center" >
                    <h1 className={`${isMobile?'text-[30px]':'text-[50px]'} text-black  font-bold`} >{name}</h1>
                      <h3>{location}</h3>
                     </div>
                 <div className="flex flex-wrap mt-2  w-full">
                      <div className=" w-full lg:w-1/3 flex items-center flex-col ">
                       <img src={qr}/>
                </div>
                   <div className="w-full mt-2 lg:w-2/3 flex flex-col items-center  px-2">
                      <img src={img} className='w-1/2 aspect-video'></img>
                <p className="text-preety text-neutral-200 font-medium">{detail}</p>
                      
                   </div>
                 </div>
                
            
        </motion.div>}
    </motion.div>
  )
}
