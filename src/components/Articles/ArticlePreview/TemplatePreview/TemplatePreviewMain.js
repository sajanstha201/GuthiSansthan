import { useSelectLanguage } from '../../../../context/LanguageChoice'
import {TemplatePreview1,TemplatePreview2,TemplatePreview3,TemplatePreview4} from './TempsPreview'
export const TemplatePreviewMain=({data,title})=>{
    const {selectLanguage,setSelectLanguage}=useSelectLanguage()
    const chooseTemplatePreview=(key,value)=>{
        console.log(key)
        switch(value.templateName){ 
            case 'template1':
                return <TemplatePreview1 content={value.text[selectLanguage]} name={key+'pv'}/>
            case 'template2':
                return <TemplatePreview2 content={value.text[selectLanguage]} image={value.image} name={key+'pv'}/>
            case 'template3':
                return <TemplatePreview3 content={value.text[selectLanguage]} image={value.image} name={key+'pv'}/>
            case 'template4':
                return <TemplatePreview4 content={value.text[selectLanguage]} image={value.image} name={key+'pv'}/>
            default:
                return <TemplatePreview1 content={value.text[selectLanguage]} name={key+'pv'}/>
        }
    }
    return(
        <div className='flex items-center justify-center w-full'>
        <div className='w-[60%]'>
            <h1>{title}</h1>
            {Object.entries(data).map(([key,value])=>(chooseTemplatePreview(key,value)))}
        </div>
        </div>

    )
}