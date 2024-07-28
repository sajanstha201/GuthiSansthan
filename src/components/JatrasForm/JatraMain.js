import React, { useState } from 'react'
import JatraForm from './JatraForm'
import TempleForm from './TempleForm'

const JatraMain = () => {
   const[isJatra,setJatra]= useState(true)
  return (
    <div className=' flex flex-col  items-center w-full h-full  gap-4 '>
      <div className='w-full flex justify-center items-center '>

          <div className='flex w-full justify-start bg-gray-600/40 backdrop-blur-lg  py-4 px-12 gap-5 lg:w-[70%]  lg:mt-3'>
              <button onClick={()=>setJatra(true)} className={`font-semibold text-lg  ${isJatra ? 'border-b border-red-600 leading-tight':'hover:text-red-600'}`}> Jatra Form </button>
              <button onClick={()=>setJatra(false)} className={`font-semibold text-lg  ${!isJatra ? 'border-b border-red-600 leading-tight':'hover:text-red-600'}`}> temple </button>
          </div>
      </div>


        {isJatra ? <JatraForm/>:<TempleForm/>}

      
        </div>
        
    
  )
}

export default JatraMain
