import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { InstanceDonationSection } from './InstanceDonationSection';
import { OneDonation } from './OneDonation';
import jatraImg from '../../media/DonationPage/image.png';
import tempImg from '../../media/DonationPage/Pashupatinath_temple,kathmandu,Nepal.jpg';
import { setBgImg, setDonationPageWholeDetail, setNewBgImg } from '../../state/DonationPageSlice';
import { addLanguage, fetchImageToURL } from '../ReuseableFunctions';
import { EditBgImage } from '../EditComponents/EditBgImage';
import { showAlert } from '../AlertLoader';
import { setTempleWholeDetail } from '../../state/HomePageSlices/TempleSlice';
import { setParvaPageWholeDetails } from '../../state/ParvaPageSlice';
import { Signin } from '../LoginSignin';

export const DonationPage = () => {
  const isMobile = useMediaQuery('(max-width:800px)');
  const [selectDonateSection, setSelectDonateSection] = useState('');
  const homePageDetail = useSelector(state => state.homePageDetail);
  const globalDetail = useSelector(state => state.globalDetail);
  const donationPageDetail = useSelector(state => state.donationPageDetail);
  const baseUrl = useSelector(state => state.baseUrl).backend;
  const dispatch = useDispatch();
  const templeDetail = useSelector(state => state.templeDetail);
  const parvaDetail = useSelector(state => state.parvaDetail);
  const [isParva, setParva] = useState(true);
  const token = sessionStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      alert('You have to log in first');
      navigate('/sign-in');
    }
  }, [token,]);

  useEffect(() => {
    const fetchParva = async () => {
      try {
        const response = await axios.get(baseUrl + parvaDetail.url);
        dispatch(setParvaPageWholeDetails(response.data));
      } catch (error) {
        console.log(error);
        showAlert(error, 'red');
      }
    };

    if (!parvaDetail.isFetched) fetchParva();
  }, [parvaDetail.url, parvaDetail.isFetched, baseUrl, dispatch]);

  useEffect(() => {
    const fetchTemple = async () => {
      try {
        const response = await axios.get(baseUrl + templeDetail.url);
        dispatch(setTempleWholeDetail(response.data));
        console.log('temple data:', response.data);
      } catch (error) {
        console.error(error);
        showAlert(error, 'red');
      }
    };

    if (!templeDetail.isFetched) fetchTemple();
  }, [templeDetail.url, templeDetail.isFetched, baseUrl, dispatch]);

  useEffect(() => {
    const fetchStaticData = async () => {
      try {
        const response = await axios.get(baseUrl + donationPageDetail.url);
        dispatch(setDonationPageWholeDetail(response.data.components));
        dispatch(setBgImg(await fetchImageToURL(baseUrl + response.data.components['bg-img'].image)));
        console.log(response.data);
      } catch (error) {
        console.log(error);
        showAlert(error, 'red');
      }
    };

    const fetchDynamicData = async () => {
      try {
        const response = await axios.get(baseUrl + donationPageDetail.dynamicUrl);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        showAlert(error, 'red');
      }
    };

    if (!donationPageDetail.isFetched) fetchStaticData();
    if (!donationPageDetail.isDynamicFetched) fetchDynamicData();
  }, [donationPageDetail.url, donationPageDetail.dynamicUrl, donationPageDetail.isFetched, donationPageDetail.isDynamicFetched, baseUrl, dispatch]);

  return (
   <>

   <div className="h-full w-full flex flex-wrap">
      <EditBgImage 
        imageId={donationPageDetail['bg-img'].id} 
        url={donationPageDetail.url} 
        setNewImage={setNewBgImg} 
        isActualUploadedSame={donationPageDetail['bg-img'].imgSrc === donationPageDetail['bg-img'].actualImgSrc}
        >
        <div 
          className="w-full h-full top-0 fixed bg-center bg-cover -z-10" 
          style={{ backgroundImage: `url(${donationPageDetail['bg-img'].imgSrc})` }}
          ></div>
      </EditBgImage>
      <div className="absolute inset-0 bg-neutral-900/50 backdrop-filter-blur blur-sm bg-opacity-50 -z-10"></div>
      <div className="flex flex-col gap-3 mt-5">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1.9 }} 
          className={`${isMobile ? 'gap-5' : 'gap-20'} flex flex-row flex-wrap items-center justify-center w-full`}
          >
          <div onClick={() => setParva(true)}>
            <InstanceDonationSection 
              className='hover:scale-105 transition-all duration-100 ease-in-out animate-pulse' 
              name='jatra' 
              setSelectDonateSection={setSelectDonateSection} 
              bgImg={jatraImg}
              />
          </div>
          <div onClick={() => setParva(false)}>
            <InstanceDonationSection 
              className='hover:scale-105 transition-all duration-100 ease-in-out animate-pulse' 
              name='temple' 
              setSelectDonateSection={setSelectDonateSection} 
              bgImg={tempImg}
              />
          </div>
        </motion.div>
        <div className="w-full flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.5, delay: 0.4 }} 
            className="flex w-[80%] flex-wrap items-center justify-center gap-7 p-3"
            >
        
            {isParva && parvaDetail.details.map(data => (
                <OneDonation 
                key={data.id} 
                name={data.name} 
                detail={data.details} 
                img={data.image} 
                qr={data.qr_code} 
                location={data.location} 
                />
            ))}
            {!isParva && templeDetail.details.map(data => (
                <OneDonation 
                key={data.id} 
                name={data.name} 
                detail={data.details} 
                img={data.image} 
                qr={data.qr_code} 
                location={data.location} 
                />
            ))}
          </motion.div>
        </div>
      </div>
    </div> 
            </>
  );
};
