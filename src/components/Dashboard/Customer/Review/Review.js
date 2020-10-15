import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../Sidebar/Sidebar';
import { UserContext } from '../../../../App';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data, e) => {
        const reviews = { ...loggedInUser, ...data };
        e.target.reset();

        fetch('https://infinite-woodland-13167.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                alert('Review added successfully');
            })
    };

    console.log(watch("example"));

    return (
        <div class="container-fluid" id="review">
            <DashboardNavbar></DashboardNavbar>
            <div class="row min-vh-100 flex-column flex-md-row">
                <Sidebar></Sidebar>
                <main class="col bg-faded py-3 flex-grow-1" style={{ backgroundColor: '#F4FCF7' }}>
                    <h5 style={{ fontSize: '22px', fontWeight: '500', color: '#0C0C0C' }} className="pb-3">Review</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-50">
                        <div className="form-group">
                            <input ref={register({ required: true })} type="text" className="form-control" name="name" defaultValue={loggedInUser.name} />
                            {errors.name && <span className="error">Name is required</span>}
                        </div>
                        <div className="form-group">
                            <input ref={register({ required: true })} type="text" className="form-control" name="designation" placeholder="Company’s name, Designation" />
                            {errors.name && <span className="error">Company’s name, Designation is required</span>}
                        </div>
                        <div className="form-group">
                            <textarea ref={register({ required: true })} className="form-control" id="" cols="20" rows="3" name="description" placeholder="Description"></textarea>
                            {errors.name && <span className="error">Description is required</span>}
                        </div>
                        <button type="submit" className="btn text-white" style={{ background: 'black', borderRadius: '5px', padding: '3px 20px' }}>Send</button>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default Review;