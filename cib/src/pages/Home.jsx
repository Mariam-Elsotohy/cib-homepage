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
import Button from '../components/common/Button';
import NewsCard from '../components/common/NewsCard';
import NewsImg from "../assets/newsImg.png";

const Home = () => {
    return ( 
      <>

  <Navbar/>
  <Header/>
<div className='Section0'>
  <div className='yarab'>
  <SmallMenuTap title="Apply Online" /> 
    <SmallMenuTap title="News" /> 
      <SmallMenuTap title="Blog Articles" /> 
        <SmallMenuTap title="CIB International" /> 
          <SmallMenuTap title="Sustainable Finance" /> 
              <SmallMenuTap title="Awards" /> 
              </div>
</div>

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
<div className='lc_sub'>Learn more about banking and your finances</div>
  <div className='cards'>
    <CenterCard image={lc1} title="Buying and making a home" desc="Buying a home can be emotional — make sure you’re ready with the right guidance."/>
    <CenterCard image={lc1} title="Buying and making a home" desc="Buying a home can be emotional — make sure you’re ready with the right guidance."/>
    <CenterCard image={lc1} title="Buying and making a home" desc="Buying a home can be emotional — make sure you’re ready with the right guidance."/>  
  </div>
     <Button title="View more" />
  </div>

<div className='Section3'>
  <SubTitle title=" News" />
  <NewsCard
  image={NewsImg}
  date="08/10/2025 - Commercial International Bank (CIB) Has Partnered with CIB Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion"
  title="Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion"
  desc="CIB, Egypt's leading and largest private sector bank, has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance, valued at EGP 3.4 billion."
/>

  <NewsCard
  image={NewsImg}
  date="08/10/2025 - Commercial International Bank (CIB) Has Partnered with CIB Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion"
  title="Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion"
  desc="CIB, Egypt's leading and largest private sector bank, has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance, valued at EGP 3.4 billion."
/>

  <NewsCard
  image={NewsImg}
  date="08/10/2025 - Commercial International Bank (CIB) Has Partnered with CIB Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion"
  title="Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion"
  desc="CIB, Egypt's leading and largest private sector bank, has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance, valued at EGP 3.4 billion."
/>

<Button title="View All News" />

</div>



   </>
     );
}
 
export default Home;