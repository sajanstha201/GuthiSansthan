import { TextTemplatePreview } from "../CommonPreview/TextTemplatePreview"
import {ImageTemplatePreview} from "../CommonPreview/ImageTemplatePreview"
export const TemplatePreview4=({content,image,name})=>{
    return(
        <>
        <div className="flex flex-col">
            <ImageTemplatePreview image={image} name={name}/>
            <TextTemplatePreview content={content} name={name}/>
        </div>
        </>
    )
}