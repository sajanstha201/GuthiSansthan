import React, { useEffect, useState } from 'react'
import img from '../../../../media/TempleInformation/Pashupathi/images.png'
import InstanceTemple from './InstanceTemple'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setTempleWholeDetail } from '../../../../state/HomePageSlices/TempleSlice'
import {showAlert} from '../../../AlertLoader'
import { AddTemple } from './AddTemple'
import { useEditing } from '../../../../context/EditingProvider'


const Temple = () => {
   const baseUrl=useSelector(state=>state.baseUrl).backend
   const templeDetail=useSelector(state=>state.templeDetail)
   const dispatch=useDispatch()
   const {isEditing,setIsEditing}=useEditing()
   const fetchTemple =async()=>{
      try{
         const response = await axios.get(baseUrl+templeDetail.url)
          dispatch(setTempleWholeDetail(response.data))
      }
      catch(error){
         console.error("error")
         showAlert(error,'red')
      }
    }
   useEffect(()=>{
      try{
         if(!templeDetail.isFetched) fetchTemple();
      }
      catch(error){
         console.error(error)
         showAlert(error,'red')
      }
      },[])


    return (
    <div className="w-full h-full  pb-3 flex flex-col relative ">
    <h1 className="text-white z-40 text-[60px]">Temple</h1>
    <div className="flex w-full h-full items-center justify-center overflow-auto">
        <div className=" w-[95%] flex h-full flex-wrap items-center justify-center gap-7">
              {templeDetail.details.map((festivals)=> (
                 <InstanceTemple key={festivals.id} name={festivals.name} detail={festivals.details} img={festivals.image} qr={festivals.qr_code} location={festivals.location} />
              ))}
              {isEditing&&<AddTemple fetchTemple={fetchTemple}/>}
        </div>
    </div>
    </div>
  )
}

export default Temple
