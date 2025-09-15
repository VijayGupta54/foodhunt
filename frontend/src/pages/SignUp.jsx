import React, { useEffect, useState } from 'react';
import "../pages/SignUp.css";
import axios from "axios";
import { IoLocationSharp } from "react-icons/io5";

const SignUp = () => {

  const [formDetails, setFormDetails] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    addresses: []
  });

  const [confirmPass, setConfirmPass] = useState("");

  const [address, setaddress] = useState({
    flatno: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    if (name == "confirmPass") {
      setConfirmPass((prevData) => (
        prevData = value
      ));
    }
    else if (name == "flatno" || name == "area" || name == "landmark" || name == "city" || name == "state" || name == "pincode") {
      setaddress((prevData) => (
        { ...prevData, [name]: value }
      ));
    }
    else {
      setFormDetails((prevData) => (
        { ...prevData, [name]: value }
      ));
    }
  }

  const handleFormSubmit = (e) => {

    e.preventDefault();

    // Check if address is empty or not
    if (address.area == "" || address.city == "" || address.flatno == "" || address.pincode == "" || address.state == "") {
      alert("Some fields are missing");
      return;
    }

    if (formDetails.password != confirmPass) {
      alert("Password doesn't match");
      return;
    }

    // Now add address object in addresses array of formDetails
    setFormDetails((prevData) => (
      { ...prevData, addresses: [...prevData.addresses, address] }
    ));

    // setaddress({
    //   flatno: "",
    //   area: "",
    //   landmark: "",
    //   city: "",
    //   state: "",
    //   pincode: "",
    // });
    // setFormDetails({
    //   fullname: "",
    //   email: "",
    //   phoneNumber: "",
    //   password: "",
    //   addresses: []
    // });
    // setConfirmPass("");

  }

  
  const updateCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition( async (position)=> {

      // const latitude = position.coords.latitude;
      // const longitude = position.coords.longitude;
      const latitude = 28.7041;
      const longitude = 77.1025;
      
      const api_key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
      const result = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${api_key}`);

      const address = result.data.features[0].properties;

      setaddress((prevData)=> (
        {...prevData, state:address.state, city:address.city, pincode:address.postcode, area:address.name+" "+address.street+" "+address.suburb}
      ));

    }, ()=>{
      alert("Permission denied");
    })
  }

  
  return (
    <div className="signup-container">
      <div className="signup-inner-container">
        <div className="signup-left">
          <img src="https://png.pngtree.com/png-vector/20221219/ourmid/pngtree-delivery-boy-with-food-png-image_6528630.png" alt="" />
        </div>
        <div className="signup-right">
          <h1>Foodhunt</h1>
          <h2>Create a new Account</h2>
          <div className="signup-form-container">
            <form onSubmit={handleFormSubmit}>
              <input type="text" placeholder='Full Name' name='fullname' value={formDetails.fullname} onChange={handleInputChange} required />
              <input type='email' placeholder='Email' name='email' value={formDetails.email} onChange={handleInputChange} required />
              <input type='text' placeholder='Phone number' name='phoneNumber' value={formDetails.phoneNumber} onChange={handleInputChange} required />
              <input type='password' placeholder='Enter password' name='password' value={formDetails.password} onChange={handleInputChange} required />
              <input type='password' placeholder='Confirm password' name='confirmPass' value={confirmPass} onChange={handleInputChange} required />
              <p>Add Address :</p>
              <button type='button' onClick={updateCurrentLocation}><span><IoLocationSharp /></span> Use my current location</button>
              <div id="address-container">
                <input type="text" placeholder='Flat, House no., Building, Company, Apartment' name='flatno' value={address.flatno} onChange={handleInputChange} required />
                <input type="text" placeholder='Area, Street, Sector, Village' name='area' value={address.area} onChange={handleInputChange} required />
                <input type="text" placeholder='Landmark (e.g. near apollo hospital)' name='landmark' value={address.landmark} onChange={handleInputChange} />
                <input type="text" placeholder='City' name='city' value={address.city} onChange={handleInputChange} required />
                <input type="text" placeholder='State' name='state' value={address.state} onChange={handleInputChange} required />
                <input type="text" placeholder='Pincode' name='pincode' value={address.pincode} onChange={handleInputChange} required />
              </div>
              <button id='signup-form-submit-btn'>Submit</button>
              <h4>Already have an account ? Login</h4>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp