import { createSlice } from "@reduxjs/toolkit";

export const GlobalSlice=createSlice({
    name:'globalSlice',
    initialState:{
        isFetched:false,
        "details":{},
        "guthi-sanstha-logo":{},
        "lng-logo":{},
    },
    reducers:{
        setGlobalWholeDetail:(state,action)=>{
            state.isFetched=true
            state["details"]=action.payload
            // state["guthi-sanstha-logo"]=action.payload["guthi-sansthan-logo"]
            // state["lng-logo"]=action.payload["lng-logo"]
        },
        setGuthiSansthanLogo:(state,action)=>{
            state['guthi-sanstha-logo']=action.payload
        },
        setLngLogo:(state,action)=>{
            state['lng-logo']=action.payload
        },
    }
})
export default GlobalSlice.reducer
export const {setGlobalWholeDetail,setGuthiSansthanLogo,setLngLogo}=GlobalSlice.actions