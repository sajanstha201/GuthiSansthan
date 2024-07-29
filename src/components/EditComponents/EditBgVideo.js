import { faAdd, faL } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useEffect, useState } from "react"
import { useEditing } from "../../context/EditingProvider"
import { useDispatch } from "react-redux"
import { setGuthiSansthanLogo } from "../../state/GlobalSlice"
import { useSelector } from "react-redux"
export const EditBgVideo=({imageId,url,setNewImage,children,isActualUploadedSame})=>{
    const [contentHidden,setContentHidden]=useState(false)
    const [image,setImage]=useState(!isActualUploadedSame)
    const dispact=useDispatch()
    const {isEditing,setIsEditing}=useEditing()
    const handleUploadImage=(event)=>{
        event.stopPropagation();
        dispact(setNewImage(URL.createObjectURL(document.getElementById('edit-image-'+imageId).files[0])))
        setContentHidden(false)
        setImage(true)
    }
    const restoreImage=()=>{
        setImage(false)
        dispact(setNewImage())

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
        {!isEditing&&<>{children}</>}
        {isEditing&&
              <div className="relative w-full max-h-full flex items-center justify-center h-[60px]">
              {!contentHidden&&<>
                  {!image&&<div className="h-full w-full flex items-center justify-center" onClick={()=>setContentHidden(true)}>
                      <div className="w-[80%] h-[80%] flex items-center justify-center bg-slate-600 rounded-lg cursor-pointer  text-white px-5 py-3   fill-zinc-100 z-10 text-xl">Click to edit background Video</div>
                  </div>}
                  {children}
              </>}
              {contentHidden&&<>
                  <>
                  <label className="w-[80%] h-[80%] bg-slate-600 rounded-lg flex flex-col items-center justify-center p-1 cursor-pointer" htmlFor={'edit-image-'+imageId} onClick={(e)=>e.stopPropagation()}>
                      <FontAwesomeIcon icon={faAdd}  className="text-white"></FontAwesomeIcon>
                      <div className="text-white text-[10px]  md:text-[20px]">Upload BackGround Video</div>
                  </label>
                  <input type="file" accept=".mp4" id={'edit-image-'+imageId} className="hidden" onChange={handleUploadImage} onClick={(e)=>e.stopPropagation()}></input>
                  </>
              </>}
              {image&&<div className="w-[80%] h-[80%]  flex items-center justify-center text-white gap-5">
                      <div className="px-5 py-3  rounded-md cursor-pointer bg-red-600  "
                          onClick={restoreImage}>Remove</div>
                      <div className="px-5 py-3   rounded-md cursor-pointer bg-green-600 "
                          onClick={saveImage}>Save</div>
               </div>}
          </div>
        }
        </>
    )
}