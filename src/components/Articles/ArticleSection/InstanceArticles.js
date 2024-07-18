import logo from '../../../media/guthi sansthan.png'
import { motion } from "framer-motion"

export const InstanceArticles=({img,desc,title,link})=>{
    return(
        <>         
               <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.6}} class="w-full flex flex-wrap bg-white  p-6 px-6 m-2 rounded-md justify-between">
        <div class="w-2/3 flex flex-col items-start px-3 ">
             <img src={logo} height={100} width={100} alt="logo"/>
             <h1>{title}</h1>
             <p className='max-h-6 overflow-clip tracking-tighter text-sm text-neutral-600'>{desc}
             </p>
        </div>
        <div class="w-1/4 bg-gray-400">
              <img src={img}/>
        </div>
   </motion.div></>
    )

}