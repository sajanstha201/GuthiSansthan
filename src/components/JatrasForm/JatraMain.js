import React, { useState } from 'react'
import JatraForm from './JatraForm'
import TempleForm from './TempleForm'

const JatraMain = () => {
   const[isJatra,setJatra]= useState(true)
  return (
    <div className='bg-red-600 flex flex-col justify-center items-center w-full h-screen fixed top-0'>
      <div className='flex w-full justify-start bg-gray-600/40 backdrop-blur-lg  py-4 px-12 gap-5 lg:w-[70]'>
           <button onClick={()=>setJatra(true)} className={`font-semibold text-lg  ${isJatra ? 'border-b border-red-600 leading-tight':'hover:text-red-600'}`}> Jatra Form </button>
           <button onClick={()=>setJatra(false)} className={`font-semibold text-lg  ${!isJatra ? 'border-b border-red-600 leading-tight':'hover:text-red-600'}`}> temple </button>
      </div>
        {isJatra ? <JatraForm/>:<TempleForm/>}

        
        
    </div>
  )
}

export default JatraMain
