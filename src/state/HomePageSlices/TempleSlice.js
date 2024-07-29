import { createSlice } from "@reduxjs/toolkit";

export const TempleSlice=createSlice({
    name:"TeamsSlice",
    initialState:{
        isFetched:false,
        url:'api/temples',
        details:[],
    },
    reducers:{
        setTempleWholeDetail:(state,action)=>{
            state.details=action.payload
            state.isFetched=true
        }
    }
})
export default TempleSlice.reducer
export const {setTempleWholeDetail}=TempleSlice.actions