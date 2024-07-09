import { useMediaQuery } from "@mui/material"
import { useTranslation } from "react-i18next"
import { NepalFlagSlider } from "./NepalFlagSlider"
import homebg from '../../media/Maskgroup.png'

export const HomePage=()=>{
    const {t}=useTranslation()
    const isMobile=useMediaQuery('(max-width:800px)')
    return(
        <>
        <div className="relative"style={{ backgroundImage: `url(${homebg})`,
            width: '100%',
            height: '100%',        
            backgroundSize: 'cover',
            backgroundPosition: 'center' }}>
            <div className=" absolute inset-0 h-full w-full  bg-black opacity-20"></div>
            <div className="h-[90vh] flex flex-col items-center justify-center" >
                <NepalFlagSlider/>
                <div className="flex w-full items-start relative">
                <div className=" text-white font-bold bg-blue-800 p-3 px-5 rounded-full absolute left-[10%] my-10 cursor-pointer hover:bg-blue-900">Sign In</div>
                </div>
                
            </div>
        </div>
        
        </>
        // <div className="w-full h-full flex flex-row" >
        //     <div className="w-[50%] h-full flex flex-col px-[5%] py-[10%]">
        //         <div className="text-[60px] h-[50%] flex items-center">
        //         {t('welcome-to-guthi-sansthan')}
        //         </div>
        //         <div className={`${isMobile?'flex-col ':'flex-row '} h-[50%] flex w-full justify-center gap-7 mt-5`}>
        //                 <button className="bg-gray-50 hover:bg-gray-300 p-3 px-5 rounded-full flex items-center justify-center text-xl font-bold">{t('sign-in')}</button>
        //                 <button className="bg-gray-50 hover:bg-gray-300 p-3 px-5 rounded-full flex items-center justify-center text-xl font-bold">{t('our-service')}</button>
        //         </div>
        //     </div>
        //     <div className="w-[50%]">
        //         alsfkjl
        //     </div>   
        // </div>
    )
}