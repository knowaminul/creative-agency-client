import React, { useState } from 'react';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../Sidebar/Sidebar';

const Review = () => {
    const [info, setInfo] = useState({});
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData()
        console.log(info);
        formData.append('name', info.name);
        formData.append('designation', info.designation)
        formData.append('description', info.description);

        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert('Review added successfully!')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div class="container-fluid" id="review">
            <DashboardNavbar></DashboardNavbar>
            <div class="row min-vh-100 flex-column flex-md-row">
                <Sidebar></Sidebar>
                <main class="col bg-faded py-3 flex-grow-1" style={{ backgroundColor: '#F4FCF7' }}>    
                    <h5 style={{ fontSize: '22px', fontWeight: '500', color: '#0C0C0C'}} className="pb-3">Review</h5>
                    <form onSubmit={handleSubmit} className="w-50">
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="designation" placeholder="Company’s name, Designation" />
                        </div>
                        <div className="form-group">
                            <textarea onBlur={handleBlur} className="form-control" id="" cols="20" rows="3" name="description" placeholder="Description"></textarea>
                        </div>
                        <button type="submit" className="btn text-white" style={{ background: 'black', borderRadius: '5px', padding: '3px 20px'}}>Send</button>
                    </form>                    
                </main>
            </div>
        </div>
    );
};

export default Review;