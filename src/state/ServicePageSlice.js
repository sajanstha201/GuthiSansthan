import { createSlice } from "@reduxjs/toolkit";

export const ServicePageSlice=createSlice({
    name:"ServicePageSlice",
    initialState:{

    },
    reducers:{
        setServicePage:(state,action)=>{
        }
    }
})
export default ServicePageSlice.reducer
export const {setServicePage} =ServicePageSlice.actions