import { TemplatePreviewMain } from "./TemplatePreview/TemplatePreviewMain"

export const ArticlePreviewMain=({data,title})=>{
return(
    <div className="w-full">
        <TemplatePreviewMain data={data} title={title}/>
    </div>
)
}