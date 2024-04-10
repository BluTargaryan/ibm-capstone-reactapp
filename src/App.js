import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar/Navbar.js'
import Landing from './Landing_Page/LandingPage.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<Landing/>}/>
              </Routes>
            
        </BrowserRouter>
  );
}

export default App;
