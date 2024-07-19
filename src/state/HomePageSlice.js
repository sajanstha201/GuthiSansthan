import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const HomePageSlice=createSlice({
    name:"HomePageDetail",
    initialState:{
        isFetched:false,
        "details":{},
        "slider-img":{'gif':''},
        "bg-video":{'video':''}                                             
    },
    reducers:{
        setHomePageWholeDetail:(state,action)=>{
            state.isFetched=true
            state["details"]=action.payload
        },
        setSliderImg:(state,action)=>{
            state['slider-img']=action.payload
        },
        setBgVideo:(state,action)=>{
            state['bg-video']=action.payload
        }

    }
})
export default HomePageSlice.reducer
export const {setHomePageWholeDetail,setGuthiSansthanLogo,setSliderImg,setBgVideo} =HomePageSlice.actions