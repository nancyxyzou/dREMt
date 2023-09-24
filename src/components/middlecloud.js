import React from 'react';
import '../index.css';
import middlecloud from '../img/cloud_middle.png';

function MiddleCloud() {
    return (
      <div className="container">
        <img src={middlecloud} alt="middle cloud" className="middlecloud" />
      </div>
    )
  }
  
  export default MiddleCloud;