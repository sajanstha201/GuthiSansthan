import { createSlice } from "@reduxjs/toolkit";

export const AboutUsPageSlice=createSlice({
    name:"AboutUsPageSlice",
    initialState:{
        isFetched:false,
        url:'api/pages/about-us/',
        details:{},
        "bg-img":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
        "introduction-tab":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
        "historical-background-tab":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
        "rights-and-duties-tab":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
        "organizational-structure-tab":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
        "objectives-tab":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
    },
    reducers:{
        setAboutUsPageWholeDetail:(state,action)=>{
            state.details=action.payload
            state.isFetched=true;
        },
        setAboutUsPage:(state,action)=>{
            state=action.payload
        },
        setBgImg:(state,action)=>{
            state['bg-img']={
                isFetched:true,
                imgSrc:action.payload,
                id:state.details['about-us'].id,
                actualImgSrc:action.payload
            }
        },
        setNewBgImg:(state,action)=>{
            if(action.payload) state["bg-img"]["imgSrc"]=action.payload
            else state["bg-img"]["imgSrc"]=state["bg-img"]["actualImgSrc"]
        },
        setImgTab:(state,action)=>{
            state[action.payload.name].isFetched=true;
            state[action.payload.name]={
                isFetched:true,
                imgSrc:action.payload.detail,
                id:state.details[action.payload.name].id,
                actualImgSrc:action.payload.detail
            }
        }
    }
})
export default AboutUsPageSlice.reducer
export const {setAboutUsPageWholeDetail,setBgImg,setImgTab,setNewBgImg}=AboutUsPageSlice.actions