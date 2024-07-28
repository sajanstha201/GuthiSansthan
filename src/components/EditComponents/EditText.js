
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useState } from "react"
import { TextEditorMain } from "./TextEditor/TextEditorMain";
export const EditText=({children})=>{
    const [data,setData]=useState('sajan shrestha')
    const handleChange=(event,editor)=>{
        setData(editor.getData())
        console.log(editor.getData())
    }
    return(
        <>
        {/* <TextEditorMain>
            hello 
        </TextEditorMain> */}
        </>
    )
}