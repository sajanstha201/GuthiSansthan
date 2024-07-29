import { TemplatePreviewMain } from "./TemplatePreview/TemplatePreviewMain"

export const NoticePreviewMain=({data,title})=>{
return(
    <div className="w-full">
        <TemplatePreviewMain data={data} title={title}/>
    </div>
)
}