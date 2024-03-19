import React from 'react';
import './Section3.css';
import img from '../assets/section4/image.jpg';
import box from '../assets/section4/boxshot.png';
import download from '../assets/section4/progress.gif'

const Section3 = () => {
  return (
    <div className='Section3'>
        <div className="container">
            <div className="section-container">
                <img className='img' src={img} alt="" />
                <div className="box">
                    <div className="con1">
                        <img src={box} alt=""/>
                    </div>
                    <div className="con2">
                        <h5>StraingerThings<br/><br/>
                        Downloading...</h5>
                    </div>
                    <div className="progress">
                        <img src={download} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="section-content">
            <h1>Download your Shows to watch offline</h1>
            <h3>Save your favourates easily and always have something to watch</h3>
        </div>
    </div>
  )
}

export default Section3