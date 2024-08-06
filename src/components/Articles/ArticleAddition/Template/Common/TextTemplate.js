import {useEffect, useState} from 'react'
import { LanguageChangeButton } from './LanguageChangeButton';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export const TextTemplate=({data,setData,name})=>{
    const [language,setLanguage]=useState('nepali')
    const [textData,setTextData]=useState('')
    const usedLngs=['nepali','english','newari','mithila']
    useEffect(()=>{
        setTextData(data[name]['text'][language])
    },[language,name])
    const handleChange=(event,editor,language)=>{
        const newData=editor.getData()
        setData(prevData=>({...prevData,[name]:{
            ...prevData[name],['text']:{...prevData[name]['text'],[language]:newData}
        }}))
 
    }

    return(
        <div className='relative flex flex-row gap-1 w-full '>
            <div className=''>
                <LanguageChangeButton data={data} setData={setData} name={name} language={language} setLanguage={setLanguage} nepaliText={data[name]?.text?.nepali}/>
            </div>
            <div className='h-full w-full p-2'>
                {
                    usedLngs.map((value,index)=>(
                        <>
                        {language===value&&
                            <CKEditor
                                    editor={ClassicEditor}
                                    data={data[name]['text'][value]}
                                    onChange={(event,editor)=>handleChange(event,editor,value)}
                                    config={{
                                    toolbar: [
                                        'heading', '|', 'bold', 'italic', '|',
                                        'link', 'mediaEmbed', '|',
                                        'bulletedList'
                                    ],
                                    }}
                            />}
                        </>
                    ))
                }
       
            
            </div>

            {/* <textarea className="flex w-full resize-none border hover:bg-gray-100 p-2 pb-4 rounded-md" id={'textArea-'+name}  onChange={handleChange}>
            </textarea> */}
            {/* <div className={`absolute bottom-1  right-1 bg-green-700 hover:bg-green-900 cursor-pointer flex border  rounded-md px-2 py-1 h-[30px] items-center justify-center text-white`} onClick={}>save</div> */}
        </div>

    )
}