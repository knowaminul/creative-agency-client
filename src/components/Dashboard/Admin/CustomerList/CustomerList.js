import React, { useEffect, useState } from 'react';
import './CustomerList.css';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../Sidebar/Sidebar';
import DropDown from '../DropDown/DropDown';
import BackTop from '../../../BackTop/BackTop';

const CustomerList = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        fetch('https://infinite-woodland-13167.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setLists(data));
    }, [])

    return (
        <div class="container-fluid" id="customerList">
            <DashboardNavbar></DashboardNavbar>
            <div class="row min-vh-100 flex-column flex-md-row">
                <Sidebar></Sidebar>
                <main class="col bg-faded py-3 flex-grow-1" style={{ backgroundColor: '#F4FCF7' }}>
                    <h5 style={{ fontSize: '22px', fontWeight: '500', color: '#0C0C0C'}} className="pb-3">Service List</h5>
                    {
                        lists.length === 0 &&
                        <div class="spinner-grow text-center ml-3" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    }
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead style={{ background: '#F5F6FA' }}>
                                <tr>
                                    <th>Name</th>
                                    <th>Email ID</th>
                                    <th>Service</th>
                                    <th>Project Details</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lists.map(list =>
                                    <tr key={list._id}>
                                        <td>{list.name}</td>
                                        <td>{list.email}</td>
                                        <td>{list.service}</td>
                                        <td>{list.details}</td>
                                        <td>
                                            <DropDown></DropDown>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        <BackTop></BackTop>    
        </div>
    );
};

export default CustomerList;