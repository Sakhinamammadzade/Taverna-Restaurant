
import { Container } from '@mui/material';
import React from 'react';
import"../banner/banner.scss";

const Banner = () => {
  return (
    <div id='Banner' style={{backgroundImage:`url("https://assets.website-files.com/60945cb2a70f293c1b86901f/60946748e72f2313b200cac5_dan-farrell-RFgSymp9d80-unsplash.jpg")`}}>
      <div className="banner-overlay"></div>
       <div className="banner-title">
        <h1>TAVERNA</h1>
        <p>RESTAURANT</p>
       </div>
       <div className="info">
         <div className="address-info">
            <p className='location'>Riverside 35</p>
            <span className='address' >San Francisco,Ca</span>
         </div>
         <div className="reserve">
            <p className='tel'>800-234-567</p>
            <p >Reserve</p>
         </div>
       </div>
    </div>
  )
}

export default Banner