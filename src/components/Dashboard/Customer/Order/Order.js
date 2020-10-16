import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../Sidebar/Sidebar';

const Order = () => {
    const { title } = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory()

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data, e) => {
        const orders = {...loggedInUser, ...data, status: 'Pending'};
        e.target.reset();

        fetch('https://infinite-woodland-13167.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(orders)
          })
          .then(res => res.json())
          .then(data => {
            history.push('/orders')
          })
    };

    console.log(watch("example"));

    return (
        <div class="container-fluid" id="order">
            <DashboardNavbar></DashboardNavbar>
            <div class="row min-vh-100 flex-column flex-md-row">
                <Sidebar></Sidebar>
                <main class="col bg-faded py-3 flex-grow-1" style={{ backgroundColor: '#F4FCF7' }}>    
                    <h5 style={{ fontSize: '22px', fontWeight: '500', color: '#0C0C0C'}} className="pb-3">Order</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-50">
                        <div className="form-group">
                            <input ref={register({ required: true })} type="text" className="form-control" name="name" value={loggedInUser.name} />
                            {errors.name && <span className="error">Name is required</span>}
                        </div>
                        <div className="form-group">
                            <input ref={register({ required: true })} type="email" className="form-control" name="email" value={loggedInUser.email} />
                            {errors.name && <span className="error">Email is required</span>}
                        </div>
                        <div className="form-group">
                            <input ref={register({ required: true })} type="text" className="form-control" name="service" defaultValue={title} />
                            {errors.name && <span className="error">Service is required</span>}
                        </div>
                        <div className="form-group">
                            <textarea ref={register({ required: true })} className="form-control" id="" cols="20" rows="3" name="details" placeholder="Project Details"></textarea>
                            {errors.name && <span className="error">Description is required</span>}
                        </div>
                        <div className="form-group row d-flex align-items-center justify-content-center">
                            <div className="col">
                                <input ref={register({ required: true })} type="text" className="form-control" name="price" placeholder="Price" />
                                {errors.name && <span className="error">Price is required</span>}
                            </div>
                        </div>
                        <button type="submit" className="btn text-white" style={{ background: 'black', borderRadius: '5px', padding: '3px 20px'}}>Send</button>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default Order;