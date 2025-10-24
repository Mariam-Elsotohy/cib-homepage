import React, { Component } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.png";
import MainMenuTap from '../common/MainMenuTap';

const Navbar = () => {
    return ( 
      <nav className="navbar">
      <img src={logo} alt="CIB Logo" className="logo" />

      <div className="nav-links">
        <MainMenuTap title="About Us" />
        <MainMenuTap title="Investor Relations" />
        <MainMenuTap title="Responsible Banking" />
        <MainMenuTap title="Newsroom" />
        <MainMenuTap title="Learning Center" />
        <MainMenuTap title="Careers" />
        <MainMenuTap title="Others" />
      </div>
    </nav>
     );
}
 
export default Navbar;