import React, { Component } from 'react';
import './CenterCard.css'
const CenterCard = (props) => {
    return ( 
        <div className="learning-card">
      <img src={props.image} alt={props.title} className="learning-img" />
      <h4 className="learning-title">{props.title}</h4>
      <p className="learning-desc">{props.desc}</p>
      <button className="learning-btn">Read more</button>
    </div>
     );
}
 
export default CenterCard;