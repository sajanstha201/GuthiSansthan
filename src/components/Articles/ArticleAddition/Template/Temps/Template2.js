import { ImageTemplate } from "../Common"
import { ChangeOrder } from "../Common/ChangeOrder"
import { TextTemplate } from "../Common/TextTemplate"
import { useEffect,useState } from "react"
import { useSelectLanguage } from "../../../../../context/LanguageChoice"
import { TemplatePreview2 } from "../../../ArticlePreview/TemplatePreview/TempsPreview"
import { ViewEditButton } from "../Common/ViewEditButton"

export const Template2=({name,data,setData})=>{
    const [isPreview,setIsPreview]=useState(false)
    const {selectLanguage,setSelectLanguage}=useSelectLanguage()
    return(
        <>
        <div className="relative">
            <ViewEditButton isPreview={isPreview} setIsPreview={setIsPreview} data={data} setData={setData} name={name}/>
            {!isPreview&&
            <div className="relative flex flex-row rounded-md border w-full justify-between">
                <div className="w-full"><TextTemplate name={name} data={data} setData={setData}/></div>
                <div className="flex mr-1">
                    <ImageTemplate name={name} data={data} setData={setData}/>
                    <ChangeOrder data={data} name={name} setData={setData}/>
                </div>
            </div>}
            {isPreview&&<TemplatePreview2 content={data[name]['text'][selectLanguage]} image={data[name].image} name={name}/>}
        </div>


        </>
    )
}