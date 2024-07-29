import { TextTemplatePreview } from "../CommonPreview/TextTemplatePreview"
import {ImageTemplatePreview} from "../CommonPreview/ImageTemplatePreview"
export const TemplatePreview2=({content,image,name})=>{
    return(
        <>
        <div className="flex flex-row">
            <TextTemplatePreview content={content} name={name}/>
            <ImageTemplatePreview image={image} name={name}/>
        </div>
        </>
    )
}