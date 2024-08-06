import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddBranches = () => {
  const [isBranchAdditionActivate,setIsBranchAdditionActivate]=useState(false)
  return (
    <>
    {!isBranchAdditionActivate&&
        <div onClick={()=>setIsBranchAdditionActivate(true)}>
        <FontAwesomeIcon icon={faPlus} size='3x'/>
      </div>
    }
    {isBranchAdditionActivate&&
        <div>
        <div className='w-full flex justify-center items-center'>
            <div className='flex flex-col bg-neutral-500/60 backdrop-blur-xl rounded-xl p-6 gap-6'>
                     <h1 className='font-extrabold text-black'>Branches form</h1>
                    <div className='flex gap-2'>
                        <lable className='font-bold w-1/3'>Branch Name</lable>
                        <input type='text' className='h-8 px-2 rounded-md' />
                    </div>
                    <div className='flex gap-2'>
                        <lable className='font-bold w-1/3'>Loacation:</lable>
                        <input type='text' className='h-8 px-2 rounded-md' />
                    </div>
                    <div className='flex gap-2'>
                        <lable className='font-bold w-1/3'>Contact</lable>
                        <input type='text' className='h-8 px-2 rounded-md' />
                    </div>

                    <div className='flex justify-center' >
                         <Link to='/branche-full-info' className='px-6 py-2 rounded-xl bg-green-500 text-white font-semibold' >Create Branch</Link>
                    </div>
                    </div>
            </div>
        </div>
        
    }

    </>

  )
}

export default AddBranches
