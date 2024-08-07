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
export const EditBgVideo=({imageId,url,setNewImage,children,isActualUploadedSame})=>{
    const [contentHidden,setContentHidden]=useState(false)
    const [image,setImage]=useState(!isActualUploadedSame)
    const dispact=useDispatch()
    const {isEditing,setIsEditing}=useEditing()
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const homePageDetail=useSelector(state=>state.homePageDetail)
    const [isVideoUploaded,setIsVideoUploaded]=useState(homePageDetail.details['bg-video']?.image)
    console.log(homePageDetail)
    const handleUploadImage=(event)=>{
        event.stopPropagation();
        console.log(document.getElementById('edit-image-'+imageId).files[0])
        if (document.getElementById('edit-image-'+imageId).files[0].type.startsWith('image/')) setIsVideoUploaded(false)
        else setIsVideoUploaded(true)
        dispact(setNewImage(URL.createObjectURL(document.getElementById('edit-image-'+imageId).files[0])))
        console.log(document.getElementById('edit-image-'+imageId).files[0])
        setContentHidden(false)
        setImage(true)
    }
    const restoreImage=()=>{
        setImage(false)
        dispact(setNewImage())
        setIsVideoUploaded(!homePageDetail.details['bg-video'].image)
    }
    const saveImage = async () => {
        const imageForm = new FormData();
        console.log(url);
        try {
            activate_loader(true)
            const response = await fetch(url);
            const blob = await response.blob();
            const fileType = blob.type;
            if (fileType.startsWith('image/')) {
                setIsVideoUploaded(false)
                const newFile = new File([blob], 'image.jpg', { type: blob.type });
                imageForm.append('image', newFile);
                imageForm.append('video','');
                const apiResponse = await axios.patch(baseUrl + 'api/components/' + imageId + '/', imageForm);
                dispact(setNewImage(URL.createObjectURL(newFile)))
                setContentHidden(false);
                setImage(false)
                showAlert('successfully changed the background image','green')
            } else{
                setIsVideoUploaded(true)
                const newFile = new File([blob], 'image.mp4', { type: blob.type });
                imageForm.append('video', newFile);
                imageForm.append('image','');
                const apiResponse = await axios.patch(baseUrl + 'api/components/' + imageId + '/', imageForm);
                dispact(setNewImage(URL.createObjectURL(newFile)))
                setContentHidden(false);
                setImage(false)
                showAlert('successfully changed the background image','green')
            }
        } catch (error) {
            console.error('Error fetching Blob:', error);
            showAlert(error,'red')
        }
        finally{
            activate_loader(false)
        }
    };
    return(
        <>
        {!isEditing&&<>{children}</>}
        {isEditing&&<>
            {!isVideoUploaded?
                <div className='bg-cover bg-center fixed -z-10 w-full h-screen top-0' style={{backgroundImage:`url(${homePageDetail['bg-video']['video']})`}} ></div>
            :
                <video
                key={homePageDetail['bg-video']['video']} 
                autoPlay
                loop
                muted
                className="top-0 video-background fixed inset-0 w-full h-screen object-cover -z-30"
                >
                <source src={homePageDetail['bg-video']['video']} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            }
        </>}
        {isEditing&&
              <div className="relative w-full max-h-full flex items-center justify-center h-[60px]">
              {!contentHidden&&<>
                  {!image&&<div className="h-full w-full flex items-center justify-center" onClick={()=>setContentHidden(true)}>
                      <div className="w-[80%] h-[80%] flex items-center justify-center bg-slate-600 rounded-lg cursor-pointer  text-white px-5 py-3   fill-zinc-100 z-10 text-xl">Click to Edit</div>
                  </div>}
              </>}
              {contentHidden&&<>
                  <div className="flex flex-row gap-5 mx-5 items-center justify-center w-full">
                  <label className="w-[80%] h-[80%] bg-slate-600 rounded-lg flex flex-col items-center justify-center p-1 cursor-pointer" htmlFor={'edit-image-'+imageId} onClick={(e)=>e.stopPropagation()}>
                      <FontAwesomeIcon icon={faAdd}  className="text-white"></FontAwesomeIcon>
                      <div className="text-white text-[10px]  md:text-[20px]">Upload BackGround video or Image</div>
                  </label>
                  <input type="file" accept=".jpg,.png,.mp4,.jpeg" id={'edit-image-'+imageId} className="hidden" onChange={handleUploadImage} onClick={(e)=>e.stopPropagation()}></input>
                  </div>
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