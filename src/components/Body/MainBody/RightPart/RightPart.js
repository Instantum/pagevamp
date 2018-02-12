import React from 'react';
import "./RightPart.css";
import Search from './Search/Search';
import Categories from './Categories/Categories';
import Advertisement from './Advertisement/Advertisement';

const RightPart = (props) => (
  <div className="right-part">
    <Search />
    <Categories />
    <Advertisement />

  </div>
)

export default RightPart;
