import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useEditing } from "../../../../context/EditingProvider";
import { useDispatch, useSelector } from "react-redux";
import { setDynamicImageUrl } from "../../../../state/HomePageSlices/ServiceSlice";
import {fetchImageToURL} from '../../../ReuseableFunctions'
import axios from "axios";
import {showConfirmBox} from '../../../AlertLoader/ConfirmBox'
import { showAlert } from "../../../AlertLoader";
import { activate_loader } from "../../../AlertLoader/LoaderBox";
import { ServiceDescription } from "./ServiceDescription";
import { EditService } from "./EditService";
export const ServiceInstance = ({index,serviceId,fetchAllService,id ,name, detail, img,url }) => {
    const [isHidden, setIsHidden] = useState(true);
    const isMobile = useMediaQuery('(max-width:800px)');
    const {isEditing,setIsEditing}=useEditing()
    const dispatch=useDispatch()
    const serviceDetail=useSelector(state=>state.serviceDetail)
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const [isServiceEditingActivate,setIsServiceEditingActivate]=useState(false)
    useEffect(()=>{
        const fetchImage=async()=>{
            dispatch(setDynamicImageUrl({index:index,image:img}))
        }
        if(!serviceDetail.dynamicDetails[index]?.isDynamicFetched??false) fetchImage()
    },[name])
    const removeService=async()=>{
        if(await showConfirmBox('Do you want to delete '+name)){
            try{
                activate_loader(true)
                await axios.delete(baseUrl+serviceDetail.dynamicUrl+serviceId)
                fetchAllService()
                showAlert('Successfully Deleted','green')
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
    const activateEditing=()=>{
        setIsHidden(false)
        setIsServiceEditingActivate(true)
    }   
    const showMoreInfo=()=>{
        setIsServiceEditingActivate(false)
        setIsHidden(false)
    }
    const closeService=()=>{
        setIsHidden(true)
    }
    
    return (
        <>
            <div 
                className={`${isMobile ? 'h-[100px] w-[150px]' : 'h-[150px] w-[200px]'} relative rounded-md cursor-pointer my-3`}>
                <a href={url} target="_blank" className={` rounded-t-md relative h-full w-full flex items-center justify-center bg-cover bg-center  bg-red-500 overflow-hidden cursor-pointer`}
                    style={{ backgroundImage: `url(${img})` }}>
                    <div className={`${isMobile ? 'text-[15px]' : 'text-[30px]'} absolute h-full w-full items-center justify-center flex text-white font-bold z-10 cursor-pointer`}
                   >
                        {name}
                    </div>
                    <div className="absolute bg-gray-900/50 h-full w-full"></div>
                </a>
                {isEditing&&<div className="absolute top-0 left-0 bg-red-600 cursor-pointer rounded-b-md px-2 py-1 text-white hover:bg-red-700 z-20" onClick={removeService}>Remove</div>}
                {isEditing&&<div className="absolute top-0 right-0 bg-blue-600 cursor-pointer rounded-b-md px-2 py-1 text-white hover:bg-blue-700 z-20" onClick={activateEditing}>Edit</div>}
                <div className="cursor-pointer bg-blue-600 px-2 py-1 text-white rounded-b-md hover:bg-blue-800 "  onClick={showMoreInfo}>More Info...</div>
            </div>
            <motion.div
                className={`${isHidden ? 'h-0 w-0' : 'h-[90%] w-[80%]'} absolute top-0 rounded-xl bg-neutral-800/85 flex flex-col items-center justify-start z-50 backdrop-blur-3xl overflow-auto transition-all duration-200 ease-out`}
            >
                <FontAwesomeIcon 
                    icon={faTimes} 
                    size="2x" 
                    className="absolute top-0 right-1 text-red-600 cursor-pointer" 
                    onClick={closeService} 
                />
                {!isServiceEditingActivate&&<ServiceDescription name={name} detail={detail} img={img}/>}
                {isServiceEditingActivate&&<EditService name={name} id={id} detail={detail} img={img} url={url} />}
            </motion.div>
        </>
    );
};
