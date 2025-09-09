import React from 'react';
import "../components/Navbar.css";
import LandingRight from './LandingRight';

const Navbar = ({border, background, showLogin}) => {
  return (
    <div className ={border=="yes" && background=="blur" ? "nav-outer-container" : "nav-outer-container nav-border"}>
        <div className="nav-left">
            <h1>Foodhunt</h1>
        </div>
        {/* yeh change hoga har page pai, toh seperate component banao har page ka aur props ki help se render karao condition pe */}
        <LandingRight showLogin={showLogin}/>
    </div>
  )
}

export default Navbar