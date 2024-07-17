import React, { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { NepalFlagSlider } from "./NepalFlagSlider";
import { Link, useLocation } from "react-router-dom";
import homeBgVideo from '../../media/HomePage/My Movie.mp4';
import { HomePageFooter } from "./HomePageFooter/HomePageFooter";
import { useHomePage } from "../../context/PageInfoProvider";
import axios from "axios";
import { useSelector } from "react-redux";
import { showAlert } from "../AlertLoader";
export const HomePage = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width:800px)');
  const location=useLocation();
  const {homePage,setHomePage}=useHomePage()
  const baseUrl=useSelector(state=>state.baseUrl).backend
  useEffect(()=>{
    console.log(baseUrl)
    const fetchHomeData=async ()=>{
      try{
        if(Object.keys(homePage).length===0){
          const response=await axios.get(baseUrl+'api/pages/home-page/')
          const homePageDetail=response.data
          console.log(response.data)
        }
      }
      catch(error){
        console.log(error)
        showAlert(error,'red')
      }

    }
    fetchHomeData();

  },[])
  return (
    <div style={{height:`${isMobile?'calc(100vh - 80px)':'calc(100vh - 100px)'}`}}>
       <video autoPlay loop muted className="top-0video-background absolute inset-0 w-full h-full object-cover -z-30">
        <source src={homeBgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      
      <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
        <NepalFlagSlider />
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'}  gap-4 px-5 w-full`}>
          <Link
            to="/sign-in"
            className={`${
              isMobile ? 'text-xs p-2 px-3' : 'p-3 px-5'
            } no-underline text-white font-bold bg-blue-800 rounded-full cursor-pointer hover:bg-blue-900 z-20`}
          >
            {t('sign-in')}
          </Link>
        </div>
        <HomePageFooter/>
      </div>
    </div>
  );
};
