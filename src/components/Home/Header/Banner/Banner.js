import React from 'react';
import banner from '../../../../images/logos/Frame.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container my-5 py-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5 col-xs-12">
                    <h1>Let’s Grow Your Brand To The Next Level</h1>
                    <p style={{ fontSize: '16px', fontWeight: 400 }}>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Purus commodo ipsum duis<br/> laoreet maecenas. Feugiat </p>
                    <button onClick={event =>  window.location.href='/dashboard'} className="btn" style={{ background: 'black', color: 'white', borderRadius: '5px', padding: '3px 20px'}}>Hire Us</button>
                </div>
                <div className="col-md-7 col-xs-12">
                    <img className="img-fluid" style={{ height: '422px'}} src={banner} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Banner;