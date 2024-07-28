import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
export const ImageTemplate=({data,setData,name})=>{
    const [image,setImage]=useState(false)
    const handleChange=()=>{
        const data=document.getElementById(name+'-input').files[0]
        setData(prevData=>({...prevData,[name]:{...prevData[name],['image']:data}}))
        const reader=new FileReader()
        reader.onload=(e)=>{
            setImage(URL.createObjectURL(new Blob([e.target.result])))
        }
        reader.readAsArrayBuffer(data)
    }
    return(
        <div className="flex  m-2 cursor-pointer">
            {!image&&
            <>
                <label htmlFor={name+'-input'} className="h-full w-full flex  rounded-md border border-dotted flex-col items-center justify-center cursor-pointer hover:scale-101 hover:bg-gray-100">
                    <FontAwesomeIcon icon={faPlusCircle} size='2x'/>
                    Upload Image
                    </label>
                <input id={name+'-input'} type="file" className="hidden" onChange={handleChange}></input>
            </>}
            {image&&<>
            <div className='relative'>
                <img src={image}/>
                <div className='absolute bottom-1  right-1 flex flex-row gap-2'>
                    <div className={`  bg-red-700 hover:bg-red-900 cursor-pointer flex border  rounded-md px-2 py-1 h-[30px] items-center justify-center text-white`} onClick={()=>setImage(false)}>Remove</div>                </div>
            </div>
            </>}

        </div>
    )
}