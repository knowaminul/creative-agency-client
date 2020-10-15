import React from 'react';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div class="container-fluid">
            <DashboardNavbar></DashboardNavbar>
            <div class="row min-vh-100 flex-column flex-md-row">
                <Sidebar></Sidebar>
                <main class="col bg-faded py-3 flex-grow-1" style={{ backgroundColor: '#F4FCF7' }}>
                    <h2 className="text-center">Hello..</h2>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;