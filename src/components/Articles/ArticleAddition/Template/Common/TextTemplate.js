import {useEffect, useState} from 'react'
import { LanguageChangeButton } from './LanguageChangeButton';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export const TextTemplate=({data,setData,name})=>{
    const [language,setLanguage]=useState('nepali')
    const [textData,setTextData]=useState('')
    useEffect(()=>{
        setTextData(data[name]?.['text']?.[language] ?? '')
    },[language])
    const handleChange=(event,editor)=>{
        setData(prevData=>({...prevData,[name]:{
            ...prevData[name],['text']:{...prevData[name]['text'],[language]:editor.getData()}
        }}))
    }

    return(
        <div className='relative flex flex-row gap-1 w-full '>
            <div className=''>
                <LanguageChangeButton data={data} setData={setData} name={name} language={language} setLanguage={setLanguage} nepaliText={data[name]?.text?.nepali}/>
            </div>
            <div className='h-auto w-full p-2'>
            <CKEditor
                    editor={ClassicEditor}
                    data={textData}
                    onChange={handleChange}
                    config={{
                    toolbar: [
                        'heading', '|', 'bold', 'italic', '|',
                        'link', 'mediaEmbed', '|',
                        'bulletedList'
                    ],
                    }}
            />
            </div>

            {/* <textarea className="flex w-full resize-none border hover:bg-gray-100 p-2 pb-4 rounded-md" id={'textArea-'+name}  onChange={handleChange}>
            </textarea> */}
            {/* <div className={`absolute bottom-1  right-1 bg-green-700 hover:bg-green-900 cursor-pointer flex border  rounded-md px-2 py-1 h-[30px] items-center justify-center text-white`} onClick={}>save</div> */}
        </div>

    )
}