import { Articles } from "./ArticleSection/Articles"
import { Notices } from "./NoticeSection/Notices"
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import {useDispatch, useSelector} from 'react-redux'
import axios from "axios"
import { setArticlePageWholeDetail, setBgImg, setNewBgImg } from "../../state/ArticlePageSlice";
import {addLanguage, fetchImageToURL} from '../ReuseableFunctions'
import { EditBgImage } from "../EditComponents/EditBgImage";
import { showAlert } from "../AlertLoader";
import { useEditing } from "../../context/EditingProvider";
import { Link } from "react-router-dom";
export const ArticleMainSection=()=>{
    const isMobile = useMediaQuery('(max-width:800px)');  
    const [isArticle,setArtical]=useState(true)
    const articlePageDetail=useSelector(state=>state.articlePageDetail)
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const dispatch=useDispatch()
    const {isEditing,setIsEditing}=useEditing()
    useEffect(()=>{
        try{
            const fetchData=async()=>{
                try{
                    const response=await axios.get(baseUrl+articlePageDetail.url)
                    dispatch(setArticlePageWholeDetail(response.data.components))
                    dispatch(setBgImg(await fetchImageToURL(baseUrl+response.data.components['bg-img'].image)))
                    addLanguage({key:'article-page-heading',lngs:response.data.components['bg-img'].text})
                }
                catch(error){
                    console.log(error)
                    showAlert(error,'red')
                }

            }
            if(!articlePageDetail.isFetched) fetchData()
        }
        catch(error){
            console.log(error)
            showAlert(error,'red')
        }

    })

    return(
        <>
        <div className={`${isEditing?'flex flex-row gap-3 px-2 ':''}`} >
            <EditBgImage imageId={articlePageDetail['bg-img'].id} url={articlePageDetail.url} setNewImage={setNewBgImg} isActualUploadedSame={articlePageDetail['bg-img'].imgSrc===articlePageDetail['bg-img'].actualImgSrc}>
                <div className="bg-cover bg-center h-screen w-full fixed -z-50 top-0 left-0"style={{backgroundImage:`url(${articlePageDetail['bg-img'].imgSrc})`}}></div>
            </EditBgImage>
            {isEditing&&
                <>
                <Link to="/super-user/add-articles" className="px-3 py-2 no-underline text-white rounded-md cursor-pointer bg-green-600 hover:bg-green-700">
                    Add Article
                </Link>
                <Link to="/super-user/add-notices" className="px-3 py-2  no-underline text-white rounded-md cursor-pointer bg-green-600 hover:bg-green-700">
                    Add Notice
                </Link>
            </>}
        </div>
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
            <div className="flex items-center  justify-center w-full " >
                <div className="flex flex-wrap w-[95%] ">
                    <div className="w-full lg:w-[60%] ">
                        <Articles/>
                    </div>
                    <div className="w-full lg:w-[40%] ">
                        <Notices/>
                    </div>
                </div>

                
            </div>
            }
        </>

    )
}