import { faPlus ,faClose} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMediaQuery } from "@mui/material"
import { useRef, useState } from "react"
export const ServiceAddition=()=>{
    const [isActivate,setIsActivate]=useState(false)
    const [imageSrc,setImageSrc]=useState()
    const isMobile=useMediaQuery('(max-width:800px)')
    const addRef=useRef()
    const showAddService=()=>{
        setIsActivate(true)
        addRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    const uploadImage=()=>{
        const reader=new FileReader()
        reader.onload=(e)=>{
            setImageSrc(URL.createObjectURL(new Blob([e.target.result])))
        }
        reader.readAsArrayBuffer(document.getElementById('service-addition-div').files[0])
    }
    return(
        <>
        {!isActivate&&
            <div className={`${isMobile?'w-[200px] h-[200px] ':'w-[300px] h-[300px]'} relative overflow-hidden flex backdrop-blur-md  shadow-xl bg-gray-300/40 shadow-zinc-600 hover:shadow-red-600/50 rounded-lg  hover:scale-105 ease-in-out transition-all`}>
                <div className="flex items-center justify-center h-full w-full flex-col text-white cursor-pointer" onClick={showAddService}>
                    <div className="text-[20px]">Add Services</div>
                    <FontAwesomeIcon icon={faPlus} size="3x"/>
                </div>
            </div>
        }

            <div ref={addRef} className={`${isActivate?'w-full h-[80vh] opacity-100':' h-0 opacity-0 hidden'} relative flex items-center justify-center transition-all duration-200 ease-out`}>
                <div className="relative w-[50%] h-full flex bg-slate-500 rounded-md">
                <FontAwesomeIcon icon={faClose} size={'2x'} className="cursor-pointer  absolute top-2 right-2 text-red-600 z-50" onClick={()=>setIsActivate(false)}/> 
                    <div className="w-full h-full text-white flex flex-col items-center ">
                        <h1 className="text-white">Service Detail Form</h1>
                        <div className="flex gap-2 flex-col items-center justify-center w-full">
                            <div><div>Service Name</div> <input type="text" className="p-1 rounded-md"></input></div>
                            <div><div>Link</div> <input type="text" className="p-1 rounded-md"></input></div>
                            <div className="w-full"><div>Description</div><textarea className="p-2 rounded-md w-[60%] h-[20vh] text-black"></textarea></div>
                            <div>
                                {!imageSrc&&
                                <>
                                <label htmlFor='service-addition-div' className="flex w-[200px] h-[200px] bg-gray-500 rounded-md items-center justify-center flex-col cursor-pointer hover:scale-105 transition-all duration-300 border border-white">
                                    <div className="text-[20px]">Upload Image</div>
                                        <FontAwesomeIcon icon={faPlus} size="3x"/>
                                </label>
                                <input id='service-addition-div' type="file" accept=".png,.jpeg,.jpg" className="hidden" onChange={uploadImage}></input>
                                </>

                                }
                                {imageSrc&&
                                <>
                                <div className="flex w-[200px] h-[200px]rounded-md items-center justify-center flex-col cursor-pointer ">
                                    <img src={imageSrc}></img>
                                </div>
                                <div className="flex items-center justify-center px-2 bg-red-600 text-white cursor-pointer hover:bg-red-700 rounded-md m-1 py-2" onClick={()=>setImageSrc()}>Remove</div>
                                </>
                                }
                                <div className="flex items-center justify-center px-2 bg-green-600 text-white cursor-pointer hover:bg-green-700 rounded-md m-2 py-2">Upload</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}