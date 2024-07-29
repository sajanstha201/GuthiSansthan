import { TextTemplatePreview } from "../CommonPreview/TextTemplatePreview"
import {ImageTemplatePreview} from "../CommonPreview/ImageTemplatePreview"
export const TemplatePreview2=({content,image})=>{
    return(
        <>
        <div className="flex flex-row">
            <TextTemplatePreview content={content}/>
            <ImageTemplatePreview image={image}/>
        </div>
        </>
    )
}