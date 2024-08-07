import {useState} from 'react'
import { activate_loader } from '../AlertLoader/LoaderBox';
import axios from 'axios'
import {useSelector} from 'react-redux'
import { showAlert } from '../AlertLoader';
import { useMediaQuery } from "@mui/material";
import {NepaliDatePicker} from "nepali-datepicker-reactjs";
export const EditParva=({detail,startDate,endDate,name,parvaId,parvaPageDetail,fetchAllParva})=>{
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const isMobile = useMediaQuery('(max-width:800px)');
    const [editName, setEditName] = useState(name);
    const [editDetail, setEditDetail] = useState(detail);
    const [editStartDate, setEditStartDate] = useState(startDate);
    const [editEndDate, setEditEndDate] = useState(endDate);
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
        } catch (error) {
            console.log(error);
            showAlert(error, 'red');
        } finally {
            activate_loader(false);
        }
    };
    return(
        <>
            <div className="w-full py-2 bg-slate-600/40 flex flex-col items-center">
                <h1 className={`${isMobile ? 'text-[30px]' : 'text-[50px]'} text-white font-bold`}>Edit Parva</h1>
                <label>Name: </label>
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
                    <button className="bg-green-600 px-4 py-1 rounded-md text-white font-semibold text-lg" onClick={saveEdits}>Save</button>
                </div>
            </div>
        </>
    )
}