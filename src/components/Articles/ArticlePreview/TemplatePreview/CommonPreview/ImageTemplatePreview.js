import { useEffect, useState } from "react"

export const ImageTemplatePreview=({image,name})=>{
    const [src,setSrc]=useState('')
    useEffect(()=>{
        setSrc('')
        console.log(image)
        if(image){
            const reader=new FileReader()
            reader.onload=(e)=>{
                setSrc(URL.createObjectURL(new Blob([e.target.result])))
            }
            reader.readAsArrayBuffer(image)
            console.log(image)
        }
    },[image])
    return(
        <div className="flex items-center justify-center">
            <div className={`${image?' w-[150px] h-[150px] md:w-[300px] md:h-[300px]':''} flex items-center justify-center`}>
                <img src={src}></img>
            </div>
        </div>

    )
}