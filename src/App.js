import './App.css';
import { HeaderMain } from './components/Navbar';
import {  Routes,Route,  useLocation } from 'react-router-dom';
import { Testing } from './webpage';
import { AboutUs } from './components/AboutUsPage/AboutUs';
import { HomePage } from './components/HomePage/HomePage';
import { ContactUs } from './webpage/ContactUs';
import { AlertBox, LoaderBox, showAlert } from './components/AlertLoader';
import { ArticleDisplay } from './components/HomePage/TempleDescription';
import { ServicePage } from './components/ServicePage/ServicePage';
import { Login, Signin } from './components/LoginSignin';
import { MoreDescriptionDiv } from './components/DisplayInfo/MoreDescription';
import { DonationPage } from './components/DonationPage/DonationPage';
import { ArticleMainSection } from './components/Articles/ArticleMainSection';
import './i18n'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setGlobalWholeDetail, setLngLogo ,setGuthiSansthanLogo} from './state/GlobalSlice';
import { fetchImageToURL } from './components/ReuseableFunctions';
import Profile from './components/User/Profile';
import JatraMain from './components/JatrasForm/JatraMain';
import DonationForm from './components/DonationPage/Donationform/DonationForm';
import { ArticleAddition } from './components/Articles/ArticleAddition/ArticleAddition';
import { NoticeAddition } from './components/Articles/ArticleAddition/NoticeAddition';
import { ShowArticle } from './components/Articles/ArticleSection/ShowArticle';
import { ShowNotice } from './components/Articles/NoticeSection/ShowNotice';
function App() {
  const location=useLocation()
  const baseUrl=useSelector(state=>state.baseUrl).backend
  const globalDetail=useSelector(state=>state.globalDetail)
  const dispact=useDispatch()
  useEffect(()=>{
    const fetchGlobalData=async()=>{
      try{
        const response=await axios.get(baseUrl+globalDetail.url)
        dispact(setGlobalWholeDetail(response.data))
        dispact(setGuthiSansthanLogo({'imgSrc':await fetchImageToURL(baseUrl+response.data['guthi-sansthan-logo'].image),'id':response.data['guthi-sansthan-logo'].id}))
        const lngLogo={}
        await Promise.all(Object.entries(response.data['lng-logo']).map(async([key,value])=>{
          lngLogo[key.split('-')[0]]=await fetchImageToURL(baseUrl+value.image)
        }))
        dispact(setLngLogo(lngLogo))
      }
      catch(error){
        console.log(error)
        showAlert(error,'red')
      }
    }
    if(!globalDetail.isFetched) fetchGlobalData()
  },[])
  return (
    <div className={`App relative ${location.pathname===''?'':''}`}>
      <AlertBox/>
      <LoaderBox/>
      <ArticleDisplay/>
      <MoreDescriptionDiv/>
      {/* <PopInfo information={'hello my name is sajan shrestha'}/> */}
      <HeaderMain/> 
      <div className={`${location.pathname==='/'?'':'mb-[100px]'} `}> 
          <Routes>
            <Route path='/testing' element={<Testing/>}/>
            <Route path='' element={<HomePage/>} />
            <Route path='/services' element={<ServicePage/>}/>
            <Route path='/about-us' element={<AboutUs/>}/>
            <Route path='/contact-us' element={<ContactUs/>}/>
            <Route path='/log-in' element={<Login/>}/>
            <Route path='/sign-in' element={<Signin/>}/>
            <Route path='/donation' element={<DonationPage/>}/>
            <Route path='/articles' element={<ArticleMainSection/>}/>
            <Route path='/show-article' element={<ShowArticle/>}/>
            <Route path='/show-notice' element={<ShowNotice/>}/>

            <Route path='/user' element={<Profile/>} />
            <Route path='/jatra-form' element={<JatraMain/>}/>
            <Route path='/donation-form' element={<DonationForm/>}/>
            <Route path='/super-user/add-articles' element={<ArticleAddition/>}/>
            <Route path='/super-user/add-notices' element={<NoticeAddition/>}/>
          </Routes>
         
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
