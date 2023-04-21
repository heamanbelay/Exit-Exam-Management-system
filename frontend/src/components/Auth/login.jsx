
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './login.css'
function LoginForm() {
    return(
      <div className="form">
          <div className="log_form_body">
          <div className="roles_toggle">
            <p>Admin</p>
            <p>Instructor</p>
            <p>Student</p>
          </div>
              <div className="username">
                  {/* <label className="form__label" for="email">Email </label> */}
                  <input  type="username" id="email" className="form__input_login" placeholder="Username"/>
              </div>
              <div className="log_password">
                  {/* <label className="form__label" for="password">Password </label> */}
                  <input className="form__input_login" type="password"  id="password" placeholder="Password"/>
              </div>
              <button type="submit" class="log_btn">Login</button>
            <div className='forgot'>
              <Link to="/password/forgot"><p>Forgot Password ?</p></Link>
              <p className='pp'>Don't have an account ? <Link to="/register"> Sign up</Link></p>
                  </div>
          </div>
      </div>      
    )       
}
export default LoginForm;
    