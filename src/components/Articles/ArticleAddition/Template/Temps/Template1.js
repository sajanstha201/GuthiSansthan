import { useEffect } from "react"
import { TextTemplate } from "../Common/TextTemplate"

export const Template1=({name,data,setData})=>{
    useEffect(()=>{
        if(!data?.name){
            setData(prevData=>({...prevData,[name]:{
                'templateName':'template1',
                'text':{'nepali':''}
            }}))
        }
    },[])
    return(
        <div className='relative flex flex-row w-full rounded-md border p-2'>
            <TextTemplate setData={setData} data={data} name={name}/>
        </div>

    )
}