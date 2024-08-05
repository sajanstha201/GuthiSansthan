import { createSlice } from "@reduxjs/toolkit";

export const ArticleSectionSlice=createSlice({
    name:'articleSectionSlice',
    initialState:{
        isFetched:false,
        url:'api/services/',
        details:[]
    },
    reducers:{
        setArticleSectionWholeDetail:(state,action)=>{
            state.details=action.payload
        },
        setIsFetched:(state,action)=>{
            state.isFetched=action.payload
        }
    }
})
export default ArticleSectionSlice.reducer
export const {setArticleSectionWholeDetail,setIsFetched}=ArticleSectionSlice.actions