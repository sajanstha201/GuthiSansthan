import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { setTabDetail } from "../../../state/HomePageSlices/HomePageSlice"
import axios from "axios"
import { addLanguage, fetchImageToURL } from "../../ReuseableFunctions"
import { EditImage } from "../../EditComponents"
import { setNewTabDetail } from "../../../state/HomePageSlices/HomePageSlice"
export const OneImage=({name,activateEdit})=>{
    const {t}=useTranslation()
    const homePageDetail=useSelector(state=>state.homePageDetail)
    const dispatch=useDispatch()
    const baseUrl=useSelector(state=>state.baseUrl).backend
    useEffect(()=>{
        const fetchData=async()=>{
            dispatch(setTabDetail({name:name,detail:await fetchImageToURL(baseUrl+homePageDetail['details'][name].image)}))
            addLanguage({key:name,lngs:homePageDetail.details[name].text})
        }
        if(!homePageDetail[name].isFetched&&homePageDetail.isFetched) fetchData();
    })
    return(
        <>
        {activateEdit&&
                <EditImage 
                isActualUploadedSame={homePageDetail[name].imgSrc===homePageDetail[name].actualImgSrc} 
                setNewImage={setNewTabDetail} 
                imageId={homePageDetail[name].id}
                url={homePageDetail.url}
                name={name}
            >
                <div className=" flex justify-center items-center bg-cover relative bg-center h-12 lg:h-24 rounded-lg overflow-hidden aspect-video" style={{backgroundImage:`url(${homePageDetail[name].imgSrc})`}}>
                    <div className="bg-zinc-800/40 absolute top-0  h-full w-full"></div>
                    <h1 className="text-base font-medium z-10 lg:text-xl tracking-tighter leading-none">{t(name)}</h1>
                </div>
            </EditImage>
        }
        {!activateEdit&&
                        <div className=" flex justify-center items-center bg-cover relative bg-center h-12 lg:h-24 rounded-lg overflow-hidden aspect-video" style={{backgroundImage:`url(${homePageDetail[name].imgSrc})`}}>
                        <div className="bg-zinc-800/40 absolute top-0  h-full w-full"></div>
                        <h1 className="text-base font-medium z-10 lg:text-xl tracking-tighter leading-none">{t(name)}</h1>
                    </div>
        }


        </>
    )
}