import React, { Component } from 'react';
import './Home.css';
import Navbar from '../components/layout/Navbar';
import Header from '../components/layout/Header';
import SubTitle from '../components/common/SubTitle';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import SmallMenuTap from '../components/common/SmallMenuTap';
import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";
import CenterCard from '../components/common/CenterCard';
import lc1 from "../assets/lc1.jpg";

const Home = () => {
    return ( 
      <>

  <Navbar/>
  <Header/>

  <SmallMenuTap title="Apply Online" /> 
    <SmallMenuTap title="News" /> 
      <SmallMenuTap title="Blog Articles" /> 
        <SmallMenuTap title="CIB International" /> 
          <SmallMenuTap title="Sustainable Finance" /> 
              <SmallMenuTap title="Awards" /> 

<div className='Section1'>

  <SectionTitle title="APPLY ONLINE" />
  <SubTitle title=" Apply online now for cards and loans with ease!" />

  <div className='cards'>
       <Card image={Icon1} desc="Apply for a New Account" />
       <Card image={Icon2} desc="Apply for a card" />
       <Card image={Icon3} desc="Apply for a loan or overdraft" />
  </div>

  </div>

  <div className='Section2'>
    <SubTitle title=" Learning Center" />

  <div className='cards'>
    <CenterCard image={lc1} title="Buying and making a home" desc="Buying a home can be emotional — make sure you’re ready with the right guidance."/>
    <CenterCard image={lc1} title="Buying and making a home" desc="Buying a home can be emotional — make sure you’re ready with the right guidance."/>
    <CenterCard image={lc1} title="Buying and making a home" desc="Buying a home can be emotional — make sure you’re ready with the right guidance."/>  
  </div>

  </div>

   </>
     );
}
 
export default Home;