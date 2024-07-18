import { configureStore } from "@reduxjs/toolkit";
import BaseUrlReducer from './BaseUrlSlice'
import HomePageSlice from "./HomePageSlice";
import ServicePageSlice from "./ServicePageSlice";
import AboutUsPageSlice from "./AboutUsPageSlice";
import DonationPageSlice from "./DonationPageSlice";
import GlobalSlice from "./GlobalSlice";
export const store=configureStore({
    reducer:{
       baseUrl:BaseUrlReducer,
       globalDetail:GlobalSlice,
       homePageDetail:HomePageSlice,
       servicePageDetail:ServicePageSlice,
       aboutUsPageDetail:AboutUsPageSlice,
       donationPageDetail:DonationPageSlice,
    }
})