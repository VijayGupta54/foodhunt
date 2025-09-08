import React from 'react';
import "../pages/LandingPage.css";
import Navbar from '../components/Navbar';
import LandingHero from '../components/LandingHero';

const LandingPage = () => {
  return (
     <div className="landing-container">
       <Navbar border="yes" background="blur"/>
       <LandingHero/>
       <div className="overlay"></div>
       <video src="https://www.pexels.com/download/video/3944327/" muted autoPlay loop></video>
     </div>
  )
}

export default LandingPage