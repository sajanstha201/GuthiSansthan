import { configureStore } from "@reduxjs/toolkit";
import BaseUrlReducer from './BaseUrlSlice'
import HomePageSlice from "./HomePageSlices/HomePageSlice";
import ServicePageSlice from "./ServicePageSlice";
import AboutUsPageSlice from "./AboutUsPageSlice";
import DonationPageSlice from "./DonationPageSlice";
import GlobalSlice from "./GlobalSlice";
import ParvaSlice from "./HomePageSlices/ParvaSlice";
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
       servicePageDetail:ServicePageSlice,
       aboutUsPageDetail:AboutUsPageSlice,
       donationPageDetail:DonationPageSlice,
       parvaDetail:ParvaSlice,
       teamsDetail:TeamsSlice,
       templeDetail:TempleSlice,
       calenderDetail:CalenderSlice,
       contactUsPageDetail:ContactUsPageSlice,
       articlePageDetail:ArticlePageSlice
    }
})