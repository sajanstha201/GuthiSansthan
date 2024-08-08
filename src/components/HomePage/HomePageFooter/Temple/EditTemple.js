import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { showAlert } from "../../../AlertLoader";
import { activate_loader } from "../../../AlertLoader/LoaderBox";
import {useState }from 'react'
import { useMediaQuery } from "@mui/material";
import {useSelector} from 'react-redux'
export const EditTemple=({name,detail,location,templeDetail,templeId,fetchAllTemple})=>{
    
    const [editName, setEditName] = useState(name);
    const [editLocation, setEditLocation] = useState(location);

    const [editDetail, setEditDetail] = useState(templeDetail);
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const isMobile = useMediaQuery('(max-width:800px)');
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
        } catch (error) {
            console.log(error);
            showAlert(error, 'red');
        } finally {
            activate_loader(false);
        }
    };
    return(
        <>
            <div className="w-full py-2 bg-slate-300/40 flex flex-col items-center">
                <h1 className={`${isMobile ? 'text-[30px]' : 'text-[50px]'} text-black font-bold`}>Edit Temple</h1>
                <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} className="w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900 my-2" placeholder="Name" />
                <input type="text" value={editLocation} onChange={(e) => setEditLocation(e.target.value)} className="w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900 my-2" placeholder="Location" />
                <textarea value={editDetail} onChange={(e) => setEditDetail(e.target.value)} className="w-full lg:w-2/3 rounded-md h-44 px-2 py-3 border border-cyan-400 my-2" placeholder="Detail" />
                <div className="w-full flex justify-end px-5 gap-2">
                    <button className="bg-green-600 px-4 py-1 rounded-md text-white font-semibold text-lg" onClick={saveEdits}>Save</button>
                </div>
            </div>

        </>
    )
}