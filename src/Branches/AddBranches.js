import React from 'react'

const AddBranches = () => {
  return (
    <div className='w-full flex justify-center items-center'>
        <div className='flex flex-col bg-neutral-500/60 backdrop-blur-xl rounded-xl p-6 gap-6'>
                 <h1 className='font-extrabold text-black'>Branches form</h1>
                <div className='flex gap-2'>
                    <lable className='font-bold'>Branch Name</lable>
                    <input type='text' className='h-8 px-2 rounded-md' />
                </div>
                <div className='flex gap-2'>
                     <div className='flex flex-col justify-center items center gap-4'>
                            <div className='flex gap-4'>
                             <label className='font-bold' >Upload image:</label>
                             <input className=' py-2 px-3 rounded-md' type='file'/>
                            </div>
                            <div className='flex gap-4'>
                             <label className='font-bold' >Name:</label>
                             <input className=' py-2 px-3 rounded-md' type='text'/>
                            </div>
                            <div className='flex gap-4'>
                             <label className='font-bold' >Post:</label>
                             <input className=' py-2 px-3 rounded-md' type='text'/>
                            </div>
                          

                     </div>
                     <div className='flex flex-col justify-center items center gap-4'>
                            <div className='flex gap-4'>
                             <label className='font-bold' >Upload image:</label>
                             <input className=' py-2 px-3 rounded-md' type='file'/>
                            </div>
                            <div className='flex gap-4'>
                             <label className='font-bold' >Name:</label>
                             <input className=' py-2 px-3 rounded-md' type='text'/>
                            </div>
                            <div className='flex gap-4'>
                             <label className='font-bold' >Post:</label>
                             <input className=' py-2 px-3 rounded-md' type='text'/>
                            </div>
                          

                     </div>
                </div>
                <div className='flex justify-end' >
                     <button className='px-6 py-2 rounded-xl bg-green-500 text-white font-semibold' >Create Branch</button>
                </div>
        </div>
    </div>
  )
}

export default AddBranches
