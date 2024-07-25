import { createSlice } from "@reduxjs/toolkit";

export const ParvaSlice=createSlice({
    name:"parvaSlice",
    initialState:{
        isFetched:false,
        url:'',
        details:'',
    },
    reducers:{
        setParvaWholeDetails:(state,action)=>{
            state.details=action.payload
        }
    }
})
export default ParvaSlice.reducer
export const {setParvaWholeDetails}=ParvaSlice.actions