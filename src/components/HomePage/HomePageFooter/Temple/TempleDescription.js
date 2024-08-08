import { useMediaQuery } from "@mui/material";
import {useState} from 'react'
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const TempleDescription=({name,location,img,detail,index,templeDetail})=>{
    const isMobile = useMediaQuery('(max-width:800px)');
    const [isDonation, setIsDonation] = useState(false);
    return(
        <>
            <div className="w-full py-2 bg-slate-300/40 flex flex-col items-center">
                <h1 className={`${isMobile ? 'text-[30px]' : 'text-[50px]'} text-black font-bold`}>{name}</h1>
                <h3>{location}</h3>
            </div>
            <div className="flex flex-wrap w-full">
                <div className="w-full lg:w-1/3 flex items-center p-2 flex-col h-[30vh]">
                    <img src={img} className="max-h-full max-w-full" />
                </div>
                <div className="w-full mt-2 lg:w-2/3 flex flex-col items-center px-2">
                    <p className="text-preety text-neutral-200 font-medium">{detail}</p>
                </div>
            </div>
            <button onClick={() => setIsDonation(true)} className={`fixed bottom-2 right-2 py-2 no-underline px-5 text-lg bg-red-600 text-white flex items-center justify-center mx-2 rounded-full hover:bg-red-700 cursor-pointer shadow-sm font-bold`}>
            Donate
        </button>
        {isDonation && (
            <div className="w-[95%] h-[95%] z-50 flex justify-center items-center bg-black/20 backdrop-blur-xl absolute">
                <img src={templeDetail.dynamicDetails[index]['qr_code']} />
                <FontAwesomeIcon icon={faClose} size={'2x'} className="absolute top-0 right-1 text-red-600" onClick={() => setIsDonation(false)} />
            </div>
        )}
        </>
    )
}