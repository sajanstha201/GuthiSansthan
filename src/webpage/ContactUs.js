import React, { useEffect } from 'react';
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
import {useDispatch, useSelector} from 'react-redux'
import { setBgImg, setContactUsPageWholeDetail, setExtraImage1, setExtraImage2, setNewBgImg } from '../state/ContactUsPageSlice';
import {addLanguage, fetchImageToURL} from '../components/ReuseableFunctions'
import { EditBgImage } from '../components/EditComponents/EditBgImage';
export const ContactUs = () => {
  const {t}=useTranslation()
  const isMobile=useMediaQuery('(max-width:800px)')
    const [mapLoaded, setMapLoaded] = useState(false);
    const contactUsPageDetail=useSelector(state=>state.contactUsPageDetail)
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
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const dispatch=useDispatch()
    useEffect(()=>{
      try{
        const fetchData=async()=>{
          try{
            const response=await axios.get(baseUrl+contactUsPageDetail.url)
            console.log(response.data.components)
            dispatch(setContactUsPageWholeDetail(response.data.components))
            dispatch(setExtraImage1(await fetchImageToURL(baseUrl+response.data.components['extra-image-1'].image)))
            dispatch(setExtraImage2(await fetchImageToURL(baseUrl+response.data.components['extra-image-2'].image)))
            dispatch(setBgImg(await fetchImageToURL(baseUrl+response.data.components['bg-image'].image)))
            addLanguage({key:'contact-us-heading',lngs:response.data.components['contact-us-heading'].text})
          }
          catch(error){
            console.log(error)
            showAlert(error,'red')
          }

        }
        if(!contactUsPageDetail.isFetched) fetchData()
      }
      catch(error){
        console.log(error)
        showAlert(error,'red')
      }

    })
  return (
<div className=" flex flex-col items-center justify-center verflow-hidden bg-cover bg-center " >
  <EditBgImage imageId={contactUsPageDetail['bg-img'].id} url={contactUsPageDetail.url} setNewImage={setNewBgImg} isActualUploadedSame={contactUsPageDetail['bg-img'].imgSrc===contactUsPageDetail['bg-img'].actualImgSrc}>
      <div className='w-screen h-screen fixed top-0 -z-10 bg-cover bg-center' style={{backgroundImage:`url(${contactUsPageDetail['bg-img'].imgSrc})`}}></div>
  </EditBgImage>
  <div className='w-screen h-screen fixed top-0 -z-10 bg-cover bg-center bg-black/40 ' ></div>
<h1 className="text-3xl font-bold text-white tracking-wide m-16">{t('contact-us-heading')}</h1>
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
                  <img src={contactUsPageDetail['extra-image-1'].imgSrc}/>
                  </div>
                  <div className='w-1/2'>
                  <img src={contactUsPageDetail['extra-image-2'].imgSrc}/>
                     
                  </div>
               </div>
          </div>
    </div>
</div>
);
};

