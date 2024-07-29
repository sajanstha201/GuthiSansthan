import { TextTemplatePreview } from "../CommonPreview/TextTemplatePreview"
import React from "react"
export const TemplatePreview1=({content,name})=>{
    return(
        <>
        <TextTemplatePreview content={content} name={name}/>
        </>
    )
}