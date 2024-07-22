import logo from '../../../media/guthi sansthan.png'
import { easeInOut, motion } from "framer-motion"

export const InstanceArticles=({img,desc,title,link})=>{
    return(
        <>         
               <motion.div initial={{opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:1}}  class="w-[98%] flex flex-wrap bg-white  p-6 px-6 border-b-2 border-zinc-900 justify-between">
        <div class="w-2/3 flex flex-col items-start px-3 ">
             <img src={logo} height={100} width={100} alt="logo"/>
             <h1>{title}</h1>
             <p className='max-h-6 overflow-clip tracking-tighter text-sm text-neutral-600'>{desc}
             </p>
        </div>
        <div class="w-1/3 h-full flex items-center justify-center  aspect-video">
              <img src={img} className='full aspect-video'/>
        </div>
   </motion.div></>
    )

}