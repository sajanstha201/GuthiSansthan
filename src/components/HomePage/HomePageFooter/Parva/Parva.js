import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ParvaInstance } from "./ParvaInstance";
import img from '../../../../media/nepalLogo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export const Parva = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchParva();
  }, []);

  const fetchParva = async () => {
    try {
      const response = await axios.get('http://192.168.1.65:8000/api/festivals/');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full pb-[100px] flex flex-col relative">
      <h1 className="text-white z-10 text-[60px]">Parva</h1>
      <div className="flex w-full h-full items-center justify-center overflow-auto">
        <div className="w-[95%] flex flex-wrap items-center justify-center gap-7">
          {data && data.map((festival) => (
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
