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
import {NepaliDatePicker} from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

export const ParvaInstance = ({ parvaId, fetchAllParva, name, detail, img, qr, startDate, endDate }) => {
    const [isHidden, setIsHidden] = useState(true);
    const [isDonation, setIsDonation] = useState(false);
    const [isEditingParva, setIsEditingParva] = useState(false);
    const [editName, setEditName] = useState(name);
    const [editDetail, setEditDetail] = useState(detail);
    const [editStartDate, setEditStartDate] = useState(startDate);
    const [editEndDate, setEditEndDate] = useState(endDate);
    const isMobile = useMediaQuery('(max-width:800px)');
    const { isEditing } = useEditing();
    const baseUrl = useSelector(state => state.baseUrl).backend;
    const parvaPageDetail = useSelector(state => state.parvaPageDetail);

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

    const saveEdits = async () => {
        try {
            activate_loader(true);
            await axios.patch(baseUrl + parvaPageDetail.dynamicUrl + parvaId, {
                name: editName,
                detail: editDetail,
                startDate: editStartDate,
                endDate: editEndDate,
            });
            fetchAllParva();
            showAlert('Edited ' + editName, 'green');
            setIsEditingParva(false);
        } catch (error) {
            console.log(error);
            showAlert(error, 'red');
        } finally {
            activate_loader(false);
        }
    };

    return (
        <>
            <div className={`${isMobile ? 'h-[100px] w-[150px]' : 'h-[150px] w-[200px]'} rounded-md`}>
                <div className={`${isEditing ? 'rounded-t-md' : 'rounded-md'} overflow-hidden relative h-full w-full flex items-center justify-center bg-cover bg-center bg-red-500`} 
                     style={{ backgroundImage: `url(${img})` }}>
                    {isEditing && (
                        <>
                            <div className="absolute top-0 left-0 bg-red-600 cursor-pointer rounded-b-md px-2 py-1 text-white hover:bg-red-700 z-30" onClick={removeParva}>Remove</div>
                            <div className="absolute top-0 right-0 bg-blue-600 cursor-pointer rounded-md px-2 py-1 text-white hover:bg-blue-700 z-30" onClick={() => setIsEditingParva(true)}>Edit</div>
                        </>
                    )}
                    <div className={`${isMobile ? 'text-[15px]' : 'text-[30px]'} absolute h-full w-full items-center justify-center flex text-white font-bold z-10`} onClick={() => setIsHidden(false)}>
                        {name}
                    </div>
                    <div className="absolute bg-gray-900/50 h-full w-full"></div>
                </div>
            </div>
            {isEditingParva &&
                    <div className="w-full py-2 bg-slate-600/40 flex flex-col items-center">
                        <h1 className={`${isMobile ? 'text-[30px]' : 'text-[50px]'} text-white font-bold`}>Edit Parva</h1>
                        <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} className="w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900 my-2" placeholder="Name" />
                        <textarea value={editDetail} onChange={(e) => setEditDetail(e.target.value)} className="w-full lg:w-2/3 rounded-md h-44 px-2 py-3 border border-cyan-400 my-2" placeholder="Detail" />
                        <NepaliDatePicker 
                            inputClassName="form-control"
                            className="w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900 my-2" 
                            value={editStartDate} 
                            onChange={(value) => setEditStartDate(value)} 
                            options={{ calenderLocale: "ne", valueLocale: "en" }}
                        />
                        <NepaliDatePicker 
                            inputClassName="form-control"
                            className="w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900 my-2" 
                            value={editEndDate} 
                            onChange={(value) => setEditEndDate(value)} 
                            options={{ calenderLocale: "ne", valueLocale: "en" }}
                        />
                        <div className="w-full flex justify-end px-5 gap-2">
                            <button className="bg-red-600 px-4 py-1 rounded-md text-white font-semibold text-lg" onClick={() => setIsEditingParva(false)}>Cancel</button>
                            <button className="bg-green-600 px-4 py-1 rounded-md text-white font-semibold text-lg" onClick={saveEdits}>Save</button>
                        </div>
                    </div>
}
            {<motion.div className={`${isHidden ? 'h-0 w-0' : 'h-[90%] w-[90%]'} absolute top-20 rounded-xl bg-neutral-800 flex flex-col items-center justify-start z-50 backdrop-blur-3xl overflow-auto transition-all duration-200 ease-out`}>
                <FontAwesomeIcon icon={faClose} size={'2x'} className="absolute top-0 right-1 text-red-600" onClick={() => setIsHidden(true)} />
    
                
                    <>
                        <div className="w-full py-2 bg-slate-600/40 flex flex-col items-center">
                            <h1 className={`${isMobile ? 'text-[30px]' : 'text-[50px]'} text-white font-bold`}>{name}</h1>
                            <p className="text-white font-semibold">{startDate} <span className="text-blue-600 text-xl mx-1 font-bold">To</span> {endDate}</p>
                        </div>
                        <div className="flex flex-wrap mt-2 w-full">
                            <div className="w-full lg:w-1/3 flex items-center flex-col">
                                <div><img src={img} className="w-full"></img></div>
                            </div>
                            <div className="w-full mt-2 lg:w-2/3 flex flex-col px-2">
                                <p className="text-preety text-neutral-200 font-medium">{detail}</p>
                            </div>
                        </div>
                    </>
                
                <button onClick={() => setIsDonation(true)} className={`fixed bottom-2 right-2 py-2 no-underline px-5 text-lg bg-red-600 text-white flex items-center justify-center mx-2 rounded-full hover:bg-red-700 cursor-pointer shadow-sm font-bold`}>
                    Donate
                </button>
                {isDonation && (
                    <div className="w-[95%] h-[95%] z-50 flex justify-center items-center bg-black/20 backdrop-blur-xl absolute">
                        <img src={qr} />
                        <FontAwesomeIcon icon={faClose} size={'2x'} className="absolute top-0 right-1 text-red-600" onClick={() => setIsDonation(false)} />
                    </div>
                )}
            </motion.div>}
        </>
    );
};
