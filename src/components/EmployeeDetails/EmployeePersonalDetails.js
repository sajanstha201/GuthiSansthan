import React from 'react'

const EmployeePersonalDetails = () => {
  return (
    <div className='w-full flex gap-5 flex-col bg-gray-400 rounded-lg p-4'>
        <h1>Employee's personal details fill out form on the follloeing laravel platform</h1>
        <div className='flex flex-wrap w-full gap-6'>
            <h1>Personal information</h1>
        </div>
        <div className='flex flex-wrap w-full gap-6'>
            <div className='flex gap-2 items-center'>
                <label className='font-semibold'>Full Name</label>
                <input type='text' className='h-10 w-96 border border-black rounded-md focus:outline-none active:border-cyan-400'/>
            </div>
            <div className='flex gap-2 items-center'>
                <label className='font-semibold'>Position</label>
                <input type='text' className='h-10 w-54 border border-black rounded-md focus:outline-none active:border-cyan-400'/>
            </div>
            <div className='flex gap-2 items-center'>
                <label className='font-semibold'>Grade</label>
                <input type='text' className='h-10 w-54 border border-black rounded-md focus:outline-none active:border-cyan-400'/>
            </div>
        </div>
        <div className='flex flex-wrap w-full gap-6'>
            <div className='flex gap-2 items-center'>
                <label className='font-semibold'>Service</label>
                <input type='text' className='h-10 w-54 border border-black rounded-md focus:outline-none active:border-cyan-400'/>
            </div>
            <div className='flex gap-2 items-center'>
                <label className='font-semibold'>group</label>
                <input type='text' className='h-10 w-54 border border-black rounded-md focus:outline-none active:border-cyan-400'/>
            </div>
         
        </div>
        <div className='flex flex-wrap w-full gap-6'>
            <div className='flex gap-2 items-center'>
                <label className='font-semibold'>   Apointment Date</label>
                <input type='date' className='h-10 w-54 border border-black rounded-md focus:outline-none active:border-cyan-400'/>
            </div>
            <div className='flex gap-2 items-center'>
                <label className='font-semibold'>Retirement Date</label>
                <input type='text' className='h-10 w-54 border border-black rounded-md focus:outline-none active:border-cyan-400'/>
            </div>
            <div className='flex gap-2 items-center'>
                <label className='font-semibold'>Release Date</label>
                <input type='date' className='h-10 w-54 border border-black rounded-md focus:outline-none active:border-cyan-400'/>
            </div>
         
        </div>
        <div className='flex flex-wrap w-full gap-6'>
            <div className='flex gap-2 items-center'>
                <label className='font-semibold'>District</label>
                <input type='text' className='h-10 w-54 border border-black rounded-md focus:outline-none active:border-cyan-400'/>
            </div>
            <div className='flex gap-2 items-center'>
                <label className='font-semibold'>Birth Date</label>
                <input type='date' className='h-10 w-54 border border-black rounded-md focus:outline-none active:border-cyan-400'/>
            </div>
            <div className='flex gap-2 items-center'>
                <label className='font-semibold'>number</label>
                <input type='number' required maxLength={10} className='h-10 w-54 border border-black rounded-md focus:outline-none active:border-cyan-400'/>
            </div>
        </div>
        <div className='flex w-full gap-6'>
            <label className='font-semibold'>Married Status</label>
            <section op>

             <option value='married'>Married</option>
             <option value='Unmarried'>Unmarried</option>
            </section>
        </div>
        <div className='flex w-full gap-6'>
            <h1>
                Bank details submitted to the institute
                </h1>
       </div>
        <div className='flex w-full gap-6'>
        <div className='flex flex-wrap w-full gap-6'>
            <div className='flex gap-2 items-center'>
                <label className='font-semibold'>Bank Name</label>
                <input type='text' className='h-10 w-54 border border-black rounded-md focus:outline-none active:border-cyan-400'/>
            </div>
            <div className='flex gap-2 items-center'>
                <label className='font-semibold'>Account no.</label>
                <input type='text' className='h-10 w-54 border border-black rounded-md focus:outline-none active:border-cyan-400'/>
            </div>
            <div className='flex gap-2 items-center'>
                <label className='font-semibold'>Pan no.</label>
                <input type='number' className='h-10 w-54 border border-black rounded-md focus:outline-none active:border-cyan-400'/>
            </div>
        </div>
        </div>
       <div className='w-full flex justify-start'>
         <h1>Correspondence</h1>
        </div>
        <div className='flex w-full gap-6'>
        <div className='flex gap-2 items-center'>
                <label className='font-semibold'>District</label>
                <input type='text' className='h-10 w-54 border border-black rounded-md focus:outline-none active:border-cyan-400'/>
            </div>
            <div className='flex gap-2 items-center'>
                <label className='font-semibold'>Ward no</label>
                <input type='number' className='h-10 w-54 border border-black rounded-md focus:outline-none active:border-cyan-400'/>
            </div>
        </div>
       
    </div>
  )
}

export default EmployeePersonalDetails
