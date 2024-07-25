import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"

export const OneImage=({img,name})=>{
    const {t}=useTranslation()
    const homePageDetail=useSelector(state=>state.homePageDetail)
    const dispact=useDispatch()
    useEffect(()=>{
        if(!homePageDetail[name+'-img'].isFetched&&homePageDetail.isFetched){
            // dispact(setImage())
        }
    })
    return(
        <>
        <div className="flex justify-center items-center bg-cover relative bg-center h-12 lg:h-24 rounded-lg overflow-hidden aspect-video" style={{backgroundImage:`url(${img})`}}>
            <div className="bg-zinc-800/40 absolute top-0  h-full w-full"></div>
            <h1 className="text-base font-medium z-10 lg:text-xl tracking-tighter leading-none">{t(name)}</h1>
        </div>
        </>
    )
}