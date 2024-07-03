import logo from './logo.svg';
import './App.css';
import { TempleDispalyMain } from './components/TempleDescription/TemplesDisplayMain';
import { Footer,HeaderMain } from './components/Navbar';
import { HashRouter as Router, Routes,Route, HashRouter } from 'react-router-dom';
import { Testing } from './webpage';
import { ContactUs } from './webpage/ContactUs';
function App() {
  return (
    <div className="App">
      {/* <PopInfo information={'hello my name is sajan shrestha'}/> */}
      <HeaderMain/>
      <div className='min-h-[90vh]'> 
          <Routes>
            <Route path='/testing' element={<Testing/>}/>
            <Route path='' element={<TempleDispalyMain/>}/>
            <Route path='/contact-us' element={<ContactUs/>}/>
          </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
