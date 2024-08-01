import { configureStore } from "@reduxjs/toolkit";
import BaseUrlReducer from './BaseUrlSlice'
import HomePageSlice from "./HomePageSlices/HomePageSlice";
import ServiceSlice from "./HomePageSlices/ServiceSlice";
import AboutUsPageSlice from "./AboutUsPageSlice";
import DonationPageSlice from "./DonationPageSlice";
import GlobalSlice from "./GlobalSlice";
import ParvaPageSlice from "./ParvaPageSlice";
import TeamsSlice from "./HomePageSlices/TeamsSlice";
import CalenderSlice from "./HomePageSlices/CalenderSlice";
import ContactUsPageSlice from "./ContactUsPageSlice";
import ArticlePageSlice from "./ArticlePageSlice";
import TempleSlice from "./HomePageSlices/TempleSlice";
export const store=configureStore({
    reducer:{
       baseUrl:BaseUrlReducer,
       globalDetail:GlobalSlice,
       homePageDetail:HomePageSlice,
       serviceDetail:ServiceSlice,
       aboutUsPageDetail:AboutUsPageSlice,
       donationPageDetail:DonationPageSlice,
       parvaPageDetail:ParvaPageSlice,
       teamsDetail:TeamsSlice,
       templeDetail:TempleSlice,
       calenderDetail:CalenderSlice,
       contactUsPageDetail:ContactUsPageSlice,
       articlePageDetail:ArticlePageSlice
    }
})