import React from 'react';
import { MdAddCall } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";import { MdOutlineMail } from "react-icons/md";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';
import {showAlert} from '../components/AlertLoader/index'
import axios from 'axios';
export const ContactUs = () => {
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
<div className="bg-100 flex flex-col items-center justify-center verflow-hidden ">
<h1 className="text-3xl font-bold tracking-wide m-16">Contact Us</h1>
    <div className="bg-white flex  lg:flex-row  sm:flex-col rounded-lg justify-center align-center gap-10">
            <div id="map" className=' '>
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
         <div className='flex h-full items-start justify-center flex-col lg:mt-24 sm:mt-6 m-16'>
              <div className=' text-sm flex px-5 gap-4'>
                  <IoLocationSharp className='h-6 w-6'/>
                <p className='hover:underline'>Head Office, M8JH+M52 Lalitpur, Nepal</p>
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
    </div>
</div>
);
};

