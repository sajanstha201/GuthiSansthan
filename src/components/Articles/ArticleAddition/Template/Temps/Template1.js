import { useEffect, useState } from "react"
import { TextTemplate } from "../Common/TextTemplate"
import { ChangeOrder } from "../Common/ChangeOrder"
import { ViewEditButton } from "../Common/ViewEditButton"
import {TemplatePreview1} from '../../../ArticlePreview/TemplatePreview/TempsPreview'
import {useSelectLanguage} from '../../../../../context/LanguageChoice'
export const Template1=({name,data,setData})=>{
    const [isPreview,setIsPreview]=useState(false)
    const {selectLanguage,setSelectLanguage}=useSelectLanguage()
    return(
        <div className="relative">
            <ViewEditButton isPreview={isPreview} setIsPreview={setIsPreview} data={data} setData={setData} name={name}/>
            {!isPreview&&
                <div className='relative flex flex-row w-[90%] rounded-md border p-2'>
                    <TextTemplate setData={setData} data={data} name={name}/>
                    <ChangeOrder name={name} data={data} setData={setData}/>
            </div>}
            {isPreview&&<TemplatePreview1 content={data[name].text[selectLanguage]} name={name}/>}
            
        </div>


    )
}