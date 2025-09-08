import React from 'react';
import "../components/LandingHero.css";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const LandingHero = () => {
  return (
     <div className="landing-hero-outer-container">
        <div className="landing-hero-inner-container">
            <h1 className="heading-1">Watch.Crave.Order</h1>
            <h1 className='heading-2'>Your food journey starts with a <span className='heading-2-reel'>reel.</span></h1>
            <button className='landing-hero-action-btn'>Explore  <span className='action-btn-forward-icon'><MdKeyboardDoubleArrowRight /></span></button>
        </div>
     </div>
  )
}

export default LandingHero