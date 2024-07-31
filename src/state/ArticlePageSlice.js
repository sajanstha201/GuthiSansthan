import { createSlice } from "@reduxjs/toolkit";

export const ArtilcePageSlice=createSlice({
    name:"articlePage",
    initialState:{
        isFetched:false,
        isDynamicFetched:false,
        dynamicDetail:[],
        dynamicUrl:'api/article',
        details:{},
        url:'api/pages/articles-page/',
        "bg-img":{imgSrc:'',actualImgSrc:'',id:'',isFetched:false}
    },
    reducers:{
        setArticlePageWholeDetail:(state,action)=>{
            state.isFetched=true;
            state.details=action.payload
        },
        setBgImg:(state,action)=>{
            state['bg-img']={
                imgSrc:action.payload,
                actualImgSrc:action.payload,
                id:state.details['bg-img'].id,
                isFetched:true
            }
        },
        setNewBgImg:(state,action)=>{
            if(action.payload) state["bg-img"]["imgSrc"]=action.payload
            else state["bg-img"]["imgSrc"]=state["bg-img"]["actualImgSrc"]
        },
        setArticlePageDynamicContent:(state,action)=>{
            state.dynamicDetail=action.payload
        }
    }
})
export default ArtilcePageSlice.reducer
export const {setArticlePageWholeDetail,setBgImg,setNewBgImg,setArticlePageDynamicContent}=ArtilcePageSlice.actions