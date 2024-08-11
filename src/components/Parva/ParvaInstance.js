import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEditing } from "../../context/EditingProvider";
import { showConfirmBox } from '../AlertLoader/ConfirmBox';
import { showAlert } from "../AlertLoader";
import { activate_loader } from "../AlertLoader/LoaderBox";
import axios from "axios";
import { useSelector } from "react-redux";

import "nepali-datepicker-reactjs/dist/index.css";
import { ParvaDetailDescription } from "./ParvaDetailDescription";
import { EditParva } from "./EditParva";

export const ParvaInstance = ({ parvaId, fetchAllParva, name, detail, img, qr, startDate, endDate,loc }) => {
    const [isHidden, setIsHidden] = useState(true);
    const isMobile = useMediaQuery('(max-width:800px)');
    const { isEditing } = useEditing();
    const baseUrl = useSelector(state => state.baseUrl).backend;
    const parvaPageDetail = useSelector(state => state.parvaPageDetail);
    const [isParvaEditingActivate,setIsParvaEditingActivate]=useState(false)
    const acitvateEditing=()=>{
        setIsParvaEditingActivate(true)
        setIsHidden(false)
    }
    const hideContent=()=>{
        setIsHidden(true)
    }
    const handleContent=()=>{
        setIsHidden(false)
        setIsParvaEditingActivate(false)
    }
    const removeParva = async () => {
        if (await showConfirmBox('Do you want to delete', name)) {
            try {
                activate_loader(true);
                await axios.delete(baseUrl + parvaPageDetail.dynamicUrl + parvaId);
                fetchAllParva();
            } catch (error) {
                console.log(error);
                showAlert(error, 'red');
            } finally {
                activate_loader(false);
            }
        }
    };
    return (
        <>
            <div className={`${isMobile ? 'h-[100px] w-[150px]' : 'h-[150px] w-[200px]'} rounded-md`}>
                <div className={`${isEditing ? '' : ''} rounded-md overflow-hidden relative h-full w-full flex items-center justify-center bg-cover bg-center bg-red-500`} 
                     style={{ backgroundImage: `url(${img})` }}>
                    {isEditing && (
                        <>
                            <div className="absolute top-0 left-0 bg-red-600 cursor-pointer rounded-b-md px-2 py-1 text-white hover:bg-red-700 z-30" onClick={removeParva}>Remove</div>
                            <div className="absolute top-0 right-0 bg-blue-600 cursor-pointer rounded-md px-2 py-1 text-white hover:bg-blue-700 z-30" onClick={acitvateEditing}>Edit</div>
                        </>
                    )}
                    <div className={`${isMobile ? 'text-[15px]' : 'text-[30px]'} absolute h-full w-full items-center justify-center flex text-white font-bold z-10`} 
                    onClick={handleContent}>
                        {name}
                    </div>
                    <div className="absolute bg-gray-900/50 h-full w-full"></div>
                </div>
            </div>
            {<motion.div className={`${isHidden ? 'h-0 w-0' : 'h-[60vh] w-[90%]'} absolute top-20 rounded-xl bg-neutral-800 flex flex-col items-center justify-start z-50 backdrop-blur-3xl overflow-auto transition-all duration-200 ease-out`}>
                <FontAwesomeIcon icon={faClose} size={'2x'} className="absolute top-0 right-1 text-red-600" onClick={hideContent} />
                    {!isParvaEditingActivate&&<ParvaDetailDescription qr={qr} name={name} loc={loc} startDate={startDate} endDate={endDate} detail={detail} img={img}/>}
                    {isParvaEditingActivate&&<EditParva qr={qr} name={name} startDate={startDate} endDate={endDate} detail={detail} img={img} fetchAllParva={fetchAllParva}/>}
            </motion.div>}
        </>
    );
};
