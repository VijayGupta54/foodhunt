import React, { useState } from 'react';
import "../pages/LandingPage.css";
import Navbar from '../components/Navbar';
import LandingHero from '../components/LandingHero';
import Login from './Login';

const LandingPage = () => {

  const [openLogin, setOpenLogin] = useState(false);

  function showLogin(){
     setOpenLogin(!openLogin);
  }

  return (
     <div className="landing-container">
       <Navbar border="yes" background="blur" showLogin={showLogin}/>
       <LandingHero/>
       <div className="overlay"></div>
       <video src="https://www.pexels.com/download/video/3196001/" muted autoPlay loop></video>
       {openLogin == true ? <Login closeLogin={showLogin}/> : <></>}
     </div>
  )
}

export default LandingPage