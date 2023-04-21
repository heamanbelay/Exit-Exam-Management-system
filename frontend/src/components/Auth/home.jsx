import React from 'react'
import { Link } from "react-router-dom";
import "./home.css"
import Header from "./header";
import Footer from './footer';
function Home() {
  return (
    <>   
    <Header/>

    <div className='h1'>
        <h3>This is the home page</h3>
      <Link to="register"><h1>Register</h1></Link>
      <br></br>
      <Link to="login"><h1>Login</h1></Link>

    </div>
    <Footer/>

    </>
 
  );
};

export default Home;