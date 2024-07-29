import React, { useEffect, useState } from 'react'
import img from '../../../../media/TempleInformation/Pashupathi/images.png'
import InstanceTemple from './InstanceTemple'
import axios from 'axios'



const Temple = () => {
const [data,setData]=useState()
useEffect(()=>{},[])
   const fetchTemple =async()=>{
     try{
        const response = await axios.get("http://192.168.1.65:800/api/temples")
        setData(response.data)
        console.log(response.data)
     }
     catch(error){
        console.error("eroorrr")
     }
   }
    return (
    <div className="w-full h-full pb-[100px] flex flex-col relative ">
    <h1 className="text-white z-40 text-[60px]">Temple</h1>
    <div className="flex w-full h-full items-center justify-center overflow-auto">
        <div className=" w-[95%] flex  flex-wrap items-center justify-center gap-7">
                <InstanceTemple img={img} name={'Manakamana'} detail={'lsdkfjsalkdf'}/>
                <InstanceTemple img={img} name={'Dashain'} detail={'lsdkfjsalkdf'}/>
                <InstanceTemple img={img} name={'Dashain'} detail={'lsdkfjsalkdf'}/>
                <InstanceTemple img={img} name={'Dashain'} detail={'lsdkfjsalkdf'}/>
        </div>
    </div>
    </div>
  )
}

export default Temple
