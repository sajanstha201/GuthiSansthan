import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { showConfirmBox } from '../AlertLoader/ConfirmBox'
import { showAlert } from '../AlertLoader'
const AddBranches = () => {
  const [isBranchAdditionActivate,setIsBranchAdditionActivate]=useState(false)
  const [branchName,setBranchName]=useState('')
  const [redirect,setRedirect]=useState(false)
  const checkConfirm=async ()=>{
      if(branchName===''){
        showAlert('Enter the Branch Name','red');
        return;
      }
      if(await showConfirmBox('Do you want to creat new Branch')){
        setRedirect(true)
      }
      else{
        setIsBranchAdditionActivate(false)
      }
  }
  if(redirect){
    return <Navigate to='/branche-full-info'  state={branchName}/>
  }
  return (
    <>
    {!isBranchAdditionActivate&&
        <div onClick={()=>setIsBranchAdditionActivate(true)} className='w-[150px] h-[100px] md:w-[300px] md:h-[200px] flex items-center justify-center bg-gray-500 m-1 hover:scale-105 rounded-md hover:bg-gray-600 transition-all duration-300'>
        <FontAwesomeIcon icon={faPlus} size='3x'/>
      </div>
    }

    {isBranchAdditionActivate&&
        <div>
        <div className='w-full flex justify-center items-center'>
            <div className='flex flex-col bg-neutral-500/60 backdrop-blur-xl rounded-xl p-6 gap-6'>
                    <div className='flex gap-2'>
                        <input type='text'  placeholder='Branch Name' className='h-8 px-2 rounded-md' onChange={(e)=>setBranchName(e.target.value)}/>
                    </div>
                    <div className='flex justify-center cursor-pointer ' >
                         <div  onClick={checkConfirm}className='px-6 py-2 rounded-xl text-white font-semibold no-underline bg-green-500 hover:bg-green-600' >Create Branch</div>
                    </div>
                    </div>
            </div>
        </div>
        
    }

    </>

  )
}

export default AddBranches
