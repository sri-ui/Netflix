import React from 'react';
import './Section7.css';

const Section7 =()=>{
    return(
        <div className='footer'>
            <h2>Questions? call 000-000-000-000</h2>

            <div className="row">
                <div className="col">
                    <a href="#">fAQ</a>
                    <a href="#">Investor Relations</a>
                    <a href="#">Privacy</a>
                    <a href="#">Speed Test</a>
                </div>
                <div className="col">
                    <a href="#">Help Center</a>
                    <a href="#">Jobs</a>
                    <a href="#">Cookies Preferences</a>
                    <a href="#">Legal Notices</a>
                </div>
                <div className="col">
                    <a href="#">Account</a>
                    <a href="#">Ways to watch</a>
                    <a href="#">Corporate Information</a>
                    <a href="#">only on netflix</a>
                </div>
                <div className="col">
                    <a href="#">Media Center</a>
                    <a href="#">Terms of use</a>
                    <a href="#">Contact us</a>
                </div>
            </div>
            <p className='copyright-txt'>Netflix India</p>
        </div>
    )
}

export default Section7