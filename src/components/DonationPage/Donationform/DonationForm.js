import React, { useState } from 'react'
import JatraDonation from './JatraDonation'
import TempleDonation from './TempleDonation'
import bg from '../../../media/AboutUsPage/mountain.png'


const DonationForm = () => {
  const [isJatra,setJatraDon]=useState(true)
  return (
    <>
    <div className={`h-screen  fixed -z-20 flex justify-center  top-0 w-full bg-cover bg-center`}> </div>
        <div className='flex h-full w-full flex-col justify-center items-center '>
                     <div className='flex w-full justify-start bg-gray-600/40 backdrop-blur-lg  py-4 px-12 gap-5 lg:w-[70%]  lg:mt-3'>
                        <button onClick={()=>setJatraDon(true)} className={`font-semibold text-lg  ${isJatra ? 'border-b border-red-600 leading-tight':'hover:text-red-600'}`}> Jatra Donation </button>
                        <button onClick={()=>setJatraDon(false)} className={`font-semibold text-lg  ${!isJatra ? 'border-b border-red-600 leading-tight':'hover:text-red-600'}`}> temple Donation </button>
                </div>
                

                {isJatra ? <JatraDonation/> : <TempleDonation/>}
                
          </div> 
    </>
           
     

    
  )
}

export default DonationForm
