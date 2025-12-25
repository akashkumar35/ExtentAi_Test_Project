import logo from './logo.svg';
import './App.css';

import Header from './home/Header';
import Landing from './home/Landing';
import { Route, Routes } from 'react-router-dom';
import Podcast from './home/Podcast';
import Aboutus from './home/Aboutus';

function App() {
  return (
    <div className="App ">
      <div className='p-3  bg-black' >
      <Header/>
      <Routes>
     
      <Route path="/" element={  <Landing/>} />
      <Route path="/podcast" element={  <Podcast/>} />
      <Route path="/aboutus" element={  <Aboutus/>} />
   
    </Routes>
    
    

      </div>

    </div>
  );
}

export default App;
