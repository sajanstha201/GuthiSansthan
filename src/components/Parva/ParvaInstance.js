import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMediaQuery } from "@mui/material"
import { motion } from "framer-motion"
import { useState } from "react"
import { useEditing } from "../../context/EditingProvider"
import {showConfirmBox} from '../AlertLoader/ConfirmBox'
import { showAlert } from "../AlertLoader"
import { activate_loader } from "../AlertLoader/LoaderBox"
import axios from "axios"
import { useSelector } from "react-redux"
export const ParvaInstance=({parvaId,fetchAllParva,name,detail,img})=>{
    const [isHidden, setIsHidden]=useState(true)
    const isMobile=useMediaQuery('(max-width:800px)')
    const {isEditing,setIsEditing}=useEditing()
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const parvaPageDetail=useSelector(state=>state.parvaPageDetail)
    const removeParva=async()=>{
        if(await showConfirmBox('Do you want to delete',name)){
            try{
                activate_loader(true)
                await axios.delete(baseUrl+parvaPageDetail.dynamicUrl+parvaId)
                fetchAllParva()
            }
            catch(error){
                console.log(error)
                showAlert(error,'red')
            }
            finally{
                activate_loader(false)
            }
        }
    }
    return(
        <>
        <div className={`${isMobile?'h-[100px] w-[150px]':'h-[150px] w-[200px]'} rounded-md  `} >
            <div className={`${isEditing?'rounded-t-md':'rounded-md'} overflow-hidden relative h-full w-full flex items-center justify-center bg-cover bg-center  bg-red-500 `} 
            style={{backgroundImage:`url(${img})`}}
            >
                {isEditing&&<div className="absolute top-0 left-0 bg-red-600 cursor-pointer rounded-b-md px-2 py-1 text-white hover:bg-red-700 z-30" onClick={removeParva}>Remove</div>}
                <div  className={`${isMobile?'text-[15px]':'text-[30px]'}  absolute h-full w-full items-center justify-center flex text-white font-bold  z-10`} onClick={()=>setIsHidden(false)}>
                {name}
                </div>
                <div className="absolute bg-gray-900/50 h-full w-full "></div>
            </div>
            
        </div>
        {<motion.div  className={`${isHidden?'h-0 w-0':'h-[80%] w-[80%]'} absolute top-20 rounded-xl bg-neutral-800/50    flex flex-col items-center justify-start z-50   backdrop-blur-3xl overflow-auto transition-all duration-200 ease-out`}>
            
            <FontAwesomeIcon icon={faClose} size={'2x'} className="absolute top-0 right-1 text-red-600" onClick={()=>setIsHidden(true)}/> 
 
                <div className="w-full py-2 bg-slate-600/40" >
                    <h1 className={`${isMobile?'text-[30px]':'text-[50px]'} text-white  font-bold`} >{name}</h1> </div>
                 <div className="flex flex-wrap mt-2  w-full">
                      <div className=" w-full lg:w-1/3 flex items-center flex-col ">
                      <div><img src={img} className="w-full"></img></div>
                </div>
                   <div className="w-full mt-2 lg:w-2/3 flex flex-col px-2">
                <p className="text-preety text-neutral-200 font-medium">{detail}</p>
                      
                   </div>
                 </div>
                
            
        </motion.div>}
        </>
    )
}