import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const ServicePageSlice=createSlice({
    name:"ServicePageSlice",
    initialState:{
        isFetched:false,
        url:'api/pages/our-services/',
        details:{},
        "bg-img":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
        services:{}
    },
    reducers:{
        setServicePageWholeDetail:(state,action)=>{
            state.isFetched=true;
            state.details=action.payload
        },
        setBgImg:(state,action)=>{
            state['bg-img']={
                isFetched:true,
                imgSrc:action.payload,
                id:state.details['our-services'].id,
                actualImgSrc:action.payload
            }
        }
    }
})
export default ServicePageSlice.reducer
export const {setServicePageWholeDetail,setBgImg} =ServicePageSlice.actions