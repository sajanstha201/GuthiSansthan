import { createSlice } from "@reduxjs/toolkit";

export const ArtilcePageSlice=createSlice({
    name:"articlePage",
    initialState:{
        isFetched:false,
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
        }
    }
})
export default ArtilcePageSlice.reducer
export const {setArticlePageWholeDetail,setBgImg}=ArtilcePageSlice.actions