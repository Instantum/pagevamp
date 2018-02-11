import React from 'react';
import './Footer.css';

const Footer = (props) => (
  <div className="footer">
    <div className="footer1">
      <div className="logo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
      </div>
      <div className="footer_links">
        <span className="title"> ABOUT</span><br/>
        About the Company<br/>
        Terms of Use <br/>
        Advertise <br/>
      </div>
      <div className="footer_links">
        <span className="title"> JOIN COMMUNITY</span><br/>
        Teach<br/>
        Translate<br/>
        Forums <br/>
        Community Meetups <br/>
      </div>
      <div className="footer_links">
        <span className="title"> HELP</span><br/>
        FAQ<br/>
        Help Center<br/>
      </div>
    </div>
    <hr/>
    <div className="copyright">
      Copyright © 2009 - 2017, Company Name. All Rights Reserved
    </div>
  </div>
)

export default Footer;
