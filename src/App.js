import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar/Navbar.js'
import Landing from './Landing_Page/LandingPage.js';
import SignUp from './SignUp/SignUp.js';
import Login from './Login/Login.js';
import InstantConsultation from './InstantConsultationBooking/InstantConsultation.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<Landing/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/instant-consultation" element={<InstantConsultation/>}/>
              </Routes>
            
        </BrowserRouter>
  );
}

export default App;
