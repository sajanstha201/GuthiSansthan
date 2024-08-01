import { useEffect, useState } from "react";

import axios from "axios";
import { ParvaInstance } from "./ParvaInstance";

import jatraimg from '../../media/Jatraform/jatra.png'

import {useDispatch, useSelector} from 'react-redux'
import {showAlert} from '../AlertLoader'
import { setParvaWholeDetails } from "../../state/HomePageSlices/ParvaSlice";
import { useEditing } from "../../context/EditingProvider";
import { AddParva } from "./AddParva";
export const Parva = () => {
  const baseUrl=useSelector(state=>state.baseUrl).backend
  const parvaDetail=useSelector(state=>state.parvaDetail)
  const {isEditing,setIsEditing}=useEditing()
  const dispatch=useDispatch()
  useEffect(() => {
    try{    
      if(!parvaDetail.isFetched) fetchParva();
    }
    catch(error){
      console.log(error)
      showAlert(error,'red')
    }
  }, []);
  const fetchParva = async () => {
    try {
      const response = await axios.get(baseUrl+parvaDetail.url);
      console.log(response.data)
      dispatch(setParvaWholeDetails(response.data))
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className='bg-cover bg-center fixed -z-10 w-full h-screen top-0' style={{backgroundImage:`url(${jatraimg})`}} ></div>
    <div className='bg-cover bg-center bg-zinc-800/20 fixed -z-10 w-full h-screen top-0' ></div>

    <div className="w-full h-full pb-3 flex flex-col relative ">
      <h1 className="text-white z-10 text-[60px]">Parva</h1>
      <div className="flex w-full h-full items-center justify-center overflow-auto">
        <div className="w-[95%] flex h-full flex-wrap items-center justify-center gap-7 overflow-auto">
          {parvaDetail.details.map((festival) => (
            <ParvaInstance
            key={festival.id}
            img={festival.image}
            name={festival.name}
              detail={festival.description}
              
            />
          ))}
          {isEditing&&<>
          <AddParva fetchParva={fetchParva} />
          </>}
        </div>
      </div>
    </div>
            </>
  );
};
