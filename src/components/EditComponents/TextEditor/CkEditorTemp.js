import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useState } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export const CkEditorTemp = ({ handleChange,textData ,language }) => {
    return (
        <>
        <CKEditor
            editor={ClassicEditor}
            onChange={handleChange}
            data={textData[language]}
            config={{toolbar: ['heading', '|', 'bold', 'italic']}}
        />
        </>
    );
};
