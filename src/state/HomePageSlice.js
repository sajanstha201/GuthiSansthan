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
        "our-services-img":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
        "contact-us-img":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
        "about-us-img":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
        "articles-img":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''}
    },
    reducers:{
        setHomePageWholeDetail:(state,action)=>{
            state.isFetched=true
            state["details"]=action.payload
        },
        setSliderImg:(state,action)=>{
            state['slider-img'].gif=action.payload
            state['slider-img'].isFetched=true
            state['slider-img'].actualGif=action.payload
            state['slider-img'].id=state['details']['slider-img'].id
        },
        setBgVideo:(state,action)=>{
            state['bg-video']=action.payload
        },
        setFooterBgImg:(state,action)=>{
            state['footer-bg-img']=getImageDetail(action.payload,state['details']['footer-bg-img'].id)
        },
        setOurServicesImg:(state,action)=>{
            state['our-services-img']=getImageDetail(action.payload,state['details']['Our-service-tab'].id)
        },
        setContactUsImg:(state,action)=>{
            
        }

    }
})
export default HomePageSlice.reducer
export const {setHomePageWholeDetail,setGuthiSansthanLogo,setSliderImg,setBgVideo} =HomePageSlice.actions