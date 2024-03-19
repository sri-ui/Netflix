import React from "react";
import img from "../assets/section5/device.png";
import video from "../assets/section5/devices.mp4";
import "./Section4.css"

const Section4 =()=>{
    return(
        <div>
            <div className="section4">
            <div className="section-content">
                <h1>Watch everywhere.</h1>
                <p>Stream unlimited films and tv programs on your phone, tablet laptop and tv without paying more.</p>
            </div>
            <div className="section-media">
                <img className="img" src={img} alt="" />
                <video className="play" src={video}></video>
            </div>
            </div>
        </div>
    )
}

export default Section4