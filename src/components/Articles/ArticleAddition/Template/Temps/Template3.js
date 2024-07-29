import { ImageTemplate } from "../Common"
import { TextTemplate } from "../Common/TextTemplate"
import { useEffect } from "react"
import { ChangeOrder } from "../Common/ChangeOrder"
export const Template3=({name,data,setData})=>{
    return(
        <>
        <div className="relative flex flex-row rounded-md border p-2">

            <ImageTemplate name={name} data={data} setData={setData}/>
            <TextTemplate name={name} data={data} setData={setData}/>
            <ChangeOrder data={data} name={name} setData={setData}/>
        </div>

        </>
    )
}