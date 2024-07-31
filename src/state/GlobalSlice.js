import { createSlice } from "@reduxjs/toolkit";

export const GlobalSlice=createSlice({
    name:'globalSlice',
    initialState:{
        isFetched:false,
        url:'api/global-components/',
        "details":{},
        "guthi-sansthan-logo":{'imgSrc':'','id':'','actualImgSrc':''},
        "lng-logo":{ },
    },
    reducers:{
        setGlobalWholeDetail:(state,action)=>{
            state.isFetched=true
            state["details"]=action.payload
        },
        setGuthiSansthanLogo:(state,action)=>{
            state["guthi-sansthan-logo"]=action.payload
            state["guthi-sansthan-logo"]["actualImgSrc"]=action.payload.imgSrc
        },
        setLngLogo:(state,action)=>{
            state['lng-logo']=action.payload
        },
        setNewGuthiSansthanLogo:(state,action)=>{
            if(action.payload){
                state["guthi-sansthan-logo"]["imgSrc"]=action.payload
            }
            else{
                state["guthi-sansthan-logo"]["imgSrc"]=state["guthi-sansthan-logo"]["actualImgSrc"]
            }
        }
    }
})
export default GlobalSlice.reducer
export const {setGlobalWholeDetail,setGuthiSansthanLogo,setLngLogo,setNewGuthiSansthanLogo}=GlobalSlice.actions