import {useEffect, useState} from 'react'
import { LanguageChangeButton } from './LanguageChangeButton';
export const TextTemplate=({data,setData,name})=>{
    const [language,setLanguage]=useState('nepali')
    useEffect(()=>{
        const textarea = document.getElementById('textArea-'+name);
        textarea.addEventListener('input', () => {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight+'px';
        });
    },[name])
    useEffect(()=>{
        document.getElementById('textArea-'+name).value=data[name]?.['text']?.[language] ?? ''
    },[language])
    const handleChange=()=>{
        setData(prevData=>({...prevData,[name]:{
            ...prevData[name],['text']:{...prevData[name]['text'],[language]:document.getElementById('textArea-'+name).value}
        }}))
    }

    return(
        <div className='relative flex flex-row gap-1 w-full'>
            <div className='relative'>
                <LanguageChangeButton data={data} setData={setData} name={name} language={language} setLanguage={setLanguage} nepaliText={data[name]?.text?.nepali}/>
            </div>
            <textarea className="flex w-full resize-none border hover:bg-gray-100 p-2 pb-4 rounded-md" id={'textArea-'+name}  onChange={handleChange}>
            </textarea>
            {/* <div className={`absolute bottom-1  right-1 bg-green-700 hover:bg-green-900 cursor-pointer flex border  rounded-md px-2 py-1 h-[30px] items-center justify-center text-white`} onClick={}>save</div> */}
        </div>

    )
}