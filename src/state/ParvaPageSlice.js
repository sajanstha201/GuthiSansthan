import { createSlice } from "@reduxjs/toolkit";

export const ParvaPageSlice=createSlice({
    name:"parvaPageSlice",
    initialState:{
        isFetched:false,
        isDynamicFetched:false,
        dynamicUrl:'api/festivals/',
        dynamicDetails:[],
        url:'api/pages/parva-page',
        details:[],
        "bg-img":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
    },
    reducers:{
        setParvaPageWholeDetails:(state,action)=>{
            state.details=action.payload
            state.isFetched=true;
        },
        setDynamicParvaPageWholeDetails:(state,action)=>{
            state.isDynamicFetched=true
            state.dynamicDetails=action.payload
        },
        setBgImg:(state,action)=>{
            state['bg-img']={
                isFetched:true,
                imgSrc:action.payload,
                id:state.details['parva-page'].id,
                actualImgSrc:action.payload
            }
        },
        setNewBgImg:(state,action)=>{
            if(action.payload) state["bg-img"]["imgSrc"]=action.payload
            else state["bg-img"]["imgSrc"]=state["bg-img"]["actualImgSrc"]
        }
    }
})
export default ParvaPageSlice.reducer
export const {setParvaPageWholeDetails,setDynamicParvaPageWholeDetails,setBgImg,setNewBgImg}=ParvaPageSlice.actions