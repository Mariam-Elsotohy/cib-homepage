import React, { Component } from 'react';
import './Header.css';
import Button from '../common/Button';

const Header = () => {
    return ( 
        <section className="hero">
      <div className="hero-content">
        <h1>CIB</h1>
        <p>Delivering value to our clients, our community and our shareholders.</p>
        <Button title="Discover more" />
      </div>
    </section>
     );
}
 
export default Header;