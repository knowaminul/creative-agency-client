import React from 'react';

const Contact = () => {
    return (
       <section id="contact" className="contact mt-5 py-5" style={{ background: '#FBD062'}}>
           <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3  style={{ fontSize: '34px', fontWeight: '600', color: '#2D2D2D' }}>Let us handle your<br/> project, professionally.</h3>
                        <p style={{ fontSize: '14px', fontWeight: '400', color: '#000000 70%' }}>With well written codes, we build amazing apps for all<br/> platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-6">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your email address"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your name / company’s name"/>
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn" style={{ background: 'black', color: 'white', borderRadius: '5px', padding: '3px 20px'}}> Send </button>
                            </div>
                        </form>
                    </div>                    
                </div>
                <div className="text-center pt-5 mt-5">
                    <p style={{ fontSize: '14px', fontWeight: '300', color: '#000000 70%' }}>Copyright {(new Date()).getFullYear()} Orange labs 2020</p>
                </div>
           </div>
       </section>
    );
};

export default Contact;