import React, {component} from 'react'
import { Link } from "react-router-dom";
import "./header.css";
// import logo from "../../Assets/logo.jpg";

const Header = () => {
  return (
  
    <div className="Header">
    {/* Header TopBar */}
    <div className="Header__topbar space__beetween">
      {/* Topbar Left */}
      <div className="logo pxy__10">
        <Link to="/">
          <img                 
            // src={logo}
            src="/static/media/logo.4291d04f3cda1e1cb84b.jpg"
            alt=""
            className="logo"
             style={{
              width: "150px",
              height: "100px",
              objectFit: "contain",
              cursor: "pointer",
             }}
          />
        </Link>
      </div>
      {/* Topbar Middle */}
      <div
        className="searchBoxHome"
        style={{
          width: "50%",
          position: "relative",
        }}
      >
    {/* Header Navbar */}
    <div className="navbar flex pz__10 space__beetween" >
      <div
       className="navigation"
       style={{
         padding:"0px 50px",
         alignContent:"center"
       }}
      >
        <ul
          style={{
            fontFamily: "sans-serif",
            cursor: "pointer",
            display: "flex",
            listStyle: "none",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/faq">
            <li>FAQ</li>
          </Link>
          <Link to="/">
            <li></li>
          </Link>
          <Link to="/goals">
            <li>Visions and Goals</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
        <div className="user__account flex pointer">
          <Link to="/login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-person pxz__20 black"
               viewBox="0 0 16 16"
            >
              
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
         </svg>
          </Link>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}
export default Header;