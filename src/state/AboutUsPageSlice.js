import { createSlice } from "@reduxjs/toolkit";

export const AboutUsPageSlice=createSlice({
    name:"AboutUsPageSlice",
    initialState:{

    },
    reducers:{
        setAboutUsPage:(state,action)=>{
            state=action.payload
        }
    }
})
export default AboutUsPageSlice.reducer
export const {setAboutUsPage}=AboutUsPageSlice.actions