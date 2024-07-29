import { createSlice } from "@reduxjs/toolkit";

export const ParvaSlice=createSlice({
    name:"parvaSlice",
    initialState:{
        isFetched:false,
        url:'api/festivals/',
        details:[],
    },
    reducers:{
        setParvaWholeDetails:(state,action)=>{
            state.details=action.payload
            state.isFetched=true;
        }
    }
})
export default ParvaSlice.reducer
export const {setParvaWholeDetails}=ParvaSlice.actions