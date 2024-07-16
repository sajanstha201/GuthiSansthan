import { useMediaQuery } from "@mui/material"
import { useTranslation } from "react-i18next"

export const InstanceFirstSection=({bgImage,name,onLinkClick})=>{
    const isMobile=useMediaQuery('(max-width:800px)')
    const {t}=useTranslation()
    return(
        <>
            <div className={` overflow-hidden    ${isMobile ? 'about-us-img-div-mobile' : 'about-us-img-div'} `} >
                <div onClick={() => onLinkClick('about-us-'+name)} 
                className={` emerge ${isMobile?'text-[15px]':'text-[30px]'} bg-center bg-cover font-bold  absolute w-full h-1/2 z-10 top-0 flex items-center justify-center `} 
                style={{backgroundImage:`URL(${bgImage})`}}>
                        <div className="text-white z-10">{t(name)}  </div> 
                        <div class="bg-neutral-900/40 absolute h-full w-full "></div>        
                </div>
            </div>
        </>
    )
}