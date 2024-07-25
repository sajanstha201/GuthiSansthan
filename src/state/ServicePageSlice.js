import { createSlice } from "@reduxjs/toolkit";

export const ServicePageSlice=createSlice({
    name:"ServicePageSlice",
    initialState:{
        isFetched:false,
        url:'api/pages/our-services/',
        services:{}
    },
    reducers:{
        setServicePage:(state,action)=>{
            state.isFetched=true;
            state.services=action.payload
        }
    }
})
export default ServicePageSlice.reducer
export const {setServicePage} =ServicePageSlice.actions