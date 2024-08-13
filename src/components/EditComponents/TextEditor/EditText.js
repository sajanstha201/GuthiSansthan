import {useEffect, useRef, useState} from 'react'
import { LanguageChangeButton } from './LanguageChangeButton';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useEditing } from '../../../context/EditingProvider';
import { useTranslation } from 'react-i18next';
import { activate_loader } from '../../AlertLoader/LoaderBox';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addLanguage } from '../../ReuseableFunctions';
export const EditText=({keyName,children,textId,styling,setNewData,prevTextData})=>{
    const {t}=useTranslation()
    const [editorData,setEditorData]=useState('')
    const [language,setLanguage]=useState('nepali')
    const [textData,setTextData]=useState(prevTextData)
    const [activateEdit,setActivateEdit]=useState(false)
    const {isEditing,setIsEditing}=useEditing()
    const usedLngs=['nepali','english','newari','mithila']
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const [style,setStyle]=useState(styling)
    const dispact=useDispatch()
    console.log('styling',styling)
    console.log('style',style)
    useEffect(()=>{
        setTextData(prevTextData)
    },[prevTextData])
    useEffect(()=>{
        setStyle(styling)
    },[styling])
    useEffect(()=>{
        setEditorData(textData[language])
    },[language])
    const handleChange2=(event,editor,language)=>{
        setTextData(prevData=>({...prevData,[language]:editor.getData()}))
    }
    const handleChange=(value,language)=>{
        setTextData(prevData=>({...prevData,[language]:value}))
    }
    const handleSubmit=async()=>{
        try{
            activate_loader(true)
            const response=await axios.patch(baseUrl+'api/components/'+textId+'/',{'text':textData,'styling':style});
            dispact(setNewData({text:textData,styling:style}))
            addLanguage({ key:keyName, lngs: textData});
            console.log(response)
            setActivateEdit(false)
        }
        catch{

        }
        finally{
            activate_loader(false)
        }
        console.log(textData)
    }
    const removeUpdate=()=>{
        setActivateEdit(false)
        setTextData({'nepali':t(keyName),'english':'','newari':'','mithila':''})
    }
    return(
        <>
        {!isEditing&&<><div 
                            className={`${style.bold?'font-bold':''} ${style.italic?'italic':''} ${style.underline?'underline':''}`} 
                            style={{color:style.color,fontSize:style.fontSize+'px'}}>{t(keyName)}</div></>}
        {isEditing&&<>
        {!activateEdit&&<>
        <div className='absolute cursor-pointer flex bottom-[50%] left-2 items-center justify-center bg-gray-600 py-1 font-normal px-2 border border-white hover:bg-gray-700 text-[15px] w-fit h-fit rounded-md' onClick={()=>setActivateEdit(true)}>Edit</div>
        <div 
            className={`${style.bold?'font-bold':''} ${style.italic?'italic':''} ${style.underline?'underline':''}`} 
            style={{color:style.color,fontSize:style.fontSize+'px'}}>{t(keyName)}</div>
        </>}
        {activateEdit&&<>
            <div className='relative flex flex-row gap-1 w-full text-[20px]'>
            <div className='text-[10px]'>
                <LanguageChangeButton language={language} setLanguage={setLanguage} nepaliText={textData['nepali']}/>
            </div>
            <div className='flex flex-col items-center justify-center w-full overflow-hidden'>
                <div className='h-[20vh] w-full p-2 text-black font-normal flex flex-col overflow-hidden rounded-md '>
                    <div className='h-[40%] w-full bg-white flex flex-row gap-5 items-center justify-center cursor-pointer p-2'>
                        <div className={`${style.bold?'font-bold bg-gray-400':''} w-[30px] border rounded-md `} onClick={()=>setStyle(prevData=>({...prevData,['bold']:!prevData.bold}))}>B</div>
                        <div className={`${style.italic?'italic bg-gray-400':''} w-[30px] border rounded-md `} onClick={()=>setStyle(prevData=>({...prevData,['italic']:!prevData.italic}))}>I</div>
                        <div className={`${style.underline?'underline bg-gray-400':''} w-[30px] border rounded-md `} onClick={()=>setStyle(prevData=>({...prevData,['underline']:!prevData.underline}))}>U</div>
                        <div className='flex items-center justify-center gap-1 cursor-pointer'>
                            <label className={`text-[${style.fontSize+'px'}]`} >Font Size:</label>
                            <input type='number' className='w-[50px] border rounded-md'   onChange={(e)=>setStyle(prevData=>({...prevData,['fontSize']:e.target.value}))} value={style.fontSize}></input>
                        </div>
                        <div className='flex items-center justify-center gap-1 cursor-pointer'>
                            <label  style={{color:style.color}} className='font-bold'>Color</label>
                            <input type='color' className='rounded-md' value={style.color} onChange={(e)=>setStyle(prevData=>({...prevData,['color']:e.target.value}))}></input>
                        </div>
                        
                    </div>
                    {usedLngs.map((value,index)=>(
                        <>
                        {language===value&&
                        <>
                        <textarea 
                            value={textData[value]} 
                            onChange={(e)=>handleChange(e.target.value,language)} 
                            className={`${style.bold?'font-bold':''} ${style.italic?'italic':''} text-[${style.fontSize+'px'}] ${style.underline?'underline':''} h-full w-full p-2`} 
                            style={{color:style.color,fontSize:style.fontSize+'px'}}
                            >

                        </textarea>
                        </>}
                        </>
                    ))
                    }

                </div>
                <div className='flex flex-row text-white items-center justify-center w-full gap-2'>
                        <div className='cursor-pointer flex items-center justify-center m-2 bg-red-600 py-1 font-normal px-2 border border-white hover:bg-red-700 text-[15px] w-fit h-fit rounded-md' onClick={removeUpdate} >Remove</div>
                        <div className='cursor-pointer flex items-center justify-center m-2 bg-green-600 py-1 font-normal px-2 border border-white hover:bg-green-700 text-[15px] w-fit h-fit rounded-md' onClick={handleSubmit} >Save</div>
                    </div>
            </div>

        </div>
        </>}</>}
        </>
  

    )
}