import React, { Component } from 'react';
import "./MainMenuTap.css";

const MainMenuTap = (props) => {
    return (
  <a href="#" className='MainMenuTap'> {props.title}</a>
      );
}
 
export default MainMenuTap;