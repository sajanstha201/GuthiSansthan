import logo from '../../../media/guthi sansthan.png'
import { easeInOut, motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ViewEditButton } from './ViewEditButton'
import { useEditing } from '../../../context/EditingProvider'
export const InstanceArticles=({img,desc,title,link})=>{
    const [data,setData]=useState('sajan shrestha')
    const {isEditing,setIsEditing}=useEditing()
    return(
    <>         
        <motion.div initial={{opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:1}} className='relative' >
            {isEditing&&<ViewEditButton/>}
            <Link to='/show-article' state={{data}}
                 className="w-[98%] flex flex-wrap bg-white  p-6 px-6 border-b-2 border-zinc-900 justify-between no-underline">
                <div class="w-2/3 flex flex-col items-start px-3 ">
                    <img src={logo} height={100} width={100} alt="logo"/>
                    <h1>{title}</h1>
                    <p className='max-h-6 overflow-clip tracking-tighter text-sm text-neutral-600'>{desc}
                    </p>
                </div>
                <div class="w-1/3 h-full flex items-center justify-center  aspect-video">
                    <img src={img} className='full aspect-video'/>
                </div>
            </Link>

        </motion.div>
   </>
    )
}