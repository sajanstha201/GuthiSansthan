import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
export const ImageTemplate=({data,setData,name})=>{
    const [image,setImage]=useState(false)
    useEffect(()=>{
        if(data[name]?.binaryImage??false){
            const reader=new FileReader()
            reader.onload=(e)=>{
                setImage(URL.createObjectURL(new Blob([e.target.result])))
            }
            reader.readAsArrayBuffer(data[name]?.binaryImage)
        }
    },[data])
    const handleChange=()=>{
        const data=document.getElementById(name+'-input').files[0]
        const dataFrom=new FormData()
        dataFrom.append('image',data)
        setData(prevData=>({...prevData,[name]:{...prevData[name],['image']:dataFrom['image'],['binaryImage']:data}}))
        const reader=new FileReader()
        reader.onload=(e)=>{
            setImage(URL.createObjectURL(new Blob([e.target.result])))
        }
        reader.readAsArrayBuffer(data)
    }
    const deleteImage=()=>{
        setImage(false)
        setData(prevData=>({...prevData,[name]:{...prevData[name],['image']:'',['binaryImage']:''}}))
    }
    return(
        <div className="flex  m-2 cursor-pointer items-center justify-center  ">
            {!image&&
            <>
            <div className='flex items-center justify-center h-[100px] w-[100px] md:h-[300px] md:w-[300px] '>
                <label htmlFor={name+'-input'} className="h-full w-full flex  rounded-md border border-dotted flex-col items-center justify-center cursor-pointer hover:scale-101 hover:bg-gray-100">
                        <FontAwesomeIcon icon={faPlusCircle} size='2x'/>
                        Upload Image
                        </label>
                    <input id={name+'-input'} type="file" accept='.png,.jpg,.jpeg' className="hidden" onChange={handleChange}></input>
            </div>
     
            </>}
            {image&&<>
            <div className='relative flex items-center justify-center h-[100px] w-[100px] md:h-[300px] md:w-[300px]'>
                <div className=' flex items-center justify-center'>
                    <img src={image}/>
                    <div className='absolute bottom-1  right-1 flex flex-row gap-2'>
                        <div className={`  bg-red-700 hover:bg-red-900 cursor-pointer flex border  rounded-md px-2 py-1 h-[30px] items-center justify-center text-white`} onClick={deleteImage}>Remove</div></div>
                </div>
            </div>
   
            </>}

        </div>
    )
}