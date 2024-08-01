import { faPlus ,faClose} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMediaQuery } from "@mui/material"
import { useRef, useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import {showAlert} from '../../../AlertLoader'
import {useSelector} from 'react-redux'
export const ServiceAddition=({fetchService})=>{
    const [isActivate,setIsActivate]=useState(false)
    const [imageSrc,setImageSrc]=useState()
    const isMobile=useMediaQuery('(max-width:800px)')
    const addRef=useRef()
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const showAddService=()=>{
        setIsActivate(true)
        addRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    const uploadImage=()=>{
        const reader=new FileReader()
        reader.onload=(e)=>{
            setImageSrc(URL.createObjectURL(new Blob([e.target.result])))
        }
        reader.readAsArrayBuffer(document.getElementById('service-addition-image').files[0])
    }
    const addService=async(e)=>{
        e.preventDefault();
        const data = new FormData();
        data.append("name", document.getElementById('service-addition-name').value);
        data.append("image",document.getElementById('service-addition-image').files[0])
        data.append("url", document.getElementById('service-addition-link').value);
        data.append("description", document.getElementById('service-addition-description').value);
        try {
            const response = await axios.post(baseUrl+'api/services/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            fetchService()
            setIsActivate(false)
            document.getElementById('service-addition-name').value=''
            document.getElementById('service-addition-image').files=null
            setImageSrc()
            document.getElementById('service-addition-link').value=''
            document.getElementById('service-addition-description').value=''
            console.log(response.data)
        } catch (error) {
            showAlert(error,'red')
            console.log(error)
        }
    }
    return(
        <>
        {!isActivate&&
            <div className={`${isMobile ? 'h-[100px] w-[150px]' : 'h-[150px] w-[200px]'} relative overflow-hidden flex backdrop-blur-md  shadow-xl bg-gray-300/40 shadow-zinc-600 hover:shadow-red-600/50 rounded-lg  hover:scale-105 ease-in-out transition-all`}>
                <div className="flex items-center justify-center h-full w-full flex-col text-white cursor-pointer" onClick={showAddService}>
                    <div className="text-[20px]">Add Services</div>
                    <FontAwesomeIcon icon={faPlus} size="3x"/>
                </div>
            </div>
        }

            <div ref={addRef} className={`${isActivate?'w-full h-fit opacity-100':' h-0 opacity-0 hidden'} relative flex items-center justify-center transition-all duration-200 ease-out`}>
                <div className="relative w-[60%] h-full flex rounded-md">
                <FontAwesomeIcon icon={faClose} size={'2x'} className="cursor-pointer  absolute top-2 right-2 text-red-600 z-50" onClick={()=>setIsActivate(false)}/> 
                    <div className="w-full h-full text-white flex flex-col items-center border border-white">
                        <h1 className="text-white">Service Detail Form</h1>
                        <div className="flex gap-4 flex-col items-center justify-center w-[80%] text-black" >
                            <input type="text" id='service-addition-name' className="p-2 rounded-md w-full" placeholder="Service Name" name="name" ></input>
                            <input type="text" id='service-addition-link' className="p-2 rounded-md w-full" placeholder="Service Link" ></input>
                            <textarea type="text" id='service-addition-description' className="p-2 rounded-md w-full" placeholder="Service Description"></textarea>
                            <div>
                                {!imageSrc&&
                                <>
                                <label htmlFor='service-addition-image' className="flex w-[150px] h-[150px] bg-gray-500 rounded-md items-center justify-center flex-col cursor-pointer hover:scale-105 transition-all duration-300 border border-white">
                                    <div className="text-[20px]">Upload Image</div>
                                        <FontAwesomeIcon icon={faPlus} size="3x"/>
                                </label>
                                </>
                                }
                                <input id='service-addition-image' type="file" accept=".png,.jpeg,.jpg" className="hidden" onChange={uploadImage}></input>
                                {imageSrc&&
                                <>
                                <div className="flex w-[200px] h-[200px]rounded-md items-center justify-center flex-col cursor-pointer ">
                                    <img src={imageSrc}></img>
                                </div>
                                <div className="flex items-center justify-center px-2 bg-red-600 text-white cursor-pointer hover:bg-red-700 rounded-md m-1 py-2" onClick={()=>setImageSrc()}>Remove</div>
                                </>
                                }
                                <div className="flex items-center justify-center px-2 bg-green-600 text-white cursor-pointer hover:bg-green-700 rounded-md m-2 py-2" onClick={addService}>Upload</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}