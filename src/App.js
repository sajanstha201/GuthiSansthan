import logo from './logo.svg';
import './App.css';
import { Footer,HeaderMain } from './components/Navbar';
import { HashRouter as Router, Routes,Route, HashRouter, useLocation } from 'react-router-dom';
import { AboutUs, Testing } from './webpage';
import { HomePage } from './components/HomePage/HomePage';
import { ContactUs } from './webpage/ContactUs';
import { AlertBox, LoaderBox } from './components/AlertLoader';
import { ArticleDisplay } from './components/HomePage/TempleDescription';
import { ServicePage } from './components/ServicePage/ServicePage';
function App() {
  const location=useLocation()
  const isFirstPage=location.pathname.startsWith('/')
  return (
    <div className="App ">
      <AlertBox/>
      <LoaderBox/>
      <ArticleDisplay/>
      {/* <PopInfo information={'hello my name is sajan shrestha'}/> */}
      <HeaderMain/> 
  
      <div className=''> 
          <Routes>
            <Route path='/testing' element={<Testing/>}/>
            <Route path='' element={<HomePage/>}/>
            <Route path='/services' element={<ServicePage/>}/>
            <Route path='/about-us' element={<AboutUs/>}/>
            <Route path='/contact-us' element={<ContactUs/>}/>
          </Routes>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
