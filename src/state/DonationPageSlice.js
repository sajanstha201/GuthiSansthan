import { createSlice } from "@reduxjs/toolkit";

export const DonationPageSlice=createSlice({
    name:"DonationPageSlice",
    initialState:{
        isFetched:false,
        isDynamicFetched:false,
        dynamicUrl:'donation/',
        dynamicDetail:[],
        url:'api/pages/donation-page/',
        details:{},
        "bg-img":{imgSrc:"",actualImgSrc:"",id:'',isFetched:false}
    },
    reducers:{
        setDonationPageWholeDetail:(state,action)=>{
            state.details=action.payload
            state.isFetched=true
        },
        setDonationPageDynamicDetail:(state,action)=>{
            state.dynamicDetail=action.payload
            state.isDynamicFetched=true
        },
        setBgImg:(state,action)=>{
            state["bg-img"]={
                isFetched:true,
                imgSrc:action.payload,
                actualImgSrc:action.payload,
                id:state.details['bg-img'].id
            }
        },
        setNewBgImg:(state,action)=>{
            if(action.payload) state["bg-img"]["imgSrc"]=action.payload
            else state["bg-img"]["imgSrc"]=state["bg-img"]["actualImgSrc"]
        }
    }
})
export default DonationPageSlice.reducer
export const {setDonationPageWholeDetail,setBgImg,setNewBgImg}=DonationPageSlice.actions