import { faAdd, faL } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useEffect, useState } from "react"
import { useEditing } from "../../context/EditingProvider"
import { useDispatch } from "react-redux"
import { setGuthiSansthanLogo } from "../../state/GlobalSlice"
import { useSelector } from "react-redux"
export const EditGif=({name,gifId,url,setNewGif,children,isActualUploadedSame})=>{
    const [contentHidden,setContentHidden]=useState(false)
    const [gif,setGif]=useState(!isActualUploadedSame)
    const globalDetail=useSelector(state=>state.globalDetail)
    const dispact=useDispatch()
    const {isEditing,setIsEditing}=useEditing()
    const handleUploadGif=(event)=>{
        event.stopPropagation();
        if(name) dispact(setNewGif({'name':name,'detail':URL.createObjectURL(document.getElementById('edit-gif-'+gifId).files[0])}))
        else dispact(setNewGif(URL.createObjectURL(document.getElementById('edit-gif-'+gifId).files[0])))
        setContentHidden(false)
        setGif(true)
    }
    const restoreGif=()=>{
        setGif(false)
        if(name) dispact(setNewGif({'name':name,'detail':null}))
        else dispact(setNewGif())

    }
    const savegif=async()=>{
        const gifForm=new FormData()
        console.log(gifId,url)
        console.log(url)
        const response=await axios.patch(url+gifId+'/',{
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
                <div className="relative max-w-full max-h-full flex items-center justify-center">
                {!contentHidden&&<>
                    {!gif&&<div className="absolute px-2 py-1 rounded-lg cursor-pointer text-[20px] bg-slate-600 text-white left-1 top-1 fill-zinc-100 z-30" onClick={()=>setContentHidden(true)}>Edit</div>}
                    {children}
                </>}
                {contentHidden&&<>
                    <>
                    <label className="w-[90%] h-[90%] bg-slate-600 rounded-lg flex flex-col items-center justify-center p-1 cursor-pointer" htmlFor={'edit-gif-'+gifId} onClick={(e)=>e.stopPropagation()}>
                        <FontAwesomeIcon icon={faAdd}  className="text-white"></FontAwesomeIcon>
                        <div className="text-white text-[10px]  md:text-[20px]">Upload gif</div>
                    </label>
                    <input type="file" accept=".png,.jpeg,.jpg" id={'edit-gif-'+gifId} className="hidden" onChange={handleUploadGif} onClick={(e)=>e.stopPropagation()}></input>
                    </>
                </>}
                {gif&&<div className="w-full h-full absolute z-30">
                            <div className="absolute bottom-1 flex flex-row text-[10px] gap-1 right-1 text-white z-30">
                                <div className="px-2 py-1  rounded-md cursor-pointer bg-red-600  "
                                    onClick={restoreGif}>Remove</div>
                                <div className="px-2 py-1  rounded-md cursor-pointer bg-green-600 "
                                    onClick={savegif}>Save</div>
                            </div>
                </div>}
            </div>
        }

        
        </>
    )
}