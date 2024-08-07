import React from 'react'
import logo from '../../../media/guthi sansthan.png'
import { easeInOut, motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEditing } from '../../../context/EditingProvider'

const BranchIntanceArticle = ({img,desc,title,link}) => {
    const [data,setData]=useState('sajan shrestha')
    
  return (
    <div className='w-full p-4'>
       <motion.div initial={{opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:1}} className='relative' >
           
            <Link to='/show-article' state={{data}}
                 className="w-[98%] overflow-hidden flex flex-wrap bg  p-6 px-6 border-b-2 border-zinc-900 justify-between no-underline">
                <div class="w-2/3 flex flex-col items-start px-3 bg-center bg-cover bg-gray-300" >
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
    </div>
  )
}

export default BranchIntanceArticle
