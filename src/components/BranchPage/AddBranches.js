import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { showConfirmBox } from '../AlertLoader/ConfirmBox'
const AddBranches = () => {
  const [isBranchAdditionActivate,setIsBranchAdditionActivate]=useState(false)
  const [branchName,setBranchName]=useState('')
  const [redirect,setRedirect]=useState(false)
  const checkConfirm=async ()=>{
      if(await showConfirmBox('Do you want to creat new Branch')){
        setRedirect(true)
      }   
  }
  if(redirect){
    return <Navigate to='/branche-full-info'  state={branchName}/>
  }
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
                    <div className='flex gap-2'>
                        <lable className='font-bold w-1/3'>Branch Name</lable>
                        <input type='text' className='h-8 px-2 rounded-md' onChange={(e)=>setBranchName(e.target.value)}/>
                    </div>
                    <div className='flex justify-center' >
                         <div  onClick={checkConfirm}className='px-6 py-2 rounded-xl bg-green-500 text-white font-semibold no-underline' >Create Branch</div>
                    </div>
                    </div>
            </div>
        </div>
        
    }

    </>

  )
}

export default AddBranches
