import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const Partners = () => {
    return (
        <section className="container text-center my-5 py-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-2 col-sm-3 col-xs-3">
                    <img className="img-fluid" style={{ height: '36px'}} src={slack} alt=""/>
                </div>
                <div className="col-md-2 col-sm-3 col-xs-3">    
                    <img className="img-fluid" style={{ height: '44px'}} src={google} alt=""/>
                </div>    
                <div className="col-md-2 col-sm-3 col-xs-3">    
                    <img className="img-fluid" style={{ height: '56px'}} src={uber} alt=""/>
                </div>
                <div className="col-md-2 col-sm-3 col-xs-3">    
                    <img className="img-fluid" style={{ height: '67px'}} src={netflix} alt=""/>
                </div>    
                <div className="col-md-2 col-sm-3 col-xs-3">
                    <img className="img-fluid" style={{ height: '51px'}} src={airbnb} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Partners;