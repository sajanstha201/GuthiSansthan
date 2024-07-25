import { faAdd, faL } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useEffect, useState } from "react"
import { useEditing } from "../../context/EditingProvider"
import { useDispatch } from "react-redux"
import { setGuthiSansthanLogo } from "../../state/GlobalSlice"
import { useSelector } from "react-redux"
export const EditImage=({imageId,url,setNewImage,children})=>{
    const [contentHidden,setContentHidden]=useState(false)
    const [image,setImage]=useState(false)
    const globalDetail=useSelector(state=>state.globalDetail)
    const dispact=useDispatch()
    const handleUploadImage=(event)=>{
        event.stopPropagation();
        dispact(setNewImage({'imgSrc':URL.createObjectURL(document.getElementById('edit-image-'+imageId).files[0])}))
        setContentHidden(false)
        setImage(true)
    }
    const restoreImage=()=>{
        setImage(false)
        dispact(setNewImage({'imgSrc':''}))

    }
    const saveImage=async()=>{
        const imageForm=new FormData()
        console.log(imageId,url)
        console.log(url)
        const response=await axios.patch(url+imageId+'/',{
            'text':{
                'nepali':"sajan"
            }
        })
        console.log(response.data)
    }
    return(
        <>
        <div className="relative max-w-full max-h-full flex items-center justify-center z-10">
            {!contentHidden&&<>
                {!image&&<div className="absolute px-2 py-1 rounded-lg cursor-pointer bg-slate-600 text-white left-1 top-1 fill-zinc-100 z-10" onClick={()=>setContentHidden(true)}>Edit</div>}
                {children}
            </>}
            {contentHidden&&<>
                <>
                <label className="w-[90%] h-[90%] bg-slate-600 rounded-lg flex flex-col items-center justify-center p-1 cursor-pointer" htmlFor={'edit-image-'+imageId} onClick={(e)=>e.stopPropagation()}>
                    <FontAwesomeIcon icon={faAdd}  className="text-white"></FontAwesomeIcon>
                    <div className="text-white text-[10px]  md:text-[20px]">Upload image</div>
                </label>
                <input type="file" accept=".png,.jpeg,.jpg" id={'edit-image-'+imageId} className="hidden" onChange={handleUploadImage} onClick={(e)=>e.stopPropagation()}></input>
                </>
            </>}
            {image&&<div className="w-full h-full absolute ">
                        <div className="absolute bottom-1 flex flex-row text-[10px] gap-1 right-1 text-white">
                            <div className="px-2 py-1  rounded-md cursor-pointer bg-red-600  "
                                onClick={restoreImage}>Remove</div>
                            <div className="px-2 py-1  rounded-md cursor-pointer bg-green-600 "
                                onClick={saveImage}>Save</div>
                        </div>
             </div>}
        </div>
        
        </>
    )
}