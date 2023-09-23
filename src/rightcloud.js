import React from 'react';
import './index.css';
import rightcloud from './img/cloud_right_1.png';

function RightCloud() {
    return (
      <div className="container">
        <img src={rightcloud} alt="right cloud" className="rightcloud" />
        <div className="text">
          <h1 class="mainblurb">Welcome to dREMt</h1> 
        </div>
      </div>
    )
  }
  
  export default RightCloud;