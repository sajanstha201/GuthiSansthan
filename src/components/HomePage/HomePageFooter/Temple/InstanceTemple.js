import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setImageUrl, setQRUrl } from "../../../../state/HomePageSlices/TempleSlice";
import { fetchImageToURL } from '../../../ReuseableFunctions';
import { useEditing } from "../../../../context/EditingProvider";
import axios from "axios";
import { showConfirmBox } from "../../../AlertLoader/ConfirmBox";
import { showAlert } from "../../../AlertLoader";
import { activate_loader } from "../../../AlertLoader/LoaderBox";

const InstanceTemple = ({ index, templeId, name, fetchAllTemple, detail, img, location, qr }) => {
    const [isHidden, setIsHidden] = useState(true);
    const [isDonation, setIsDonation] = useState(false);
    const [isEditingTemple, setIsEditingTemple] = useState(false);
    const [editName, setEditName] = useState(name);
    const [editLocation, setEditLocation] = useState(location);
    const [editDetail, setEditDetail] = useState(detail);
    const isMobile = useMediaQuery('(max-width:800px)');
    const templeDetail = useSelector(state => state.templeDetail);
    const { isEditing, setIsEditing } = useEditing();
    const baseUrl = useSelector(state => state.baseUrl).backend;
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchImage = async () => {
            dispatch(setImageUrl({ index: index, image: await fetchImageToURL(img) }));
        };
        const fetchQR = async () => {
            dispatch(setQRUrl({ index: index, qr: await fetchImageToURL(qr) }));
        };
        if (!templeDetail.dynamicDetails[index]?.isImageFetched) fetchImage();
        if (!templeDetail.dynamicDetails[index]?.isQRFetched) fetchQR();
    }, [name, templeId]);

    const removeTemple = () => {
        try {
            const deleteData = async () => {
                try {
                    const confirmDelete = await showConfirmBox('Do you want to delete ' + name);
                    if (confirmDelete) {
                        activate_loader(true);
                        const response = await axios.delete(baseUrl + templeDetail.dynamicUrl + templeId);
                        fetchAllTemple();
                        showAlert('Deleted ' + name, 'red');
                    }
                } catch (error) {
                    console.log(error);
                    showAlert(error, 'red');
                } finally {
                    activate_loader(false);
                }
            };
            deleteData();
        } catch (error) {
            console.log(error);
            showAlert(error, 'red');
        }
    };

    const saveEdits = async () => {
        try {
            activate_loader(true);
            const response = await axios.patch(baseUrl + templeDetail.dynamicUrl + templeId, {
                name: editName,
                location: editLocation,
                detail: editDetail
            });
            fetchAllTemple();
            showAlert('Edited ' + editName, 'green');
            setIsEditingTemple(false);
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
                <div className="relative h-full w-full flex items-center justify-center bg-cover bg-center overflow-hidden rounded-md" style={{ backgroundImage: `url(${templeDetail.dynamicDetails[index].image})` }}>
                    {isEditing && (
                        <div className="absolute top-0 left-0 bg-red-600 cursor-pointer rounded-md px-2 py-1 text-white hover:bg-red-700 z-30" onClick={removeTemple}>Remove</div>
                    )}
                  
                    <div className={`${isMobile ? 'text-[15px]' : 'text-[25px]'} absolute h-full w-full items-center justify-center flex text-white font-bold z-10`} onClick={() => setIsHidden(false)}>
                        {name}
                    </div>
                    <div className="absolute bg-gray-900/50 h-full w-full"></div>
                </div>
            </div>
            {<motion.div className={`${isHidden ? 'h-0 w-0' : 'h-[87%] w-[98%] md:w-[95%] lg:w-[90%]'} absolute top-20 rounded-xl bg-neutral-900/100 flex flex-col items-center justify-start z-40 backdrop-blur-lg overflow-auto transition-all duration-200 ease-out`}>
                <FontAwesomeIcon icon={faClose} size={'2x'} className="absolute top-0 right-1 text-red-600" onClick={() => setIsHidden(true)} />
                {isEditing && (
                        <div className="absolute top-0 left-0 bg-blue-600 cursor-pointer rounded-md px-4 py-1 text-white hover:bg-blue-700 z-30" onClick={() => setIsEditingTemple(true)}>Edit</div>
                    )}
                {isEditingTemple ? (
                    <div className="w-full py-2 bg-slate-300/40 flex flex-col items-center">
                        <h1 className={`${isMobile ? 'text-[30px]' : 'text-[50px]'} text-black font-bold`}>Edit Temple</h1>
                        <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} className="w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900 my-2" placeholder="Name" />
                        <input type="text" value={editLocation} onChange={(e) => setEditLocation(e.target.value)} className="w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900 my-2" placeholder="Location" />
                        <textarea value={editDetail} onChange={(e) => setEditDetail(e.target.value)} className="w-full lg:w-2/3 rounded-md h-44 px-2 py-3 border border-cyan-400 my-2" placeholder="Detail" />
                        <div className="w-full flex justify-end px-5 gap-2">
                            <button className="bg-red-600 px-4 py-1 rounded-md text-white font-semibold text-lg" onClick={() => setIsEditingTemple(false)}>Cancel</button>
                            <button className="bg-green-600 px-4 py-1 rounded-md text-white font-semibold text-lg" onClick={saveEdits}>Save</button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="w-full py-2 bg-slate-300/40 flex flex-col items-center">
                            <h1 className={`${isMobile ? 'text-[30px]' : 'text-[50px]'} text-black font-bold`}>{name}</h1>
                            <h3>{location}</h3>
                        </div>
                        <div className="flex flex-wrap w-full">
                            <div className="w-full lg:w-1/3 flex items-center p-2 flex-col h-[30vh]">
                                <img src={img} className="max-h-full max-w-full" />
                            </div>
                            <div className="w-full mt-2 lg:w-2/3 flex flex-col items-center px-2">
                                <p className="text-preety text-neutral-200 font-medium">{detail}</p>
                            </div>
                        </div>
                    </>
                )}
                <button onClick={() => setIsDonation(true)} className={`fixed bottom-2 right-2 py-2 no-underline px-5 text-lg bg-red-600 text-white flex items-center justify-center mx-2 rounded-full hover:bg-red-700 cursor-pointer shadow-sm font-bold`}>
                    Donate
                </button>
                {isDonation && (
                    <div className="w-[95%] h-[95%] z-50 flex justify-center items-center bg-black/20 backdrop-blur-xl absolute">
                        <img src={templeDetail.dynamicDetails[index]['qr_code']} />
                        <FontAwesomeIcon icon={faClose} size={'2x'} className="absolute top-0 right-1 text-red-600" onClick={() => setIsDonation(false)} />
                    </div>
                )}
            </motion.div>}
        </>
    );
};

export default InstanceTemple;
