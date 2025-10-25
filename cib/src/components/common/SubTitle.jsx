import React, { Component } from 'react';
import './SubTitle.css';


const SubTitle = (props) => {
    return ( 
        <p className="sub-title">{props.title}</p>
     );
}
 
export default SubTitle;