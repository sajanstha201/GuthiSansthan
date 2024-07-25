import { Articles } from "./ArticleSection/Articles"
import { Notices } from "./NoticeSection/Notices"
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import {useDispatch, useSelector} from 'react-redux'
import axios from "axios"
import { setArticlePageWholeDetail, setBgImg } from "../../state/ArticlePageSlice";
import {addLanguage, fetchImageToURL} from '../ReuseableFunctions'
export const ArticleMainSection=()=>{
    const isMobile = useMediaQuery('(max-width:800px)');  
    const [isArticle,setArtical]=useState(true)
    const articlePageDetail=useSelector(state=>state.articlePageDetail)
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const dispatch=useDispatch()
    
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await axios.get(baseUrl+articlePageDetail.url)
            dispatch(setArticlePageWholeDetail(response.data.components))
            dispatch(setBgImg(await fetchImageToURL(baseUrl+response.data.components['bg-img'].image)))
            addLanguage({key:'article-page-heading',lngs:response.data.components['bg-img'].text})
        }
        if(!articlePageDetail.isFetched) fetchData()
    })

    return(
        <>
         <div className="bg-cover bg-center h-screen w-full fixed -z-50 top-0"style={{backgroundImage:`url(${articlePageDetail['bg-img'].imgSrc})`}}></div>
         <div className="bg-cover bg-center h-screen w-full fixed -z-10 top-0 bg-black/40"></div>
         {isMobile ? <div className="w-full">
                   <div className="w-full py-2 flex justify-start bg-gray-400/80  gap-4 pl-16">
                       <button onClick={()=>setArtical(true)} className={`font-bold border-b-2  hover:border-red-600 transition-all duration-200 ease-linear ${isArticle ? ' border-red-600 ': 'border-none'} `}>Article</button>
                       <button onClick={()=>setArtical(false)} className={`font-bold border-b-2  hover:border-red-600 transition-all duration-200 ease-linear ${!isArticle ? ' border-red-600 ': 'border-none'} `}>Notices</button>
                   </div>
                   <div className="w-full">
                        {isArticle ? <Articles/> : <Notices/>}
                   </div>
         </div>
         
         
         :
            <div className="flex flex-wrap w-full " >
                <div className="w-full lg:w-[70%] ">
                    <Articles/>
                </div>
                <div className="w-full lg:w-[30%] ">
                    <Notices/>
                </div>
                
            </div>
            }
        </>

    )
}