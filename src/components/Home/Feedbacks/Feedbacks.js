import React, { useEffect, useState } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import './Style.css';

const Feedbacks = () => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setFeedback(data))
    }, [])

    return (
        <section className="feedbacks my-5 py-5">
            <div className="container">
                <div className="section-header text-center">
                    <h3 style={{ fontSize: '34px', fontWeight: '600', color: '#111430' }}>Clients <span style={{ color: '#7AB259' }}>Feedback</span></h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="card-deck mt-5">
                            {
                                feedback.map(feedback => <FeedbackCard feedback={feedback} key={feedback._id} />)
                            }
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedbacks;