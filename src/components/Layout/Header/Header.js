import React from 'react';
import './Header.css';

const Header = (props) => (
  <div className="header">
    <div className="logo">
    <img src="http://res.cloudinary.com/instantum/image/upload/v1518369117/ampleedu_cdtai2.jpg" height="200px" width="300px" />

    </div>
    <div className="nav-bar">
      <span className="nav-link">Home</span>
      <span className="nav-link">About Us</span>
      <span className="nav-link">Our Services</span>
      <span className="nav-link">Contact Us</span>
    </div>
    <button className="login">Login</button>

  </div>
)

export default Header;
