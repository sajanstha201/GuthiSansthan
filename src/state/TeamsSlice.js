import { createSlice } from "@reduxjs/toolkit";

export const TeamsSlice=createSlice({
    name:"TeamsSlice",
    initialState:{
        isFetched:false,
        url:'',
        details:'',
    },
    reducers:{
        setTeamsWholeDetail:(state,action)=>{
            state.details=action.payload
        }
    }
})
export default TeamsSlice.reducer
export const {setTeamsWholeDetail}=TeamsSlice.actions