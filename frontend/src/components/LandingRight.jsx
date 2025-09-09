import React from 'react';
import "../components/LandingRight.css";

const LandingRight = ({showLogin}) => {
  return (
    <div className="landing-right-outer-container">
        <button className='login-btn' onClick={showLogin}>Login</button>
    </div>
  )
}

export default LandingRight