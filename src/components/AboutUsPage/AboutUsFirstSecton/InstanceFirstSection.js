import { useMediaQuery } from "@mui/material"
import { useTranslation } from "react-i18next"
import {motion} from "framer-motion"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setImgTab } from "../../../state/AboutUsPageSlice"
import { addLanguage, fetchImageToURL } from "../../ReuseableFunctions"
import { showAlert } from "../../AlertLoader"


export const InstanceFirstSection=({bgImage,name,onLinkClick})=>{
    const isMobile=useMediaQuery('(max-width:800px)')
    const {t}=useTranslation()
    const aboutUsPageDetail=useSelector(state=>state.aboutUsPageDetail)
    const dispatch=useDispatch()
    const baseUrl=useSelector(state=>state.baseUrl).backend
    useEffect(()=>{
        try{
            const fetchData=async()=>{
                try{
                    dispatch(setImgTab({name:name,detail:await fetchImageToURL(baseUrl+aboutUsPageDetail.details[name].image)}))
                    addLanguage({key:name+'-about-us',lngs:aboutUsPageDetail.details[name].text})
                }
                catch(error){
                    console.log(error)
                    showAlert(error,'red')
                }
          
            }
            if(aboutUsPageDetail.isFetched && !aboutUsPageDetail[name].isFetched) fetchData()
        }
        catch(error){
            console.log(error)
            showAlert(error,'red')
        }

    })
    return(
        <>
            <motion.div initial={{ opacity:0 , y:40}} animate={{y:0,opacity:1}} transition={{duration:1.4}}>
                
            <motion.div whileHover={{scale:1.05}} transition={{duration:0.1}}    className={` overflow-hidden     ${isMobile ? 'about-us-img-div-mobile' : 'about-us-img-div'} `} >
                <div  onClick={() => onLinkClick('about-us-'+name)} 
                className={`  ${isMobile?'text-[15px]':'text-[30px]'} bg-center bg-cover font-bold  absolute w-full h-1/2 z-10 top-0 flex items-center justify-center `} 
                style={{backgroundImage:`URL(${aboutUsPageDetail[name].imgSrc})`}}>
                        <div className="text-white z-10">{t(name+'-about-us')}  </div> 
                        <div class="bg-neutral-900/40 absolute h-full w-full "></div>        
                </div>
             </motion.div>
            </motion.div>
        </>
    )
}