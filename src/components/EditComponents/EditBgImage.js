import { faAdd, faL } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useEffect, useState } from "react"
import { useEditing } from "../../context/EditingProvider"
import { useDispatch } from "react-redux"
import { setGuthiSansthanLogo } from "../../state/GlobalSlice"
import { useSelector } from "react-redux"
import { showAlert } from "../AlertLoader"
import { activate_loader } from "../AlertLoader/LoaderBox"
export const EditBgImage=({imageId,url,setNewImage,children,isActualUploadedSame})=>{
    const [contentHidden,setContentHidden]=useState(false)
    const [image,setImage]=useState(!isActualUploadedSame)
    const globalDetail=useSelector(state=>state.globalDetail)
    const dispact=useDispatch()
    const {isEditing,setIsEditing}=useEditing()
    const baseUrl=useSelector(state=>state.baseUrl).backend
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
    const saveImage = async () => {
        const imageForm = new FormData();
        console.log(url);
        try {
            activate_loader(true)
            const response = await fetch(url);
            const blob = await response.blob();
            const newFile = new File([blob], 'image.jpg', { type: blob.type });
            imageForm.append('image', newFile);
            const apiResponse = await axios.patch(baseUrl + 'api/components/' + imageId + '/', imageForm);
            dispact(setNewImage(URL.createObjectURL(newFile)))
            setContentHidden(false);
            setImage(false)
            showAlert('successfully changed the background image','green')
        } catch (error) {
            showAlert(error, 'red');
            console.error('Error converting URL to Blob:', error);
        }
        finally{
            activate_loader(false)
        }
    };
    return(
        <>
        {!isEditing&&<>{children}</>}
        {isEditing&&
            <div className="relative w-full max-h-full flex items-center justify-center h-[60px]">
                {!contentHidden&&<>
                    {!image&&<div className="h-full w-full flex items-center justify-center" onClick={()=>setContentHidden(true)}>
                        <div className="w-[50%] h-[80%] flex items-center justify-center bg-slate-600 rounded-lg cursor-pointer  text-white px-5 py-3   fill-zinc-100 z-10 text-xl">Click to edit background image</div>
                    </div>}
                    {children}
                </>}
                {contentHidden&&<>
                    <>
                    <label className="w-[50%] h-[80%] bg-slate-600 rounded-lg flex flex-col items-center justify-center p-1 cursor-pointer" htmlFor={'edit-image-'+imageId} onClick={(e)=>e.stopPropagation()}>
                        <FontAwesomeIcon icon={faAdd}  className="text-white"></FontAwesomeIcon>
                        <div className="text-white text-[10px]  md:text-[20px]">Upload image</div>
                    </label>
                    <input type="file" accept=".png,.jpeg,.jpg" id={'edit-image-'+imageId} className="hidden" onChange={handleUploadImage} onClick={(e)=>e.stopPropagation()}></input>
                    </>
                </>}
                {image&&<div className="w-[50%] h-[80%]  flex items-center justify-center text-white gap-5">
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