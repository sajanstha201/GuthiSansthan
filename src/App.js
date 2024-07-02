import logo from './logo.svg';
import './App.css';
import { NavbarMain } from './components/Navbar';
import { TempleDispalyMain } from './components/TempleDescription/TemplesDisplayMain';

function App() {
  return (
    <div className="App">
      {/* <PopInfo information={'hello my name is sajan shrestha'}/> */}
      <NavbarMain/>
      <TempleDispalyMain/>
    </div>
  );
}

export default App;
