import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
function getImageDetail(url,id){
    return(
        {
            isFetched:true,
            imgSrc:url,
            id:id,
            actualImgSrc:url
        }
    )
}
export const HomePageSlice=createSlice({
    name:"HomePageDetail",
    initialState:{
        isFetched:false,
        url:'api/pages/home-page/',
        "details":{},
        "slider-img":{isFetched:false,gif:'',id:'',actualGif:''},
        "bg-video":{isFetched:false,video:'',id:'',actualVideo:''},
        "footer-bg-img":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
        "Our-service-tab":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
        "Contact-us-tab":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
        "About-us-tab":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
        "Article-tab":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''}
    },
    reducers:{
        setHomePageWholeDetail:(state,action)=>{
            state.isFetched=true
            state["details"]=action.payload
        },
        setSliderImg:(state,action)=>{
            state['slider-img']={
                isFetched:true,
                gif:action.payload,
                actualGif:action.payload,
                id:state['details']['slider-img'].id
            }
        },
        setNewSliderImg:(state,action)=>{
            if(action.payload==="") state['slider-img'].gif=state['slider-img'].actualGif
            else state['slider-img'].gif=action.payload
        },
        setBgVideo:(state,action)=>{
            state['bg-video']={
                video:action.payload,
                actualVideo:action.payload,
                id:state.details['bg-video'].id,
                isFetched:true
            }
        },
        setNewBgVideo:(state,action)=>{
            if(action.payload) state['bg-video'].video=action.payload
            else state['bg-video'].video=state['bg-video'].actualVideo
        },
        setTabDetail:(state,action)=>{
            state[action.payload.name]=getImageDetail(action.payload.detail,state['details'][action.payload.name].id)
        },
        setNewTabDetail:(state,action)=>{
            if(action.payload.detail) state[action.payload.name].imgSrc=action.payload.detail
            else state[action.payload.name].imgSrc=state[action.payload.name].actualImgSrc
        },
        setFooterBgImg:(state,action)=>{
            state['footer-bg-img']={
                isFetched:true,
                imgSrc:action.payload,
                id:state.details['footer-bg-img'].id,
                actualImgSrc:action.payload
            }
        },
        setNewFooterBgImg:(state,action)=>{
            if(action.payload) state['footer-bg-img'].imgSrc=action.payload
            else state['footer-bg-img'].imgSrc=state['footer-bg-img'].actualImgSrc
        },
    }
})
export default HomePageSlice.reducer
export const {setHomePageWholeDetail,setGuthiSansthanLogo,setSliderImg,setBgVideo,setFooterBgImg,setTabDetail,setNewTabDetail,setNewFooterBgImg,setNewBgVideo} =HomePageSlice.actions