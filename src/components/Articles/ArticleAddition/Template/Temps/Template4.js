import { ImageTemplate } from "../Common"
import { TextTemplate } from "../Common/TextTemplate"
import { useEffect } from "react"
export const Template4=({name,data,setData})=>{
    useEffect(()=>{
        if(!data?.name){
            setData(prevData=>({...prevData,[name]:{
                'templateName':'template4',
                'text':{'nepali':''}
            }}))
        }
    },[])
    return(
        <>
        <div className="flex flex-col rounded-md border p-2">
            <ImageTemplate name={name} data={data} setData={setData}/>
            <TextTemplate name={name} data={data} setData={setData}/>
        </div>

        </>
    )
}