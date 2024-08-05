import { createSlice } from "@reduxjs/toolkit";

export const NoticeSectionSlice=createSlice({
    name:'NoticeSectionSlice',
    initialState:{
        isFetched:false,
        url:'api/services',
        details:[]
    },
    reducers:{
        setNoticeSectionWholeDetail:(state,action)=>{
            state.isFetched=true
            state.details=action.payload
        }
    }
})
export default NoticeSectionSlice.reducer
export const {setNoticeSectionWholeDetail}=NoticeSectionSlice.actions