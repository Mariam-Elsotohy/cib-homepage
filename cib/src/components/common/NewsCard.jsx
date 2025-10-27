import React, { Component } from 'react';
import './NewsCard.css'
const NewsCard = (props) => {
    return ( 
       <div className="news-card">
      <img src={props.image} alt={props.title} className="news-img" />

      <div className="news-content">
        <p className="news-date">{props.date}</p>
        <h3 className="news-title">{props.title}</h3>
        <p className="news-desc">{props.desc}</p>
      </div>
    </div>
     );
}
 
export default NewsCard;