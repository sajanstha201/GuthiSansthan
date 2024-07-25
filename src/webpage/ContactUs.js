import React from 'react';
import { MdAddCall } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";import { MdOutlineMail } from "react-icons/md";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';
import {showAlert} from '../components/AlertLoader/index'
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mui/material';
import loc1 from '../media/ContactUs/lalitpur.jpeg'
import loc2 from '../media/ContactUs/patan.jpeg'
import bg from '../media/ContactUs/bg.png'

export const ContactUs = () => {
  const {t}=useTranslation()
  const isMobile=useMediaQuery('(max-width:800px)')
    const [mapLoaded, setMapLoaded] = useState(false);
    const defaultCenter = {
      lat: 27.681505372996934,
      lng: 85.32804964028425
    };
  
    const mapStyles = {
      height: '400px',
      width: '400px'
    };
    const handleLoad = () => {
      setMapLoaded(true);
      console.log('Map loaded successfully');
    };
  return (
<div className=" flex flex-col items-center justify-center verflow-hidden bg-cover bg-center " >
  <div className='w-screen h-screen fixed top-0 -z-10 bg-cover bg-center' style={{backgroundImage:`url(${bg})`}}></div>
  <div className='w-screen h-screen fixed top-0 -z-10 bg-cover bg-center bg-black/40 ' ></div>
<h1 className="text-3xl font-bold text-white tracking-wide m-16">{t('contact-us')}</h1>
    <div className={`${isMobile?'flex-col':'flex-row '} flex   rounded-lg justify-center align-center gap-10 mb-44`}>
            <div id="map" className='w-full lg:w-1/3 flex justify-center'>
            <LoadScript googleMapsApiKey="AIzaSyDR-Piy7y9bIfz9HzE_dN_TAXJbM9UtA24">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={15}
                center={defaultCenter}
                onLoad={handleLoad}
            >
                {mapLoaded && <Marker position={defaultCenter} />}
            </GoogleMap>
            </LoadScript>
            </div>  
            <div className='flex flex-col w-full lg:w-1/3 gap-2'>

                <div className='flex h-full items-start justify-center flex-col sm:mt-6  bg-white rounded-lg px-5 py-2 font-bold'>
                    <div className=' text-sm flex px-5 gap-4'>
                        <IoLocationSharp className='h-6 w-6'/>
                      <p className='hover:underline'>{t('head-office-address')}</p>
                    </div>
                    <div className=' text-sm flex px-5 gap-4'>
                    
                    <MdAddCall className='h-6 w-6'/>
                      <p className='hover:underline'>+977 9861190705</p>
                    </div>
                    <div className=' text-sm flex px-5 gap-4'>
                      <MdOutlineMail className='h-6 w-6'/>
                      <p className='hover:underline'>xyz@gmail.com</p>
                    </div>
               </div>
               <div className='flex gap-2 w-full bg-white   p-2 rounded-lg'>
                  <div className='w-1/2'>
                  <img src={loc1}/>
                  </div>
                  <div className='w-1/2'>
                  <img src={loc2}/>
                     
                  </div>
               </div>
          </div>
    </div>
</div>
);
};

