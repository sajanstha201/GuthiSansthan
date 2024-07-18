import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const HomePageSlice=createSlice({
    name:"HomePageDetail",
    initialState:{
        "details":{},
        "guthi-sanstha-logo":{logo:'sajan shrrslkasjl'},
        "lng-logo":{},
        "slider-img":{},
        "welcome-to-guthisansthan":{},
        "bg-video":{}
    },
    reducers:{
        setHomePageWholeDetail:(state,action)=>{
            state["details"]=action.payload
            state["guthi-sanstha-logo"]=action.payload["guthi-sansthan-logo"]
            state["lng-logo"]=action.payload["lng-logo"]
            state["slider-img"]=action.payload["slider-img"]
            state["welcome-to-guthisansthan"]=action.payload["welcome-to-guthisansthan"]
            state["bg-video"]=action.payload["bg-video"]
        },
        setGuthiSansthanLLogo:(state,action)=>{
            state['guthi-sanstha-logo']=action.payload
        },
        setLngLogo:(state,action)=>{
            state['lng-logo']=action.payload
        },
        setSliderImg:(state,action)=>{
            state['slider-img']=action.payload
        },
        setWelcomeToGuthiSansthan:(state,action)=>{
            state['welcome-to-guthisansthan']=action.payload
        },
        setBgVideo:(state,action)=>{
            state['bg-video']=action.payload
        }

    }
})
export default HomePageSlice.reducer
export const {setHomePageWholeDetail} =HomePageSlice.actions