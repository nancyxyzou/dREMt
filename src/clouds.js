import React from 'react';
import './index.css'; // Import your CSS file
import leftcloud from './img/cloud_left_1.png';

function LeftCloud() {
  return (
    <div className="container">
      <img src={leftcloud} alt="left cloud" className="leftcloud"/>
      <div className="text">
        <h1 className="title">Hello</h1> 
      </div>
    </div>
  );
}

export default LeftCloud;





