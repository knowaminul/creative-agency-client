import React from 'react';
import BackTop from '../../BackTop/BackTop';
import Contact from '../Contact/Contact';
import Feedbacks from '../Feedbacks/Feedbacks';
import Header from '../Header/Header/Header';
import Partners from '../Partners/Partners';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Partners></Partners>
            <Services></Services>
            <Slider></Slider>
            <Feedbacks></Feedbacks>
            <Contact></Contact>
            <BackTop></BackTop>
        </div>
    );
};

export default Home;