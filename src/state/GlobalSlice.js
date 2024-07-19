import { createSlice } from "@reduxjs/toolkit";

export const GlobalSlice=createSlice({
    name:'globalSlice',
    initialState:{
        isFetched:false,
        "details":{},
        "guthi-sansthan-logo":false,
        "lng-logo":false,
    },
    reducers:{
        setGlobalWholeDetail:(state,action)=>{
            state.isFetched=true
            state["details"]=action.payload
        },
        setGuthiSansthanLogo:(state,action)=>{
            state["guthi-sansthan-logo"]=action.payload
        },
        setLngLogo:(state,action)=>{
            state['lng-logo']=action.payload
        },
    }
})
export default GlobalSlice.reducer
export const {setGlobalWholeDetail,setGuthiSansthanLogo,setLngLogo}=GlobalSlice.actions