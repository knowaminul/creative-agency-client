import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../Sidebar/Sidebar';

const OrderList = ({option}) => {
    const [order, setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:5000/singleOrder?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [])    

    return (
        <div class="container-fluid" id="orderList">
            <DashboardNavbar></DashboardNavbar>
            <div class="row min-vh-100 flex-column flex-md-row">
                <Sidebar></Sidebar>
                <main class="col bg-faded py-3 flex-grow-1" style={{ backgroundColor: '#F4FCF7' }}>    
                    <h5 style={{ fontSize: '22px', fontWeight: '500', color: '#0C0C0C'}} className="pb-3">Service List</h5>
                    {
                        order.length === 0 &&
                        <div class="spinner-grow text-center" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    }
                    <div className="container">
                        <div className="row">
                            {
                                order.map(order =>
                                    <div className="col-md-5 col-sm-5 col-xs-10">
                                        <div class="card rounded">
                                            <div class="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <img style={{ height: '50px', width: '50px', borderRadius: '100px' }} src={`https://placeimg.com/640/480/tech/${order._id}`} alt="" />
                                                    <a href="/" class="btn btn-outline-success btn-sm">{order.value}</a>
                                                </div>
                                                <h5 class="card-title mt-3" style={{ fontSize: '20px', fontWeight: 600, color: '#111430' }}>{order.service}</h5>
                                                <span class="card-text text-secondary">{order.details}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default OrderList;