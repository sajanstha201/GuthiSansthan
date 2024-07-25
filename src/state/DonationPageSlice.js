import { createSlice } from "@reduxjs/toolkit";

export const DonationPageSlice=createSlice({
    name:"DonationPageSlice",
    initialState:{
        isFetched:false,
        url:'api/donations/'
        
    },
    reducers:{
        setDonationpage:(state,action)=>{
            state=action.payload
        }
    }
})
export default DonationPageSlice.reducer
export const {setDonationpage}=DonationPageSlice.actions