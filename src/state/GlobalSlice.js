import { createSlice } from "@reduxjs/toolkit";

export const GlobalSlice=createSlice({
    name:'globalSlice',
    initialState:{
        isFetched:false,
        url:'api/global-components/',
        "details":{},
        "guthi-sansthan-logo":{'imgSrc':'','id':'','actualImgSrc':''},
        "lng-logo":{
            "nepali-lng-chg": {
                "id": 1,
                "name": "nepali-lng-chg",
                "component_type": "image",
                "image": "/media/global_component_image/NepalFlag.png",
                "text": {},
                "video": null,
                "styling": null
            },
            "newari-lng-chg": {
                "id": 2,
                "name": "newari-lng-chg",
                "component_type": "image",
                "image": "/media/global_component_image/NewariFlag.png",
                "text": {},
                "video": null,
                "styling": null
            },
            "english-lng-chg": {
                "id": 3,
                "name": "english-lng-chg",
                "component_type": "image",
                "image": "/media/global_component_image/EnglishFlag.png",
                "text": {},
                "video": null,
                "styling": null
            },
            "mithila-lng-chg": {
                "id": 4,
                "name": "mithila-lng-chg",
                "component_type": "image",
                "image": "/media/global_component_image/MithilaFlag_VkTeQKY.png",
                "text": {},
                "video": null,
                "styling": null
            }
        },
    },
    reducers:{
        setGlobalWholeDetail:(state,action)=>{
            state.isFetched=true
            state["details"]=action.payload
        },
        setGuthiSansthanLogo:(state,action)=>{
            state["guthi-sansthan-logo"]=action.payload
            state["guthi-sansthan-logo"]["actualImgSrc"]=action.payload.imgSrc
        },
        setLngLogo:(state,action)=>{
            state['lng-logo']=action.payload
        },
        setNewGuthiSansthanLogo:(state,action)=>{
            if(action.payload){
                state["guthi-sansthan-logo"]["imgSrc"]=action.payload
            }
            else{
                state["guthi-sansthan-logo"]["imgSrc"]=state["guthi-sansthan-logo"]["actualImgSrc"]
            }
        }
    }
})
export default GlobalSlice.reducer
export const {setGlobalWholeDetail,setGuthiSansthanLogo,setLngLogo,setNewGuthiSansthanLogo}=GlobalSlice.actions