import React, { Component } from 'react';
import './Card.css';


const Card = (props) => {
    return ( 
        <div className="card">
<img className='cardimg' src={props.image}  />
<h4 className='cardtxt'>{props.desc}</h4>
</div>
     );
}
 
export default Card;