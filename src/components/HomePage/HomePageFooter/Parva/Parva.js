import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ParvaInstance } from "./ParvaInstance";
import img from '../../../../media/nepalLogo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from 'react-redux'
import {showAlert} from '../../../AlertLoader'
import { setParvaWholeDetails } from "../../../../state/HomePageSlices/ParvaSlice";
export const Parva = () => {
  const [data, setData] = useState([]);
  const baseUrl=useSelector(state=>state.baseUrl).backend
  const parvaDetail=useSelector(state=>state.parvaDetail)
  const dispatch=useDispatch()
  useEffect(() => {
    try{    
      const fetchParva = async () => {
      try {
        const response = await axios.get(baseUrl+parvaDetail.url);
        dispatch(setParvaWholeDetails(response.data))
      } catch (error) {
        console.log(error);
      }
    };
    if(!parvaDetail.isFetched) fetchParva();
    }
    catch(error){
      console.log(error)
      showAlert(error,'red')
    }

  }, []);



  return (
    <div className="w-full h-full pb-[100px] flex flex-col relative">
      <h1 className="text-white z-10 text-[60px]">Parva</h1>
      <div className="flex w-full h-full items-center justify-center overflow-auto">
        <div className="w-[95%] flex flex-wrap items-center justify-center gap-7">
          {parvaDetail.details.map((festival) => (
            <ParvaInstance
              key={festival.id}
              img={festival.image}
              name={festival.name}
              detail={festival.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
