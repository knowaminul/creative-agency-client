import React from 'react';
import logo from '../../../../images/logos/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/"><img style={{ height: '47px', width: '150px' }} src={logo} alt="Logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-3">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-3" href="#portfolio">Our Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-3" href="/">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-3" href="#contact">Contact Us</a>
                    </li>
                    <button onClick={event =>  window.location.href='/dashboard'} className="btn mr-3" style={{ background: 'black', color: 'white', borderRadius: '5px', padding: '2px 20px'}}>Login</button>                                        
                    </ul>
                </div>
            </nav>            
        </div>
    );
};

export default Navbar;