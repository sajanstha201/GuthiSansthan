import { useState } from "react"
import { TemplateMain } from "./Template/TemplateMain"
import { ArticlePreviewMain } from "../ArticlePreview/ArticlePreviewMain"
export const ArticleAddition=()=>{
    const [data,setData]=useState({})
    const [date,setDate]=useState()
    const [title,setTitle]=useState()
    const [isPreview,setIsPreview]=useState(false)
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
            <h3>Date: </h3>
            <input type="date" 
            className="flex border border-black h-[40px] p-2 rounded-md "
            onChange={(e)=>{setDate(e.target.value)}}
            ></input>
            </div>
            
        </div>
        <TemplateMain name={'article'} data={data} setData={setData}/>
        <div className="w-full flex flex-items-center justify-center m-2 gap-2">
            <div className="bg-blue-700 hover:bg-blue-800 hover:scale-105 transition-all cursor-pointer flex border  rounded-md px-5 py-4 h-[30px] w-fit items-center justify-center text-white" 
                onClick={()=>setIsPreview(true)}>Preview</div>
            <div className="bg-green-700 hover:bg-green-800 hover:scale-105 transition-all cursor-pointer flex border  rounded-md px-5 py-4 h-[30px] w-fit items-center justify-center text-white" >Submit</div>
        </div>
        </>
        }

        {isPreview&&<div className="flex flex-col items-center justify-center w-full">
        <div className="bg-gray-700 hover:bg-gray-800 hover:scale-105 transition-all cursor-pointer flex border  rounded-md px-5 py-4 h-[30px] w-fit items-center justify-center text-white"
            onClick={()=>setIsPreview(false)}>
            Edit</div>
            <ArticlePreviewMain data={data} title={title} date={date}/>
        </div>
        }
        </>
    )
}