import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next"; 
import { setBgImg, setNewBgImg, setServicePageWholeDetail } from "../../state/ServicePageSlice";
import { addLanguage, fetchImageToURL } from "../ReuseableFunctions";
import { EditBgImage } from "../EditComponents/EditBgImage";
import { showAlert } from "../AlertLoader";
import { useEditing } from "../../context/EditingProvider";
import { ServiceAddition } from "./ServiceAddition";
import { InstanceService } from "./InstanceService";
import img from '../../media/AboutUsPage/Janaki_temple_in_Nepal.jpeg';

export const ServicePage = () => {
  const servicePageDetail = useSelector(state => state.servicePageDetail);
  const isMobile = useMediaQuery('(max-width:800px)');
  const baseUrl = useSelector(state => state.baseUrl).backend;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isEditing } = useEditing();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl + servicePageDetail.url);
        dispatch(setServicePageWholeDetail(response.data.components));
        dispatch(setBgImg(await fetchImageToURL(baseUrl + response.data.components['our-services'].image)));
        addLanguage({ key: 'our-services', lngs: response.data.components['our-services'].text });
      } catch (error) {
        console.error(error);
        showAlert(error, 'red');
      }
    };

    if (!servicePageDetail.isFetched) {
      fetchData();
    }
  }, [baseUrl, dispatch, servicePageDetail.isFetched, servicePageDetail.url]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = [
    {
      image: img,
      name: "Sajan",
      des: "This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles."
    },
    {
      image: img,
      name: "Sajan",
      des: "This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles."
    },
    {
      image: img,
      name: "Sajan",
      des: "This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles."
    },
    {
      image: img,
      name: "Sajan",
      des: "This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles."
    },
    {
      image: img,
      name: "Sajan",
      des: "This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles."
    },
    // Repeat data objects as needed
  ];

  return (
    <div className="">
      <EditBgImage 
        imageId={servicePageDetail['bg-img'].id} 
        url={servicePageDetail.url} 
        setNewImage={setNewBgImg} 
        isActualUploadedSame={servicePageDetail['bg-img'].imgSrc === servicePageDetail['bg-img'].actualImgSrc}
      >
        <div 
          style={{ backgroundImage: `url(${servicePageDetail['bg-img'].imgSrc})` }} 
          className="fixed w-full h-screen bg-cover bg-center top-0 -z-20 blur-[1px] "
        ></div>
      </EditBgImage>
      <div className="fixed w-full h-screen bg-cover bg-right-bottom top-0 -z-10 blur-[1px] bg-black/50"></div>
      <div className="text-[60px] text-white font-bold h-[30vh] flex items-center justify-center">
        <div className="z-1 text-white">{t('our-services')}</div>
      </div>
      <div className='flex w-full items-center justify-center'>
        {isMobile && (
          <Slider className="bg-black/40 flex justify-center px-4 w-full" {...settings}>
            {data.map((d, index) => (
              <div className="flex w-full item-center justify-center pl-16" key={index}>
                <InstanceService className="hover:scale-95" image={d.image} name={d.name} des={d.des} />
              </div>
            ))}
          </Slider>
        )}
        {!isMobile && (
          <div className="w-[90%] flex flex-wrap gap-10 justify-center rounded-xl">
            {data.map((d, index) => (
              <InstanceService className="hover:scale-95" key={index} image={d.image} name={d.name} des={d.des} />
            ))}
            {isEditing && <ServiceAddition />}
          </div>
        )}
      </div>
    </div>
  );
};
