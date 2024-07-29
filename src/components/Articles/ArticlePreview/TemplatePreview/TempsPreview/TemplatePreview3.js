import { TextTemplatePreview } from "../CommonPreview/TextTemplatePreview"
import {ImageTemplatePreview} from "../CommonPreview/ImageTemplatePreview"
export const TemplatePreview3=({content,image})=>{
    return(
        <>
        <div className="flex flex-row">
            <ImageTemplatePreview image={image}/>
            <TextTemplatePreview content={content}/>
        </div>
        </>
    )
}