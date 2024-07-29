import { TextTemplatePreview } from "../CommonPreview/TextTemplatePreview"
import {ImageTemplatePreview} from "../CommonPreview/ImageTemplatePreview"
export const TemplatePreview4=({content,image})=>{
    return(
        <>
        <div className="flex flex-col">
            <ImageTemplatePreview image={image}/>
            <TextTemplatePreview content={content}/>
        </div>
        </>
    )
}