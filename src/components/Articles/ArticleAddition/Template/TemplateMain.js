import { useEffect, useState } from "react"
import { Template1,Template2,Template3 ,Template4} from "./Temps"
import { AddTemplate } from "./AddTemplate"
export const TemplateMain=({name})=>{
    const [data,setData]=useState({})
    useEffect(()=>{
        console.log(data)
    },[data])
    return(
        <div className="px-32 gap-5 flex flex-col">
            <Template1 name={name+'-section1'} setData={setData} data={data}/>
            <Template2 name={name+'-section2'} setData={setData} data={data}></Template2>
            <Template3 name={name+'-section3'} setData={setData} data={data}/>
            <Template4 name={name+'-section3'} setData={setData} data={data}/>
            <AddTemplate/>
        </div>

    )
}