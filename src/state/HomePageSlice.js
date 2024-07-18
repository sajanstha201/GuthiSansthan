import { createSlice } from "@reduxjs/toolkit";

export const HomePageSlice=createSlice({
    name:"HomePageDetail",
    initialState:{
        "guthi-sanstha-logo":{logo:'sajan shrrslkasjl'},
        "lng-logo":{},
        "slider-img":{},
        "welcome-to-guthisansthan":{},
        "bg-video":{}
    },
    reducers:{
        setGuthiSansthanLogo:(state,action)=>{
            state["guthi-sanstha-logo"]=action.payload
        }
    }
})
export default HomePageSlice.reducer
export const {setGuthiSansthanLogo} =HomePageSlice.actions