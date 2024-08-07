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
import { TempleDescription } from "./TempleDescription";
import { EditTemple } from "./EditTemple";

const InstanceTemple = ({ index, templeId, name, fetchAllTemple, detail, img, location, qr }) => {
    const [isHidden, setIsHidden] = useState(true);
    const [isEditingTempleActivate,setIsEditingTempleActivate]=useState(false)
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
    const activateEditing=()=>{
        setIsEditingTempleActivate(true)
        setIsHidden(false)
    }
    const closeTemple=()=>{
        setIsHidden(true)
        setIsEditingTempleActivate(false)

    }

    return (
        <>
            <div className={`${isMobile ? 'h-[100px] w-[150px]' : 'h-[150px] w-[200px]'} rounded-md`}>
                <div className="relative h-full w-full flex items-center justify-center bg-cover bg-center overflow-hidden rounded-md" style={{ backgroundImage: `url(${templeDetail.dynamicDetails[index].image})` }}>
                    {isEditing && (<>
                        <div className="absolute top-0 left-0 bg-red-600 cursor-pointer rounded-md px-2 py-1 text-white hover:bg-red-700 z-30" onClick={removeTemple}>Remove</div>
                        <div className="absolute top-0 right-0 bg-blue-600 cursor-pointer rounded-md px-4 py-1 text-white hover:bg-blue-700 z-30" onClick={activateEditing}>Edit</div>
                    </>)}
                  
                    <div className={`${isMobile ? 'text-[15px]' : 'text-[25px]'} absolute h-full w-full items-center justify-center flex text-white font-bold z-10`} onClick={() => setIsHidden(false)}>
                        {name}
                    </div>
                    <div className="absolute bg-gray-900/50 h-full w-full"></div>
                </div>
            </div>
            {<motion.div className={`${isHidden ? 'h-0 w-0' : 'h-[87%] w-[98%] md:w-[95%] lg:w-[90%]'} absolute top-20 rounded-xl bg-neutral-900/100 flex flex-col items-center justify-start z-40 backdrop-blur-lg overflow-auto transition-all duration-200 ease-out`}>
                <FontAwesomeIcon icon={faClose} size={'2x'} className="absolute top-0 right-1 text-red-600" onClick={closeTemple} />
                    {!isEditingTempleActivate&&<TempleDescription name={name} location={location} img={img} detail={detail} index={index} templeDetail={templeDetail}/>}
                    {isEditingTempleActivate&&<EditTemple name={name} location={location} index={index} templeDetail={templeDetail} templeId={templeId} fetchAllTemple={fetchAllTemple}/>}
            </motion.div>}
        </>
    );
};

export default InstanceTemple;
