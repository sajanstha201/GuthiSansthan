import React, { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { NepalFlagSlider } from "./NepalFlagSlider/NepalFlagSlider";
import { Link } from "react-router-dom";
import { HomePageFooter } from "./HomePageFooter/HomePageFooter";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "../AlertLoader";
import i18next from "i18next";
import { addLanguage, fetchBgVideoToUrl, fetchImageToURL } from "../ReuseableFunctions";
import { setBgVideo, setHomePageWholeDetail, setNewBgVideo } from "../../state/HomePageSlices/HomePageSlice";
import { EditBgHome } from "../EditComponents/EditBgHome";
import { useEditing } from "../../context/EditingProvider";

export const HomePage = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width:800px)');
  const baseUrl = useSelector(state => state.baseUrl).backend;
  const homePageDetail = useSelector(state => state.homePageDetail);
  const dispatch = useDispatch();
  const { isEditing } = useEditing();
  const token = sessionStorage.getItem('token');
  console.log(homePageDetail)
  const fetchHomeData = async () => {
    try {
      const response = await axios.get(baseUrl + homePageDetail.url);
      const data = response.data.components;
      console.log('response ',response.data)
      dispatch(setHomePageWholeDetail(data));
      if (data['welcome-to-guthi-sansthan'] && data['welcome-to-guthi-sansthan'].text) {
        addLanguage({ key: 'welcome-to-guthi-sansthan', lngs: data['welcome-to-guthi-sansthan'].text });
      }
      console.log(data)
        if (data['bg-video']['component_type']==='image') {
          console.log('this is bg image')
          // const imageUrl = await fetchImageToURL(baseUrl + data['bg-video'].image);
          dispatch(setBgVideo({url:baseUrl + data['bg-video'].image.substr(1),isVideo:false,isImage:true,actualFile:null}));
        } else{
          console.log('this is bg video')
          // const videoUrl = await fetchBgVideoToUrl(baseUrl + data['bg-video'].video);
          dispatch(setBgVideo({url:baseUrl + data['bg-video'].video.substr(1),isVideo:true,isImage:false,actualFile:null}));
        }
    } catch (error) {
      console.log(error);
      showAlert(error, 'red');
    }
  };
  useEffect(() => {
    if (!homePageDetail.isFetched) fetchHomeData();
  }, [baseUrl, dispatch, homePageDetail.isFetched]);

  return (
    <div style={{ height: `${isMobile ? 'calc(100vh - 80px)' : 'calc(100vh - 100px)'}` }}>
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-20 -z-10"></div>

      <div style={{ height: `${isEditing ? 'calc(100vh - 100px)' : '100%'}` }} className="flex flex-col items-center justify-start h-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 -z-10"></div>
        <marquee className="w-full bg-red-500/40 backdrop-blur-sm py-2 text-white font-semibold">
          At Guthi Sanstha, we honor the rich cultural heritage and philanthropic spirit of Nepal. Founded with the vision to preserve and promote our ancient traditions, our organization is dedicated to the management and development of traditional Guthis—sacred trusts that sustain our cultural, religious, and social practices.

          With a deep-rooted commitment to nurturing the values of community, spirituality, and heritage, Guthi Sanstha undertakes the stewardship of Guthi properties, supports charitable activities, and fosters educational and cultural programs. Our mission is to ensure the vitality of our cultural legacies while addressing contemporary needs and challenges.

          Join us in our journey to uphold the legacy of our ancestors and contribute to a thriving, culturally enriched society.
        </marquee>

        <div style={{ height: `${isEditing ? 'calc(100vh - 100px)' : '100%'}` }} className="w-full flex flex-col items-center justify-start h-full relative overflow-hidden">
            <EditBgHome fetchHomeData={fetchHomeData} imageId={homePageDetail['bg-video'].id} url={homePageDetail['bg-video'].video} setNewImage={setNewBgVideo} isActualUploadedSame={homePageDetail['bg-video'].video === homePageDetail['bg-video'].actualVideo}>
              {homePageDetail['bg-video'].isImage&&<div className='bg-cover bg-center fixed -z-10 w-full h-screen top-0' style={{ backgroundImage: `url(${homePageDetail['bg-video'].url})` }}></div>}
               {homePageDetail['bg-video'].isVideo&&
               <>
                  <video
                    key={homePageDetail['bg-video'].id}
                    autoPlay
                    loop
                    muted
                    className="top-0 video-background fixed inset-0 w-full h-screen object-cover -z-30"
                  >
                    <source src={homePageDetail['bg-video'].url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
               </>}

            </EditBgHome>

          <NepalFlagSlider />
          <HomePageFooter />
        </div>
      </div>
    </div>
  );
};
