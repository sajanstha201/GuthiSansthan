import { TemplatePreviewMain } from "./TemplatePreview/TemplatePreviewMain"

export const NoticePreviewMain=({data,title,date})=>{
return(
    <div className="w-full">
        <TemplatePreviewMain data={data} title={title} date={date}/>
    </div>
)
}