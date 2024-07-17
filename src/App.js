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
import { DonationPage } from './components/DonationPage/DonationPage';
import { ArticleMainSection } from './components/Articles/ArticleMainSection';
function App() {
  const location=useLocation()
  const isFirstPage=location.pathname.startsWith('/')
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
