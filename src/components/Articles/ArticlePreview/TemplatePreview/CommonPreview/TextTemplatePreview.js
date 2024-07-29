import { useEffect } from "react"

export const TextTemplatePreview=({content,name})=>{
    useEffect(()=>{
        document.getElementById(name+'-previewSection').innerHTML=content
    },[name])
    return(
        <div className="w-full p-2 text-start " id={name+'-previewSection'}>
        </div>
    )
}