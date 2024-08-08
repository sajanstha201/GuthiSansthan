import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { showAlert } from "../../../AlertLoader";
import { activate_loader } from "../../../AlertLoader/LoaderBox";
import {useState }from 'react'
import { useMediaQuery } from "@mui/material";
import {useSelector} from 'react-redux'
export const EditTemple=({name,detail,location,templeDetail,templeId,fetchAllTemple,img,qr})=>{
    
    const [editName, setEditName] = useState(name);
    const [editLocation, setEditLocation] = useState(location);

    const [editDetail, setEditDetail] = useState(detail);
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
    const handelImage = ()=>{
        
    }
    return(
        <>
            <div className="w-full  py-2 bg-white/40 flex flex-col items-center px-10">
                <h1 className={`${isMobile ? 'text-[30px]' : 'text-[50px]'} text-black  font-bold`}>Edit Temple</h1>
                <div className='flex w-full   py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
                 <input value={name} type='text' id="temple-edit-name"  placeholder='Temple Name' className='w-full h-12 rounded-md px-3 py-2 border border-zinc-900'/>
              </div>
              <div className='flex w-full flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
                <input value={location} type='text' id="temple-edit-location" placeholder='Temple Location' className='w-full h-12 rounded-md px-3 py-2 border border-zinc-900'/>
              </div>
              <div className='flex  w-full flex-wrap flex-col py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
                <textarea value={detail} id="temple-edit-description" placeholder='Description' className='w-full   rounded-md h-44 px-2 py-3 border border-cyan-400'/>
              </div>
              <div className='flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-start'>
                <label className='font-semibold text-lg ' htmlFor="temple-edit-image">
                    <img src={img}/>
                </label>
                <input    type='file'accept='.png,.jpg,.jpeg' onChange={handelImage}  id="temple-edit-image"  className='w-full hidden lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900'/>
              </div>
              <div className='flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-start'>
                <label className='font-semibold text-lg'>Upload QR:</label>
                <input  type='file'accept='.png,.jpg,.jpeg'  id="temple-edit-qr" lassName='w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900'/>
              </div>
              <div className='w-full flex justify-end px-5 gap-3 py-2'>
              <button className='bg-green-600 px-4 py-1 rounded-md text-white font-semibold text-lg' onClick={saveEdits}>Submit</button>
              </div>
            </div>

        </>
    )
}