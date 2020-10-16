import React, { useEffect, useState } from 'react';
import './CustomerList.css';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../Sidebar/Sidebar';
import BackTop from '../../../BackTop/BackTop';

const CustomerList = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        fetch('https://infinite-woodland-13167.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setLists(data));
    }, [])

    const updateStatus = (e) => {
        const data = { id: e.target.name, status: e.target.value }
        console.log(data);
        fetch('https://infinite-woodland-13167.herokuapp.com/updateStatus', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                alert('Status updated successfully');
            })
    }

    return (
        <div class="container-fluid" id="customerList">
            <DashboardNavbar></DashboardNavbar>
            <div class="row min-vh-100 flex-column flex-md-row">
                <Sidebar></Sidebar>
                <main class="col bg-faded py-3 flex-grow-1" style={{ backgroundColor: '#F4FCF7' }}>
                    <h5 style={{ fontSize: '22px', fontWeight: '500', color: '#0C0C0C' }} className="pb-3">Service List</h5>
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
                                            <select className='dropdown' onChange={updateStatus} name={list._id} id="">
                                                <option value={list.status}>{list.status}</option>
                                                <option style={{ color: '#FF4545'  }} value="Pending">Pending</option>
                                                <option style={{ color: '#FFBD3E'  }} value="On going">On Going</option>
                                                <option style={{ color: '#009444'  }} value="Done">Done</option>
                                            </select>
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