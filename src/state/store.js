import { configureStore } from "@reduxjs/toolkit";
import BaseUrlReducer from './BaseUrlSlice'
import HomePageSlice from "./HomePageSlice";
import ServicePageSlice from "./ServicePageSlice";
import AboutUsPageSlice from "./AboutUsPageSlice";
import DonationPageSlice from "./DonationPageSlice";
import GlobalSlice from "./GlobalSlice";
import ParvaSlice from "./ParvaSlice";
import TeamsSlice from "./TeamsSlice";
import CalenderSlice from "./CalenderSlice";
import ContactUsPageSlice from "./ContactUsPageSlice";
import ArticlePageSlice from "./ArticlePageSlice";
export const store=configureStore({
    reducer:{
       baseUrl:BaseUrlReducer,
       globalDetail:GlobalSlice,
       homePageDetail:HomePageSlice,
       servicePageDetail:ServicePageSlice,
       aboutUsPageDetail:AboutUsPageSlice,
       donationPageDetail:DonationPageSlice,
       parvaDetail:ParvaSlice,
       teamsDetail:TeamsSlice,
       calenderDetail:CalenderSlice,
       contactUsPageDetail:ContactUsPageSlice,
       articlePageDetail:ArticlePageSlice
    }
})