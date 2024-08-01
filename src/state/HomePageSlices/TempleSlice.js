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
        }
    }
})
export default TempleSlice.reducer
export const {setTempleWholeDetail,setDynamicTempleWholeDetail}=TempleSlice.actions