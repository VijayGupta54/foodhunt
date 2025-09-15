import React, { useState } from 'react';
import "../pages/Login.css";

const Login = ({closeLogin}) => {

    const[loginFormDetails, setLoginFormDetails] = useState({
        email:"",
        password:"",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setLoginFormDetails((prevData)=>(
            {...prevData, [name]:value}
        ));
    }

    const handleFormSubmit = (e) => {
       e.preventDefault();
       if(!loginFormDetails.email || !loginFormDetails.password){
        alert("Some fields are missing");
       }else{
        console.log(loginFormDetails);
        setLoginFormDetails({
            email : "",
            password:"",
        });
        closeLogin();
       }
    }

  const handleFormClose = (e) => {
     e.stopPropagation();
  } 
  return (
    <div className="login-container" onClick={closeLogin}>
        <div className="login-inner-container" onClick={handleFormClose}>
            <h1>Foodhunt</h1>
            <div className="login-form-container">
                <form onSubmit={handleFormSubmit}>
                    <input type="email" placeholder='Email' name='email' value={loginFormDetails.email} onChange={handleInputChange} required/>
                    <input type="password" placeholder='Password' name='password' value={loginFormDetails.password} onChange={handleInputChange} required/>
                    <button className='login-btn'>Login</button>
                </form>
            </div>
            <p>Don't have an account ? SignUp</p>
        </div>
    </div>
  )
}

export default Login