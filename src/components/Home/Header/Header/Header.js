import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <section className="header mb-5">
            <div className="content">
                <Navbar></Navbar>
                <Banner></Banner>                 
            </div>
        </section>
    );
};

export default Header;