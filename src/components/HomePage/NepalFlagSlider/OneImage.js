import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { setTabDetail } from "../../../state/HomePageSlice"
import axios from "axios"
import { addLanguage, fetchImageToURL } from "../../ReuseableFunctions"

export const OneImage=({name})=>{
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
        <div className="flex justify-center items-center bg-cover relative bg-center h-12 lg:h-24 rounded-lg overflow-hidden aspect-video" style={{backgroundImage:`url(${homePageDetail[name].imgSrc})`}}>
            <div className="bg-zinc-800/40 absolute top-0  h-full w-full"></div>
            <h1 className="text-base font-medium z-10 lg:text-xl tracking-tighter leading-none">{t(name)}</h1>
        </div>
        </>
    )
}