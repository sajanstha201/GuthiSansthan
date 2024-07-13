import logo from './logo.svg';
import './App.css';
import { Footer,HeaderMain } from './components/Navbar';
import { HashRouter as Router, Routes,Route, HashRouter, useLocation } from 'react-router-dom';
import { Testing } from './webpage';
import { AboutUs } from './components/AboutUsPage/AboutUs';
import { HomePage } from './components/HomePage/HomePage';
import { ContactUs } from './webpage/ContactUs';
import { AlertBox, LoaderBox } from './components/AlertLoader';
import { ArticleDisplay } from './components/HomePage/TempleDescription';
import { ServicePage } from './components/ServicePage/ServicePage';
import { Login, Signin } from './components/LoginSignin';
import { MoreDescriptionDiv } from './components/DisplayInfo/MoreDescription';
import bgVideo from './media/HomePage/My Movie.mp4'
function App() {
  const location=useLocation()
  const isFirstPage=location.pathname.startsWith('/')
  return (
    <div className={`App relative ${location.pathname===''?'':''}`}>
      {location.pathname==='/'&&<><video autoPlay loop muted className="video-background absolute inset-0 w-full h-full object-cover">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div></>
      }
      <AlertBox/>
      <LoaderBox/>
      <ArticleDisplay/>
      <MoreDescriptionDiv/>
      {/* <PopInfo information={'hello my name is sajan shrestha'}/> */}
      <HeaderMain/> 
  
      <div className=''> 
          <Routes>
            <Route path='/testing' element={<Testing/>}/>
            <Route path='' element={<HomePage/>}/>
            <Route path='/services' element={<ServicePage/>}/>
            <Route path='/about-us' element={<AboutUs/>}/>
            <Route path='/contact-us' element={<ContactUs/>}/>
            <Route path='/log-in' element={<Login/>}/>
            <Route path='/sign-in' element={<Signin/>}/>
          </Routes>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
