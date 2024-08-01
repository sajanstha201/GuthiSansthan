import {React,useRef, useState} from 'react'
import { useMediaQuery } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faClose } from '@fortawesome/free-solid-svg-icons';
import { showAlert } from '../../../AlertLoader';
import { useSelector } from 'react-redux';
export const AddTemple = ({fetchTemple}) => {

    const nameRef = useRef();
    const  locationRef= useRef();
    const  photoRef = useRef();
     const  qrRef = useRef();
    const  desRef = useRef();
    const [isAddTempleActivate,setIsAddTempleActivate]=useState(false)
    const isMobile = useMediaQuery('(max-width:800px)');
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const templeDetail=useSelector(state=>state.templeDetail)
    const handleSubmit = async(value) =>{
       const name = nameRef.current.value.trim();
       const location = locationRef.current.value.trim();
       const photo = photoRef.current.files[0];
       const qrcode = qrRef.current.files[0]
       const des = desRef.current.value.trim();
       console.log(name,location,photo,qrcode)
       if(!name || !location || !photo ||!qrcode|| !des){
            showAlert('Enter all data','red')
           return
       }
       const formData = new FormData();
       formData.append('name',name);
       formData.append('location',location);
       formData.append('image',photo);
       formData.append('qr_code',qrcode)
       formData.append('details',des)
       console.log(formData)
       try {
         const response = await fetch(baseUrl+templeDetail.url, {
           method: 'POST',
           body: formData,
         });
         if (!response.ok) {
           throw new Error('Network response was not ok');
         }
         const result = await response.json();
         console.log(result);
         showAlert('Temple Added Successfully','green')
         fetchTemple()
         setIsAddTempleActivate(false)
       } catch (error) {
         console.error('Error:', error);
         showAlert(error,'red')
       }
     };
    
  return (
    <>
    {!isAddTempleActivate&&<>
    <div 
            onClick={()=>setIsAddTempleActivate(true)}
            className={`${isMobile?'h-[100px] w-[150px]':'h-[150px] w-[200px] '}  hover:scale-105  bg-gray-600 rounded-md border border-white flex flex-col text-white items-center justify-center`} >
            <div>Add Temple</div>
            <FontAwesomeIcon icon={faPlus} size='3x'/>
        </div>
    </>}

    <>
    {isAddTempleActivate&&
    <div className='relative flex flex-col w-[90%] bg-white/50 backdrop-blur-sm rounded-lg lg:w-[50%] p-3 gap-2'>
            <FontAwesomeIcon icon={faClose} size={'2x'} className="cursor-pointer  absolute top-2 right-2 text-red-600 z-50" onClick={()=>setIsAddTempleActivate(false)}/> 

           <h1 className='font-semibold tracking-wider my-2'>Temple Form</h1>
             <div className='flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
                <label className='font-semibold text-lg'>Temple Name:</label>
                <input type='text' ref={nameRef} className='w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900'/>
             </div>
             <div className='flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
                <label className='font-semibold text-lg'>location:</label>
                <input type='text' ref={locationRef} className='w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900'/>
             </div>
             <div className='flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
                <label className='font-semibold text-lg'>Upload Image:</label>
                <input type='file' accept='.png,.jpg,.jpeg' ref={photoRef} className='w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900'/>
             </div>
             <div className='flex flex-wrap flex-col py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
                <label className='font-semibold text-lg'>Description:</label>
                <textarea ref={desRef} className='w-full lg:w-2/3 rounded-md h-44 px-2 py-3 border border-cyan-400'/>
             </div>
             <div className='flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
                <label className='font-semibold text-lg'>Upload QR:</label>
                <input type='file'accept='.png,.jpg,.jpeg'  ref={qrRef} className='w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900'/>
             </div>
             <div className='w-full flex justify-end px-5 gap-3'>
             <button className='bg-red-600 px-4 py-1 rounded-md text-white font-semibold text-lg' onClick={()=>setIsAddTempleActivate(false)}>Remove</button>
             <button className='bg-green-600 px-4 py-1 rounded-md text-white font-semibold text-lg' onClick={handleSubmit}>Submit</button>
             </div>
       </div>}
    </>
    </>
    

    
  )
}
