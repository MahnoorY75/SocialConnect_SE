import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for routing
import './home.css';
import logo from '../Images/logo3.PNG';
function Home() {
  return (
    <div style={{backgroundColor: '#fdf9f8'}}>
      <div className="nav">
        <div className="logo">
        <img src={logo} alt="Logo" style={{ width: '50px', height: '30px' }} />
        </div>

        <div className="navtext">
          <p className="text , home">Home</p>
          <p className="text">Explore</p>
          <p className="text">Contact</p>
          <Link to={'/login'} className='btn'>Login</Link>
        </div>

      </div>
     <div className="header">
<div className="sidebox">
  <h1 className='head'><span className='diff'>We </span>help you to Connect, Create, and <span className='diff'>Collaborate! </span>✨</h1>
  <p className="body">Welcome to SocialConnect, where connections thrive, creativity flourishes, and collaboration knows no bounds. Join us in transforming social interaction today!</p>
  <button className='btn-main'>Get Started!</button>
  <button className="btn-second">Watch Video</button>
</div>
<div className="sidepic">
  
</div>

     </div>

     <div className="strip">

     </div>
     <div className="featurebox">
      <h1 className='boxxtext'>Transforming Social Interaction with SocialConnect</h1>
      <div className="banner">

      </div>
     </div>

     <div className="section">
      <div className="show">
        <h1 className="dis">SocialConnet's <span className="diff2">Features </span>and Functionalities</h1>
      </div>
      <div className="fetchbox">
        <div className="b1 , b">
<div className="imagesec1">

</div>
<div className="textsec">
  <h2>Intelligent Social Matching</h2>

</div>
        </div>
        <div className="b2 , b">
        <div className="imagesec2">

</div>
<div className="textsec">
<h2>Dynamic Content Discovery</h2>
</div>
        </div>
        <div className="b3 , b">
        <div className="imagesec3">

</div>
<div className="textsec">
<h2>Enhanced Privacy Controls</h2>
</div>
        </div>
      </div>
     </div>

     <div className="footer">
      <h3 className='footertext'>@ 2024 SocialConnect.</h3>
      <p className="footertext"> All rights reserved. | Privacy Policy | Terms of Service</p>
     </div>
    </div>
  );
}

export default Home;
