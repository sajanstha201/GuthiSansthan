import React from 'react'
import './Teams.css'
import { useEffect } from 'react';
import '../../../../App.css'
import logo from '../../../../media/logo192.png'
const InstantTeam = ({name,image,post,name1,post1,image1}) => {

  return (
    
        <div className="py-2 w-full flex flex-row p-2 items-center justify-center bg-cyan-400/30 border-b-2 border-white">
                <div className='flex flex-col justify-center'>

                <img src={image} className="rounded-full h-[80px] w-[80px] md:h-[200px] md:w-[200px] emerge "/>
                 
                <h1 className='text-2xl font-bold text-yellow-500'>{post}</h1>
                <h1 className='text-lg font-semibold text-white'>{name}</h1>
                </div>
                <div className={` relative h-full w-[70%] flex justify-center items-center   overflow-hidden`}> 
                     <img src={logo} height={200} width={200} className='rotate-y-infinite   '/>
                </div>
                <div className='flex flex-col justify-center'>

                <img src={image1} className="rounded-full h-[80px] w-[80px] md:h-[200px] md:w-[200px] emerge "/>
                        <h1 className='text-2xl font-bold text-yellow-500'>{post1}</h1>
                        <h1 className='text-lg font-semibold text-white'>{name1}</h1>
                        </div>
                </div>
  )
}

export default InstantTeam
