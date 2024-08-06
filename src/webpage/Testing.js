import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EditImage } from '../components/EditComponents';
import img from '../media/ContactUs/bg.png'
import {useSelector} from 'react-redux'
import { EditText } from '../components/EditComponents/TextEditor/EditText';
import AddBranches from '../components/BranchPage/AddBranches';
export const Testing = () => {
    const [imgSrc, setImgSrc] = useState('');
    const [editorData, setEditorData] = useState('<h1>Hello from CKEditor 5!</h1>');
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const uploadImage = (event) => {
        const img = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            console.log(event.target.result)
            setImgSrc(event.target.result);
        };

        reader.readAsDataURL(img);
    };

    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setEditorData(data);
        console.log(data)
        console.log(editorData)
    };
    const [imageData,setImageData]=useState()
    const [url,setUrl]=useState()
    const handleImageChange=()=>{
        const file=document.getElementById('input-sajan').files[0]
        const reader=new FileReader();
        reader.readAsArrayBuffer(file)
        reader.onload=(e)=>{
            console.log(e.target.result)
            const url=URL.createObjectURL(new Blob([e.target.result]))
            console.log(url)
            setUrl(url)

        }
    }
    return (
        <>
            <h1>This is Testing Section</h1>
            <AddBranches/>
            <div>
                <label htmlFor='input-sajan'>Click me </label>
                <br></br>
                <input type='file' id='input-sajan' className='' onChange={handleImageChange}></input>
                <img src={url}></img>
            </div>
        </>
    );
};
