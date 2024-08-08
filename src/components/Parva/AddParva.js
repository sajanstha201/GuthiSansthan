import React, { useRef, useState } from 'react';
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faClose } from '@fortawesome/free-solid-svg-icons';
import { showAlert } from '../AlertLoader';

export const AddParva = ({ fetchParva }) => {
    const nameRef = useRef();
    const branchRef = useRef();
    const photoRef = useRef();
    const desRef = useRef();
    const qrRef = useRef();

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [addParvaActivate, setAddParvaActivate] = useState(false);
    const isMobile = useMediaQuery('(max-width:800px)');
    const baseUrl = useSelector(state => state.baseUrl).backend;
    const parvaPageDetail = useSelector(state => state.parvaPageDetail);

    const handleSubmit = async () => {
        const name = nameRef.current.value.trim();
        const location = branchRef.current.value.trim();
        const images = photoRef.current.files; // get the file objects
        const qrcode = qrRef.current.files[0]; // get the file object
        const description = desRef.current.value.trim();

        if (!name || !startDate || !endDate || images.length === 0 || !description || !qrcode) {
            alert("Please fill out all fields.");
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('location', location);
        formData.append("start_date", startDate);
        formData.append("end_date", endDate);

        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
        }

        formData.append('description', description);
        formData.append('qr_code', qrcode);

        try {
            const response = await fetch(baseUrl + parvaPageDetail.dynamicUrl, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result);
            showAlert("Festival added successfully!", 'green');
            fetchParva();
            setAddParvaActivate(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            {!addParvaActivate && (
                <div 
                    onClick={() => setAddParvaActivate(true)}
                    className={`${isMobile ? 'h-[100px] w-[150px]' : 'h-[150px] w-[200px]'} hover:scale-105 bg-gray-600 rounded-md border border-white flex flex-col text-white items-center justify-center`}
                >
                    <div>Add Parva</div>
                    <FontAwesomeIcon icon={faPlus} size='3x' />
                </div>
            )}
            {addParvaActivate && (
                <div className='flex w-full h-fit items-center justify-center relative'>
                    <div className='flex flex-col w-[90%] bg-white/50 backdrop-blur-sm rounded-lg lg:w-[50%] p-3 gap-2 mb-12'>
                        <FontAwesomeIcon icon={faClose} size={'2x'} className="cursor-pointer absolute top-2 right-2 text-red-600 z-50" onClick={() => setAddParvaActivate(false)} />
                        <h1 className='font-semibold tracking-wider my-2'>Jatra Form</h1>
                        <div className='flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
                            <label className='font-semibold text-lg'>Festival Name:</label>
                            <input type='text' ref={nameRef} className='w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900' />
                        </div>
                        <div className='flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
                            <label className='font-semibold text-lg'>Branch location:</label>
                            <input type='text' ref={branchRef} className='w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900' />
                        </div>
                        <div className='flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
                            <label className='font-semibold text-lg'>starting date (BS):</label>
                            <NepaliDatePicker inputClassName="form-control" className="" value={startDate} onChange={(value) => setStartDate(value)} options={{ calenderLocale: "ne", valueLocale: "en" }} />
                        </div>
                        <div className='flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
                            <label className='font-semibold text-lg'>Ending date (BS):</label>
                            <NepaliDatePicker inputClassName="form-control" className="" value={endDate} onChange={(value) => setEndDate(value)} options={{ calenderLocale: "ne", valueLocale: "en" }} />
                        </div>
                        <div className='flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
                            <label className='font-semibold text-lg'>Upload Images:</label>
                            <input type='file' ref={photoRef} className='w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900' multiple />
                        </div>
                        <div className='flex flex-wrap flex-col py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
                            <label className='font-semibold text-lg'>Description:</label>
                            <textarea ref={desRef} className='w-full lg:w-2/3 rounded-md h-44 px-2 py-3 border border-cyan-400' />
                        </div>
                        <div className='flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
                            <label className='font-semibold text-lg'>Upload QR Code:</label>
                            <input type='file' ref={qrRef} className='w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900' />
                        </div>
                        <div className='w-full flex justify-end px-5 gap-2'>
                            <button className='bg-red-600 px-4 py-1 rounded-md text-white font-semibold text-lg' onClick={() => setAddParvaActivate(false)}>Remove</button>
                            <button className='bg-green-600 px-4 py-1 rounded-md text-white font-semibold text-lg' onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
