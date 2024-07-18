import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const HomePageSlice=createSlice({
    name:"HomePageDetail",
    initialState:{
        "details":{},
        "slider-img":{},
        "welcome-to-guthisansthan":{},
        "bg-video":{}                                             
    },
    reducers:{
        setHomePageWholeDetail:(state,action)=>{
            state["details"]=action.payload
            state["slider-img"]=action.payload["slider-img"]
            state["welcome-to-guthisansthan"]=action.payload["welcome-to-guthisansthan"]
            state["bg-video"]=action.payload["bg-video"]
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
export const {setHomePageWholeDetail,setGuthiSansthanLogo} =HomePageSlice.actions