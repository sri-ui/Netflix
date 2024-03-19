import React from 'react';
import './Section1.css'
import Navbar from '../Navbar/Navbar';


const section1 = () => {
  return (

    <div className='section1'>
        <Navbar/>
        <div className="hero">
            <h1>
                Unlimited movies, TV
                <span />
                shows and more.
            </h1>
            <br></br>
            <p className='p1'>Watch anyware. Cancel anytime.</p>
            <br></br>
            <p className='p2'>
                Ready to watch: enter your email to create or restart your membership.
            </p>
            <br></br>
            <div className="email">
                <input className="holder" type='email' placeholder='Email address'/>
                <button className='getstarted'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default section1