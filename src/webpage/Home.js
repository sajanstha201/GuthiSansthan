import { useMediaQuery } from "@mui/material"
import { useTranslation } from "react-i18next"


export const Home=()=>{
    const {t}=useTranslation()
    const isMobile=useMediaQuery('(max-width:800px)')
    return(
        <div className="w-full h-full flex flex-row" >
            <div className="w-[50%] h-full flex flex-col p-[10%]">
                <div className="text-[60px] h-[50%] flex items-center">
                {t('welcome-to-guthi-sansthan')}
                </div>
                <div className={`${isMobile?'flex-col ':'flex-row '} h-[50%] flex w-full justify-center gap-7 mt-5`}>
                        <button className="bg-gray-50 hover:bg-gray-300 p-3 px-5 rounded-full flex items-center justify-center text-xl font-bold">Sign In</button>
                        <button className="bg-gray-50 hover:bg-gray-300 p-3 px-5 rounded-full flex items-center justify-center text-xl font-bold">Our Services</button>
                </div>
            </div>
            <div className="w-[50%]">
                alsfkjl
            </div>   
        </div>
    )
}