import {useEffect, useRef, useState} from 'react'
import { LanguageChangeButton } from './LanguageChangeButton';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useEditing } from '../../../context/EditingProvider';
import { useTranslation } from 'react-i18next';
export const EditText=({keyName,children})=>{
    const {t}=useTranslation()
    const [editorData,setEditorData]=useState('')
    const [language,setLanguage]=useState('nepali')
    const [textData,setTextData]=useState({'nepali':t(keyName),'english':'','newari':'','mithila':''})
    const [activateEdit,setActivateEdit]=useState(false)
    const {isEditing,setIsEditing}=useEditing()
    console.log(textData)
    useEffect(()=>{
        setEditorData(textData[language])
    },[language])
    const handleChange=(event,editor)=>{
        console.log(language,editor.getData())
        setTextData(prevData=>({...prevData,[language]:editor.getData()}))
    }
    const handleSubmit=()=>{
        console.log(textData)
    }
    return(
        <>
        {!isEditing&&<>{children}</>}
        {isEditing&&<>
        {!activateEdit&&<>
        <div className='absolute cursor-pointer flex bottom-[50%] left-2 items-center justify-center bg-gray-600 py-1 font-normal px-2 border border-white hover:bg-gray-700 text-[15px] w-fit h-fit rounded-md' onClick={()=>setActivateEdit(true)}>Edit</div>
        {children}
        </>}
        {activateEdit&&<>
            <div className='relative flex flex-row gap-1 w-full text-[20px]'>
            <div className='text-[10px]'>
                <LanguageChangeButton language={language} setLanguage={setLanguage} nepaliText={textData['nepali']}/>
            </div>
            <div className='h-auto w-full p-2 text-black font-normal flex flex-col'>
                <div>
                    <CKEditor
                        editor={ClassicEditor}
                        data={editorData}
                        onChange={handleChange}
                        config={{toolbar: ['heading', '|', 'bold', 'italic']}}
                    />
                </div>
                <div className='flex flex-row text-white items-center justify-center w-full gap-2'>
                    <div className='cursor-pointer flex items-center justify-center m-2 bg-red-600 py-1 font-normal px-2 border border-white hover:bg-red-700 text-[15px] w-fit h-fit rounded-md' onClick={()=>setActivateEdit(false)} >Remove</div>
                    <div className='cursor-pointer flex items-center justify-center m-2 bg-green-600 py-1 font-normal px-2 border border-white hover:bg-green-700 text-[15px] w-fit h-fit rounded-md' onClick={handleSubmit} >Save</div>
                </div>
            </div>
 
        </div>
        </>}</>}
        </>
  

    )
}