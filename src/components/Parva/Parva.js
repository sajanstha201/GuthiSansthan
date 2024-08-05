import { useEffect, useState } from "react";

import axios from "axios";
import { ParvaInstance } from "./ParvaInstance";

import jatraimg from '../../media/Jatraform/jatra.png'
import { fetchImageToURL } from "../ReuseableFunctions";
import {useDispatch, useSelector} from 'react-redux'
import {showAlert} from '../AlertLoader'
import { setDynamicParvaPageWholeDetails,setParvaPageWholeDetails,setBgImg, setNewBgImg} from "../../state/ParvaPageSlice";
import { addLanguage } from "../ReuseableFunctions";
import { useEditing } from "../../context/EditingProvider";
import { AddParva } from "./AddParva";
import { useTranslation } from "react-i18next";
import { EditBgImage } from "../EditComponents/EditBgImage";
export const Parva = () => {
  const baseUrl=useSelector(state=>state.baseUrl).backend
  const parvaPageDetail=useSelector(state=>state.parvaPageDetail)
  const {isEditing,setIsEditing}=useEditing()
  const dispatch=useDispatch()
  const {t}=useTranslation()
  useEffect(() => {
    try{    
      if(!parvaPageDetail.isDynamicFetched) fetchDynamicParva();
      if(!parvaPageDetail.isFetched) fetchParvaContent()
    }
    catch(error){
      console.log(error)
      showAlert(error,'red')
    }
  }, []);
  const fetchParvaContent=async()=>{
    try{
      const response = await axios.get(baseUrl+parvaPageDetail.url)
      dispatch(setParvaPageWholeDetails(response.data.components))
      dispatch(setBgImg(await fetchImageToURL(baseUrl + response.data.components['parva-page'].image.substr(1))))
      addLanguage({ key: 'parva', lngs: response.data.components['parva-page'].text })
      dispatch(setParvaPageWholeDetails(response.data))
    }
    catch(error){
      console.log(error)
      showAlert(error,'red')
    }
  }
  const fetchDynamicParva = async () => {
    try {
      const response = await axios.get(baseUrl+parvaPageDetail.dynamicUrl);
      dispatch(setDynamicParvaPageWholeDetails(response.data))
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <EditBgImage 
      isActualUploadedSame={parvaPageDetail['bg-img'].imgSrc===parvaPageDetail['bg-img'].actualImgSrc} 
      setNewImage={setNewBgImg} 
      imageId={parvaPageDetail['bg-img'].id} 
      url={parvaPageDetail['bg-img'].url}>
      <div className='bg-cover bg-center fixed -z-10 w-full h-screen top-0' style={{backgroundImage:`url(${parvaPageDetail['bg-img'].imgSrc})`}} ></div>
    </EditBgImage>
    
    <div className='bg-cover bg-center bg-zinc-800/20 fixed -z-10 w-full h-screen top-0' ></div>

    <div className="w-full h-full pb-3 flex flex-col relative ">
      <h1 className="text-white z-10 text-[60px]">{t('parva')}</h1>
      <div className="flex w-full h-full justify-center overflow-auto">
        <div className="w-[95%] flex flex-wrap items-center justify-center gap-16 overflow-auto">
          {parvaPageDetail.dynamicDetails.map((festival) => (
            <ParvaInstance
            parvaId={festival.id}
            fetchAllParva={fetchDynamicParva}
            key={festival.id}
            img={festival.image}
            name={festival.name}
              detail={festival.description}
              qr={festival.qr_code}
            />
          ))}
          {isEditing&&<>
          <AddParva fetchParva={fetchDynamicParva} />
          </>}
        </div>
      </div>
    </div>
            </>
  );
};
