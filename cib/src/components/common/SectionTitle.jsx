import React, { Component } from 'react';
import './SectionTitle.css';

const SectionTitle = (props) => {
    return ( 
        <h2 className="section-title">{props.title}</h2>
     );
}
 
export default SectionTitle;