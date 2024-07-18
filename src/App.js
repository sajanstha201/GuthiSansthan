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
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setGlobalWholeDetail, setLngLogo } from './state/GlobalSlice';
import { setGuthiSansthanLogo } from './state/HomePageSlice';
function App() {
  const location=useLocation()
  const baseUrl=useSelector(state=>state.baseUrl).backend
  const globalDetail=useSelector(state=>state.globalDetail)
  const dispact=useDispatch()
  useEffect(()=>{
    const fetchGlobalData=async()=>{
      try{
        const response=await axios.get(baseUrl+'api/global-components/get-all-components/')
        console.log(response.data)
        dispact(setGlobalWholeDetail(response.data))
        dispact(setGuthiSansthanLogo(response.data['guthi-sanstha-logo']))
        dispact(setLngLogo(response.data['lng-logo']))
      }
      catch(error){
        console.log(error)
        showAlert(error,'red')
      }
    }
    if(!globalDetail.isFetched){
      fetchGlobalData()
    }
  },[])
  return (
    <div className={`App relative ${location.pathname===''?'':''}`}>
    
      <AlertBox/>
      <LoaderBox/>
      <ArticleDisplay/>
      <MoreDescriptionDiv/>
      {/* <PopInfo information={'hello my name is sajan shrestha'}/> */}
      <HeaderMain/> 
      <div > 
          <Routes>
            <Route path='/testing' element={<Testing/>}/>
            <Route path='' element={<HomePage/>}/>
            <Route path='/services' element={<ServicePage/>}/>
            <Route path='/about-us' element={<AboutUs/>}/>
            <Route path='/contact-us' element={<ContactUs/>}/>
            <Route path='/log-in' element={<Login/>}/>
            <Route path='/sign-in' element={<Signin/>}/>
            <Route path='/donation' element={<DonationPage/>}/>
            <Route path='/articles' element={<ArticleMainSection/>}/>
          </Routes>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
