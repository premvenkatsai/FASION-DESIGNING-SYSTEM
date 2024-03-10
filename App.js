import logo from './logo.svg';
import './App.css';
import H1 from './components/Home';
import M1 from './components/Nav1';
import { Route, Routes } from 'react-router-dom';
import R1 from './components/Register';
import Appbar from './components/Appbar1';
import D1 from './components/Delete';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"image1.png"} className="App-logo" alt="logo" />
        &nbsp; &nbsp;
        <h2>
            PSK Fashion Designing System
        </h2>
      </header>
      <div className="App-Body">
     
        <Appbar />
        
        <Routes>
          <Route path='/' element={<H1 />}/>
          <Route path='/reg' element={<R1 />}/>
          <Route path='/bac' element={<H1 />}/>
          <Route path='/del' element={<D1 />}/>
        </Routes>        
      </div>
    </div>
  );
}

export default App;