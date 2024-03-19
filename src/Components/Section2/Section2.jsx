import React from 'react';
import './Section2.css';
import img from "../assets/section2/tv.jpg";
import video from "../assets/section2/tv.mp4"

const Section2 = () => {
  return (
    <div className="section2">
        <div className="section-content">
            <h1>Enjoy on your TV</h1>
            <p>Match on smart TVs, PlayStation, Xbox,
            <br/>Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        <div className="section-video">
        <img className='section-img' src={img} alt=""/>
            <video className='video1' autoplay="" muted="" playsInline="">
                <source src={video} type='video/mp4'/>
            </video>
        </div>
    </div>
  )
}

export default Section2