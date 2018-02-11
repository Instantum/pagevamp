import React from 'react';
import './MainBody.css';
import RightPart from './RightPart/RightPart';
import LeftPart from './LeftPart/LeftPart';


const PhotoSlider = (props) => (
  <div className="main-body">
    <div className="left-part"> <LeftPart /></div>
    <div class="vl"></div>
    <div className="right-part"> <RightPart /></div>
  </div>
)

export default PhotoSlider;
