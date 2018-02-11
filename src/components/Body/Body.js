import React from 'react';
import PhotoSlider from './Slider/Slider';
import MainBody from './MainBody/MainBody';
import './Body.css';

const Body = (props) => (
  <div className="body">
    <PhotoSlider />
    <MainBody />
  </div>
)

export default Body;
