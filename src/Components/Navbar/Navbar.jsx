import React from 'react';
import './Navbar.css';
import logo from "../assets/Navbar/netflix.png";

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="navlogo">
          <img src={logo}/>
          </div>
          <div className="signin">
            <button>Sign In</button>
          </div>
    </div>
  )
}

export default Navbar
