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
            state['bg-video']=action.payload
        },
        setTabDetail:(state,action)=>{
            state[action.payload.name]=getImageDetail(action.payload.detail,state['details'][action.payload.name].id)
        },
        setFooterBgImg:(state,action)=>{
            state['footer-bg-img']={
                isFetched:true,
                imgSrc:action.payload,
                id:state.details['footer-bg-img'].id,
                actualImgSrc:action.payload
            }
        }
    }
})
export default HomePageSlice.reducer
export const {setHomePageWholeDetail,setGuthiSansthanLogo,setSliderImg,setBgVideo,setFooterBgImg,setTabDetail} =HomePageSlice.actions