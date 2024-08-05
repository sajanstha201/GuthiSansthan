import { createSlice } from "@reduxjs/toolkit";

export const TempleSlice=createSlice({
    name:"TeamsSlice",
    initialState:{
        isFetched:false,
        isDynamicFetched:false,
        dynamicUrl:'api/temples/',
        dynamicDetails:[],
        url:'',
        details:[],
    },
    reducers:{
        setTempleWholeDetail:(state,action)=>{
            state.details=action.payload
            state.isFetched=true
        },
        setDynamicTempleWholeDetail:(state,action)=>{
            state.dynamicDetails=action.payload
            state.isDynamicFetched=true
        },
        setImageUrl:(state,action)=>{
            const oldData=state.dynamicDetails
            oldData[action.payload.index].image=action.payload.image
            oldData[action.payload.index]['isImageFetched']=true
            state.dynamicDetails=oldData

        },
        setQRUrl:(state,action)=>{
            const oldData=state.dynamicDetails
            oldData[action.payload.index]['qr_code']=action.payload.qr
            oldData[action.payload.index]['isQRFetched']=true
            state.dynamicDetails=oldData
        }
    }
})
export default TempleSlice.reducer
export const {setTempleWholeDetail,setImageUrl,setQRUrl,setDynamicTempleWholeDetail}=TempleSlice.actions