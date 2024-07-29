import { useEffect, useState } from "react"
import { Template1,Template2,Template3 ,Template4,Template5,Template6} from "./Temps"
import { AddTemplate } from "./AddTemplate"
export const TemplateMain=({name,data,setData})=>{
    const [templateList,setTemplateList]=useState([])
    useEffect(()=>{
        console.log(data)
    },[data])
    const chooseTemplate=(templateValue,key)=>{
        switch(templateValue.templateName){
            case 'template1':
                return <Template1 name={key} setData={setData} data={data}/>
            case 'template2':
                return <Template2 name={key} setData={setData} data={data}/>
            case 'template3':
                return <Template3 name={key} setData={setData} data={data}/>
            case 'template4':
                return <Template4 name={key} setData={setData} data={data}/>
            default:
                return <Template1 name={key} setData={setData} data={data}/>
        }
    }
    return(
        <div className="px-32 gap-5 flex flex-col">
            {Object.entries(data).map(([key,value])=>(chooseTemplate(value,key)))}
            <AddTemplate data={data} setData={setData} name={name}/>
        </div>

    )
}