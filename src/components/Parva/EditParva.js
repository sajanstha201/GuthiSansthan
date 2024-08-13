import { useState } from 'react';
import { activate_loader } from '../AlertLoader/LoaderBox';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { showAlert } from '../AlertLoader';
import { useMediaQuery } from "@mui/material";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

export const EditParva = ({ detail, startDate, endDate, name, qrCode,img, parvaId, parvaPageDetail, fetchAllParva }) => {
  const baseUrl = useSelector(state => state.baseUrl).backend;
  const isMobile = useMediaQuery('(max-width:800px)');
  const [editName, setEditName] = useState(name);
  const [editDetail, setEditDetail] = useState(detail);
  const [editStartDate, setEditStartDate] = useState(startDate);
  const [editEndDate, setEditEndDate] = useState(endDate);
  const [parva, setParva] = useState(img);
  const [file, setFile] = useState(null);
  const [qrCodeFile, setQrCodeFile] = useState(qrCode);

  const handleImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setParva(e.target.result);
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  const handleQrCode = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setQrCodeFile(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveEdits = async () => {
    try {
      activate_loader(true);
      const formData = new FormData();
      formData.append('name', editName);
      formData.append('description', editDetail);
      formData.append('start_date', editStartDate);
      formData.append('end_date', editEndDate);
      if (file) formData.append('image', file);
      if (qrCodeFile) formData.append('qr_code', qrCodeFile);

      await axios.patch(baseUrl + parvaPageDetail.dynamicUrl + parvaId, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      fetchAllParva();
      showAlert('Edited ' + editName, 'green');
    } catch (error) {
      console.log(error);
      showAlert(error.message || 'Failed to update parva', 'red');
    } finally {
      activate_loader(false);
    }
  };

  return (
    <>
      <div className="w-full py-2 bg-zinc-800 flex flex-col gap-3 items-center">
        <h1 className={`${isMobile ? 'text-[30px]' : 'text-[50px]'} text-white font-bold`}>Edit Parva</h1>
        <div className='flex items-center'>
          <label className='text-white'>Name: </label>
          <input 
            type="text" 
            value={editName} 
            onChange={(e) => setEditName(e.target.value)} 
            className="w-full lg:w-2/3 h-10 rounded-md px-3 py-2 border border-zinc-900 my-2" 
            placeholder="Name" 
          />
        </div>
        <div className='flex gap-2 w-full items-center justify-center'>
          <div className='flex gap-2 items-center text-white px-12'>
            <label>Starting Date:</label>
            <NepaliDatePicker 
              inputClassName="form-control"
              className="w-fit" 
              value={editStartDate} 
              onChange={(value) => setEditStartDate(value)} 
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
          </div>
          <div className='flex gap-2 text-white items-center w-fit'>
            <label>Ending Date:</label>
            <NepaliDatePicker 
              inputClassName="form-control"
              className="w-fit" 
              value={editEndDate} 
              onChange={(value) => setEditEndDate(value)} 
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
          </div>
        </div>
        <div className='flex flex-wrap w-full bg-black'>
          <div className='w-1/2 flex flex-col items-center my-4'>
            <label className='text-white font-semibold text-lg'>Upload Image:</label>
            <label
              htmlFor='parva-picture'
              className='border-b bg-gray-500 border-black rounded-md w-56 min-h-56 flex justify-center items-center cursor-pointer'
              style={{ backgroundImage: `url(${parva})`, backgroundSize: 'cover' }}
            >
              {!parva ? (
                <FontAwesomeIcon icon={faAdd} className='text-white text-2xl' />
              ) : (
                <img src={parva} className='w-full h-full rounded-md' alt="Parva" />
              )}
            </label>
            <input
              type='file'
              id='parva-picture'
              className='hidden'
              onChange={handleImage}
            />
          </div>
          <div className='w-1/2 flex flex-col items-center pr-4'>
            <label className='text-white font-semibold text-lg'>Description</label>
            <textarea 
              value={editDetail} 
              onChange={(e) => setEditDetail(e.target.value)} 
              className="w-full rounded-md h-fit min-h-56 px-2 py-3 border border-cyan-400 my-2" 
              placeholder="Detail" 
            />
          </div>
          <div className='w-full flex flex-col items-center my-4'>
            <label className='text-white font-semibold text-lg'>Upload QR Code:</label>
            <label
              htmlFor='qr-code'
              className='border-b bg-gray-500 border-black rounded-md w-56 min-h-56 flex justify-center items-center cursor-pointer'
              style={{ backgroundImage: `url(${qrCodeFile || qrCode})`, backgroundSize: 'cover' }}
            >
              {!qrCodeFile && !qrCode ? (
                <FontAwesomeIcon icon={faAdd} className='text-white text-2xl' />
              ) : (
                <img src={qrCodeFile || qrCode} className='w-full h-full rounded-md' alt="QR Code" />
              )}
            </label>
            <input
              type='file'
              id='qr-code'
              className='hidden'
              onChange={handleQrCode}
            />
          </div>
        </div>
        <div className="w-full flex justify-end px-5 gap-2">
          <button 
            className="bg-green-600 px-4 py-1 rounded-md text-white font-semibold text-lg" 
            onClick={saveEdits}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};
