import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export const Testing = () => {
    const [imgSrc, setImgSrc] = useState('');
    const [editorData, setEditorData] = useState('<h1>Hello from CKEditor 5!</h1>');

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

    return (
        <>
            <h1>This is Testing Section</h1>
            <div>
                <div>
                    <input id='testing-input' type='file' accept='.png' onChange={uploadImage} />
                    <img src={imgSrc} alt='Uploaded' style={{ maxWidth: '100%' }} />
                </div>
                <div>
                    <h2>CKEditor Example</h2>
                    <CKEditor
                        editor={ClassicEditor}
                        data={editorData}
                        onChange={handleEditorChange}
                        config={{
                            toolbar: [
                                'undo', 'redo', '|',
                                'heading', '|', 'bold', 'italic', '|',
                                'link', 'insertTable', 'mediaEmbed', '|',
                                'bulletedList', 'numberedList', 'indent', 'outdent'
                            ]
                        }}
                    />
                </div>
            </div>
        </>
    );
};
