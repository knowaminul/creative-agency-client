import React from 'react';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';
import './Slider.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Slider = () => {
    return (
        <section id="portfolio" style={{ height: '600px', backgroundColor: '#111430' }}>
            <div className="text-center" style={{ paddingTop: '50px' }}>
                <h3 style={{ fontSize: '34px', fontWeight: '600', color: '#ffffff' }}>Here are some of <span style={{ color: '#7AB259' }}>our works</span></h3>
            </div>
            <div className="carousel-wrapper" style={{ marginTop: '50px', marginBottom: '50px'}}>
                <Carousel infiniteLoop autoPlay transitionTime>
                    <div>
                        <img style={{ height: '335px', width: '465px' }} src={carousel1} alt="" />
                    </div>
                    <div>
                        <img style={{ height: '335px', width: '465px' }} src={carousel2} alt="" />
                    </div>
                    <div>
                        <img style={{ height: '335px', width: '465px' }} src={carousel3} alt="" />
                    </div>
                    <div>
                        <img style={{ height: '335px', width: '465px' }} src={carousel4} alt="" />
                    </div>
                    <div>
                        <img style={{ height: '335px', width: '465px' }} src={carousel5} alt="" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default Slider;