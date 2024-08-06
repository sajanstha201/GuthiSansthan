import './App.css';
import { HeaderMain } from './components/Navbar';
import {  Routes,Route,  useLocation } from 'react-router-dom';
import { Testing } from './webpage';
import { AboutUs } from './components/AboutUsPage/AboutUs';
import { HomePage } from './components/HomePage/HomePage';
import { ContactUs } from './webpage/ContactUs';
import { AlertBox, LoaderBox, showAlert } from './components/AlertLoader';
import { ArticleDisplay } from './components/HomePage/TempleDescription';
import { Login, Signin } from './components/LoginSignin';
import { MoreDescriptionDiv } from './components/DisplayInfo/MoreDescription';
import { ArticleMainSection } from './components/Articles/ArticleMainSection';
import './i18n'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setGlobalWholeDetail, setLngLogo ,setGuthiSansthanLogo} from './state/GlobalSlice';
import { fetchImageToURL } from './components/ReuseableFunctions';
import Profile from './components/User/Profile';
import JatraMain from './components/JatrasForm/JatraMain';
import { ArticleAddition } from './components/Articles/ArticleAddition/ArticleAddition';
import { NoticeAddition } from './components/Articles/ArticleAddition/NoticeAddition';
import { ShowArticle } from './components/Articles/ArticleSection/ShowArticle';
import { ShowNotice } from './components/Articles/NoticeSection/ShowNotice';
import NoticeForm from './components/Articles/NoticeSection/NoticeForm';
import { Parva } from './components/Parva/Parva';
import Popup from "./components/HomePage/Popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import EmployeeDetailsMain from './components/EmployeeDetails/EmployeeDetailsMain';
import AddBranches from './Branches/AddBranches';
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
          lngLogo[key.split('-')[0]]=await fetchImageToURL(baseUrl+value.image.substr(1))
        }))
        dispact(setLngLogo(lngLogo))
      }
      catch(error){
        console.log(error)
        showAlert(error,'red')
      }
    }
    if(!globalDetail.isFetched) fetchGlobalData()
      setPopup(true)
  },[])
  const[popup,setPopup]=useState(false)
 
  return (
    
    <div className={`App relative ${location.pathname===''?'':''}`}>
           {popup &&

<div className="fixed flex justify-center  w-full bg-black/30 items-center z-50 h-screen">

          <div className=" relative w-[90%] h-[80%] rounded-md bg-red-400 z-50 ">
                  
                  <FontAwesomeIcon
                                    icon={faClose}
                                    size={'2x'}
                                    className="cursor-pointer absolute top-0 right-3 text-red-600 "
                                    onClick={() => setPopup(false)}
                                    />
                                    <Popup/>
                  </div>
          </div>}
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
            <Route path='/about-us' element={<AboutUs/>}/>
            <Route path='/contact-us' element={<ContactUs/>}/>
            <Route path='/log-in' element={<Login/>}/>
            <Route path='/sign-up' element={<Signin/>}/>
            <Route path='/articles' element={<ArticleMainSection/>}/>
            <Route path='/show-article' element={<ShowArticle/>}/>
            <Route path='/show-notice' element={<ShowNotice/>}/>

            <Route path='/user' element={<Profile/>} />
            <Route path='/jatra-form' element={<JatraMain/>}/>
            <Route path='/parva' element={<Parva/>}/>
            <Route path='/employee-details' element={<EmployeeDetailsMain/>}/>
            <Route path='/super-user/add-articles' element={<ArticleAddition/>}/>
            <Route path='/super-user/add-notices' element={<NoticeAddition/>}/>
            <Route path='/notice-form' element={<NoticeForm/>}/>
            <Route path='/add-branch' element={<AddBranches/>}/>
          </Routes>
         
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
