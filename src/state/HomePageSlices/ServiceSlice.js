import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const ServiceSlice=createSlice({
    name:"ServiceSlice",
    initialState:{
        isFetched:false,
        url:'api/pages/our-services/',
        isDynamicFetched:false,
        dynamicUrl:'api/services/',
        dynamicDetails:[],
        details:{},
        "bg-img":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
        services:{}
    },
    reducers:{
        setServicePageWholeDetail:(state,action)=>{
            state.isFetched=true;
            state.details=action.payload
        },
        setDynamicServicePageWholeDetail:(state,action)=>{
            state.isDynamicFetched=true
            state.dynamicDetails=action.payload
        },
        setDynamicImageUrl:(state,action)=>{
            const oldData=state.dynamicDetails
            oldData[action.payload.index].image=action.payload.image
            oldData[action.payload.index]['isImageFetched']=true
            state.dynamicDetails=oldData
        },
        setBgImg:(state,action)=>{
            state['bg-img']={
                isFetched:true,
                imgSrc:action.payload,
                id:state.details['our-services'].id,
                actualImgSrc:action.payload
            }
        },
        setNewBgImg:(state,action)=>{
            if(action.payload) state["bg-img"]["imgSrc"]=action.payload
            else state["bg-img"]["imgSrc"]=state["bg-img"]["actualImgSrc"]
        }
    }
})
export default ServiceSlice.reducer
export const {setServicePageWholeDetail,setBgImg,setNewBgImg,setDynamicServicePageWholeDetail,setDynamicImageUrl} =ServiceSlice.actions