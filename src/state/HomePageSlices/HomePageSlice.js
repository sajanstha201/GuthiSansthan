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
        "bg-video":{isFetched:false,url:'',id:'',actualUrl:'',isVideo:false,isImage:false,prevUrl:''},
        "footer-bg-img":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
        "Parav-tab":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
        "Contact-us-tab":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
        "About-us-tab":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
        "Article-tab":{isFetched:false,imgSrc:'',id:'',actualImgSrc:''},
        "welcome-to-guthi-sansthan":{id:'',text:{'nepali':'','english':'','newari':'','mithila':''},styling:{'bold':false,'fontSize':12,'italic':false,'color':'#FFFFFF','underline':false}}
    },
    reducers:{
        setWelcomeToGuthiSansthan:(state,action)=>{
            state['welcome-to-guthi-sansthan'].id=action.payload.id
            state['welcome-to-guthi-sansthan'].text=action.payload.text
            state['welcome-to-guthi-sansthan'].styling=action.payload.styling
        },
        setNewWelcomeToGuthiSansthan:(state,action)=>{
            state['welcome-to-guthi-sansthan'].text=action.payload.text
            state['welcome-to-guthi-sansthan'].styling=action.payload.styling
        },
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
            if(action.payload) state['slider-img'].gif=action.payload 
            else state['slider-img'].gif=state['slider-img'].actualGif
        },
        setBgVideo:(state,action)=>{
            const data={
                url:action.payload.url,
                actualUrl:action.payload.url,
                id:state.details['bg-video'].id,
                isFetched:true,
                isVideo:action.payload.isVideo,
                isImage:action.payload.isImage,
                prevUrl:action.payload.isVideo?'video':'image'
            }
            state['bg-video']=data
        },
        setNewBgVideo:(state,action)=>{
            console.log('action payload',action.payload)
            if(action.payload){
                state['bg-video'].url=action.payload.url
                state['bg-video'].isVideo=action.payload.isVideo
                state['bg-video'].isImage=action.payload.isImage
            } 
            else{
                state['bg-video'].url=state['bg-video'].actualUrl
                state['bg-video'].isVideo=state['bg-video'].prevUrl==='video'
                state['bg-video'].isImage=state['bg-video'].prevUrl==='image'
            } 
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
export const {setHomePageWholeDetail,setGuthiSansthanLogo,setNewWelcomeToGuthiSansthan,setNewSliderImg,setSliderImg,setBgVideo,setFooterBgImg,setTabDetail,setNewTabDetail,setNewFooterBgImg,setNewBgVideo,setWelcomeToGuthiSansthan} =HomePageSlice.actions