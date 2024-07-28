import { ImageTemplate } from "../Common"
import { TextTemplate } from "../Common/TextTemplate"
import { useEffect } from "react"
export const Template2=({name,data,setData})=>{
    useEffect(()=>{
        if(!data?.name){
            setData(prevData=>({...prevData,[name]:{
                'templateName':'template2',
                'text':{'nepali':''}
            }}))
        }
    },[])
    return(
        <>
        <div className="flex flex-row rounded-md border p-2">
            <TextTemplate name={name} data={data} setData={setData}/>
            <ImageTemplate name={name} data={data} setData={setData}/>
        </div>

        </>
    )
}