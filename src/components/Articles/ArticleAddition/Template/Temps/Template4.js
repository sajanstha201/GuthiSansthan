import { ImageTemplate } from "../Common"
import { TextTemplate } from "../Common/TextTemplate"
import { useEffect ,useState} from "react"
import { ChangeOrder } from "../Common/ChangeOrder"
import { useSelectLanguage } from "../../../../../context/LanguageChoice"
import { ViewEditButton } from "../Common/ViewEditButton"
import { TemplatePreview4 } from "../../../ArticlePreview/TemplatePreview/TempsPreview"
export const Template4=({name,data,setData})=>{
    const [isPreview,setIsPreview]=useState(false)
    const {selectLanguage,setSelectLanguage}=useSelectLanguage()
    return(
        <>
        <div className="relative">
            <ViewEditButton isPreview={isPreview} setIsPreview={setIsPreview} data={data} setData={setData} name={name}/>
            {!isPreview&&
                    <div className="relative flex flex-row rounded-md border p-2">
                    <div className="flex flex-col w-full"> 
                        <ImageTemplate name={name} data={data} setData={setData}/>
                        <TextTemplate name={name} data={data} setData={setData}/>
                    </div>
                    <ChangeOrder data={data} name={name} setData={setData}/>
                </div>}
                {isPreview&&<TemplatePreview4 content={data[name]['text'][selectLanguage]} image={data[name].image} name={name}/>}
        </div>


        </>
    )
}