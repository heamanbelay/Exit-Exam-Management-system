
import React, {useState} from 'react';
import './register.css'
import Footer from './footer';

// import MetaData from '../more/metadata';
function RegistrationForm() {
    return(
        <>
        {/* <MetaData title="BiT EEMS"/> */}

      {/* <Header/> */}
       
      <div className="form">

          <div className="form-body">
          <div className="header">
            <p>Welcome , please <b className='head'>Signup</b></p>
          </div>
          <br></br>
              <div className="username">
                  {/* <label className="form__label" for="firstName">First Name </label> */}
                  <input className="form__input" type="text" id="firstName" placeholder="Enter your First Name"/>
              </div>

              <div className="lastname">
                  {/* <label className="form__label" for="lastName">Last Name </label> */}
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="Enter your Last Name"/>
              </div>

              <div className="email">
                  {/* <label className="form__label" for="email">Email </label> */}
                  <input  type="email" id="email" className="form__input" placeholder="Enter your Email"/>
              </div>

              <div className="password">
                  {/* <label className="form__label" for="password">Password </label> */}
                  <input className="form__input" type="password"  id="password" placeholder="Enter your Password"/>
              </div>

              <div className="confirm-password">
                  {/* <label className="form__label" for="confirmPassword">Confirm Password </label> */}
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>

            <button type="submit" class="btn">Register</button>
              </div>

          </div>  
      </div> 
      </>
    )       
}
export default RegistrationForm;