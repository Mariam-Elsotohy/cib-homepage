import React, { Component } from 'react';
import "./SmallMenuTap.css";

const SmallMenuTap  = (props) => {
    return (
      <a href="#" className="small-menu-tap">{props.title}</a>
      );
}
 
export default SmallMenuTap ;