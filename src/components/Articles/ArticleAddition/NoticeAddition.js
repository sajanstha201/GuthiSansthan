import { useState } from "react"
import { TemplateMain } from "./Template/TemplateMain"
export const NoticeAddition=()=>{
    const [data,setData]=useState({})
    const [title,setTitle]=useState()
    return(
        <>
        <div className="w-full flex items-center justify-center">
            <h1>Title: </h1>
            <input type="text" 
                onChange={(e)=>{setTitle(e.target.value)}}
                className="flex border border-black h-[40px] p-2 rounded-md w-[400px]"></input>
        </div>
        <TemplateMain name={'notice'} data={data} setData={setData}/>
        </>
    )
}