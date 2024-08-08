import { useMediaQuery } from "@mui/material";
import {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose} from "@fortawesome/free-solid-svg-icons"
export const ParvaDetailDescription=({startDate,endDate,img,detail,qr,name})=>{
    const [isDonation,setIsDonation]=useState(false)
    const isMobile = useMediaQuery('(max-width:800px)');
    return(
        <>
            <div className="w-full py-2 bg-slate-600/40 flex flex-col items-center">
                <h1 className={`${isMobile ? 'text-[30px]' : 'text-[50px]'} text-white font-bold`}>{name}</h1>
                <p className="text-white font-semibold">{startDate} <span className="text-blue-600 text-xl mx-1 font-bold">To</span> {endDate}</p>
            </div>
            <div className="flex flex-wrap mt-2 w-full">
                <div className="w-full lg:w-1/3 flex items-center flex-col">
                    <div><img src={img} className="w-full"></img></div>
                </div>
                <div className="w-full mt-2 lg:w-2/3 flex flex-col px-2">
                    <p className="text-preety text-neutral-200 font-medium">{detail}</p>
                </div>
            </div>
            <button onClick={() => setIsDonation(true)} className={`fixed bottom-2 right-2 py-2 no-underline px-5 text-lg bg-red-600 text-white flex items-center justify-center mx-2 rounded-full hover:bg-red-700 cursor-pointer shadow-sm font-bold`}>
                Donate
            </button>
            {isDonation && (
                <div className="w-[95%] h-[95%] z-50 flex justify-center items-center bg-black/20 backdrop-blur-xl absolute">
                    <img src={qr} />
                    <FontAwesomeIcon icon={faClose} size={'2x'} className="absolute top-0 right-1 text-red-600" onClick={() => setIsDonation(false)} />
                </div>
            )}
        </>
    )
}