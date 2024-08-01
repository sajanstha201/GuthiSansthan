import { useState } from "react"
import { TemplateMain } from "./Template/TemplateMain"
import { ArticlePreviewMain } from "../ArticlePreview/ArticlePreviewMain"
import { showAlert } from "../../AlertLoader"
import axios from "axios"
import {useSelector} from 'react-redux'
export const ArticleAddition=()=>{
    const [data,setData]=useState({})
    const [tag,setTag]=useState('')
    const [title,setTitle]=useState('')
    const [isPreview,setIsPreview]=useState(false)
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const articlePageDetail=useSelector(state=>state.articlePageDetail)
    const publishArticle=async()=>{
        try{
            console.log(data)
            const articleData=[]
            const articleList=[]
            Object.keys(data).map((key)=>{
                articleList.push(data[key])
            })  
            articleList.map((value,index)=>{
                const data=value
                data['order']=index
                articleData.push(data)
            })
            const postingData={title:title,detail:articleData,tags:[tag],'created_by':1}
            console.log(postingData)
            const response=await axios.post(baseUrl+articlePageDetail.dynamicUrl,postingData)
            console.log('respose',response.data)
            // console.log(response.data)
        }
        catch(error){
            showAlert(error,'red');
            console.log(error)
        }
    }
    return(
        <>
        {!isPreview&&
        <>
        <div className="w-full flex flex-row items-center justify-center gap-2">
            <div className="flex items-center justify-center">
            <h1>Title: </h1>
            <input type="text" 
                onChange={(e)=>{setTitle(e.target.value)}}
                className="flex border border-black h-[40px] p-2 rounded-md w-[300px]"
                value={title}
                ></input>
            </div>
            <div className="flex items-center justify-center">
            <h3>Tag: </h3>
            <input type="text" 
            className="flex border border-black h-[40px] p-2 rounded-md "
            onChange={(e)=>{setTag(e.target.value)}}
            ></input>
            </div>
            
        </div>
        <TemplateMain name={'article'} data={data} setData={setData}/>
        <div className="w-full flex flex-items-center justify-center m-2 gap-2">
            <div className="bg-blue-700 hover:bg-blue-800 hover:scale-105 transition-all cursor-pointer flex border  rounded-md px-5 py-4 h-[30px] w-fit items-center justify-center text-white" 
                onClick={()=>setIsPreview(true)}>Preview</div>
            <div className="bg-green-700 hover:bg-green-800 hover:scale-105 transition-all cursor-pointer flex border  rounded-md px-5 py-4 h-[30px] w-fit items-center justify-center text-white" onClick={publishArticle}>Submit</div>
        </div>
        </>
        }

        {isPreview&&<div className="flex flex-col items-center justify-center w-full">
        <div className="bg-gray-700 hover:bg-gray-800 hover:scale-105 transition-all cursor-pointer flex border  rounded-md px-5 py-4 h-[30px] w-fit items-center justify-center text-white"
            onClick={()=>setIsPreview(false)}>
            Edit</div>
            <ArticlePreviewMain data={data} title={title}/>
        </div>
        }
        </>
    )
}