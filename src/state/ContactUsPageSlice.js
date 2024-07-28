import { createSlice } from "@reduxjs/toolkit";
export const ContactUsPageSlice=createSlice({
    name:"contactUsPage",
    initialState:{
        isFetched:false,
        url:'api/pages/contact-us-page/',
        "bg-img":{imgSrc:"",id:"",actualImgSrc:"",isFetched:false},
        "details":{},
        "extra-image-1":{imgSrc:"",id:"",actualImgSrc:"",isFetched:false},
        "extra-image-2":{imgSrc:"",id:"",actualImgSrc:"",isFetched:false}
    },
    reducers:{
        setContactUsPageWholeDetail:(state,action)=>{
            state.isFetched=true
            state.details=action.payload
        },
        setExtraImage1:(state,action)=>{
            state["extra-image-1"]={
                isFetched:true,
                imgSrc:action.payload,
                actualImgSrc:action.payload,
                id:state.details["extra-image-1"].id
            }
        },
        setExtraImage2:(state,action)=>{
            state["extra-image-2"]={
                isFetched:true,
                imgSrc:action.payload,
                actualImgSrc:action.payload,
                id:state.details["extra-image-2"].id
            }
        },
        setBgImg:(state,action)=>{
            state['bg-img']={
                isFetched:true,
                imgSrc:action.payload,
                actualImgSrc:action.payload,
                id:state.details["bg-image"].id
            }
        },
        setNewBgImg:(state,action)=>{
            if(action.payload) state["bg-img"]["imgSrc"]=action.payload
            else state["bg-img"]["imgSrc"]=state["bg-img"]["actualImgSrc"]
        },
    }
})
export default ContactUsPageSlice.reducer
export const {setContactUsPageWholeDetail,setExtraImage1,setExtraImage2,setBgImg,setNewBgImg}=ContactUsPageSlice.actions