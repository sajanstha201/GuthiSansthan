import { configureStore } from "@reduxjs/toolkit";
import BaseUrlReducer from './BaseUrlSlice'
import HomePageSlice from "./HomePageSlice";
import ServicePageSlice from "./ServicePageSlice";
import AboutUsPageSlice from "./AboutUsPageSlice";
import DonationPageSlice from "./DonationPageSlice";
export const store=configureStore({
    reducer:{
       baseUrl:BaseUrlReducer,
       homePageDetail:HomePageSlice,
       servicePageDetail:ServicePageSlice,
       aboutUsPageDetail:AboutUsPageSlice,
       donationPageDetail:DonationPageSlice,
    }
})