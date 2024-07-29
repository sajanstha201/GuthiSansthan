import { createSlice } from "@reduxjs/toolkit";

export const  CalenderSlice=createSlice({
    name:"calender",
    initialState:{
        isFetched:false,
        url:'',
        details:''
    },
    reducers:{
        setCalenderWholeDetail:(state,action)=>{
            state.details=action.payload
        }
    }
})
export default CalenderSlice.reducer
export const {setCalenderWholeDetail}=CalenderSlice.actions