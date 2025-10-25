import React, { Component } from 'react';
import './Card.css';


const Card = (props) => {
    return ( 
        <div className="card">
<img src={props.image}  />
<h4>{props.desc}</h4>
</div>
     );
}
 
export default Card;