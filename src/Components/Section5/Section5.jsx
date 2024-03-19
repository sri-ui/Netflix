import React from "react";
import img from "../assets/section6/children.png";
import "./Section5.css";

const Section5 =()=>{
    return(
    <div className="section5">
        <div className="section-media">
            <img src={img} alt="" />
        </div>
        <div className="section-content">
                <h1>Create profiles for children.</h1>
                <p>Send children on adventures with their faverite characters in a space made just for them-free with your membership.</p>
        </div>
    </div>
    )
}

export default Section5 