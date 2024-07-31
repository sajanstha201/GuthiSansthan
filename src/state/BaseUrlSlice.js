import { createSlice } from "@reduxjs/toolkit";

export const BaseUrlSlice=createSlice({
    name:'base_url',
    initialState:{
        // 'backend':'http://192.168.1.140:8000/',
        //  'backend':'http://192.168.1.65:8000/',
         'backend':'https://guthi.pythonanywhere.com/',
    //    'backend':' http://127.0.0.1:8000/',
        // 'backend':'http://192.168.1.65:8000/',
        'frontend':'http://localhost:3000/',
        // 'frontend':'https://sajanstha201.github.io/GuthiSansthan/'
    },
    reducers:{
    }
})
export default BaseUrlSlice.reducer