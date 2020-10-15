import React from 'react';

const FeedbackCard = (props) => {
    const { name, photo, designation, description } = props.feedback;
    return (
        <div className="col-md-4 col-sm-12 col-xs-12 py-3">
            <div className="card shadow">
                <div className="card-header d-flex align-items-center">
                    <img className="mx-3" src={photo} alt="Profile" style={{ height: '60px', width: '60px', borderRadius: '100px' }}/>
                    <div>
                        <h6 style={{ fontWeight: 600, fontSize: '20px' }}>{name}</h6>
                        <p style={{ fontWeight: 500, fontSize: '16px' }} className="m-0">{designation}</p>
                    </div>
                </div>
                <div className="card-body">
                    <p style={{ fontSize: '16px', color: '#707070'}} className="card-text">{description}</p>
                </div>    
        </div>            
        </div>
    );
};

export default FeedbackCard;