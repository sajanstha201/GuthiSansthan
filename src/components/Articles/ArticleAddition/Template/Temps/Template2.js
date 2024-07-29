import { ImageTemplate } from "../Common"
import { ChangeOrder } from "../Common/ChangeOrder"
import { TextTemplate } from "../Common/TextTemplate"
import { useEffect } from "react"
export const Template2=({name,data,setData})=>{
    return(
        <>
        <div className="relative flex flex-row rounded-md border p-2">
            <TextTemplate name={name} data={data} setData={setData}/>
            <ImageTemplate name={name} data={data} setData={setData}/>
            <ChangeOrder data={data} name={name} setData={setData}/>
        </div>

        </>
    )
}