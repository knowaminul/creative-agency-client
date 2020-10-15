import React, { useState } from 'react';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../Sidebar/Sidebar';

const AddAdmin = () => {
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
        formData.append('email', info.email);

        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert('Admin added successfully!');
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div class="container-fluid" id="addAdmin">
            <DashboardNavbar></DashboardNavbar>
            <div class="row min-vh-100 flex-column flex-md-row">
                <Sidebar></Sidebar>
                <main class="col bg-faded py-3 flex-grow-1" style={{ backgroundColor: '#F4FCF7' }}>    
                    <h5 style={{ fontSize: '22px', fontWeight: '500', color: '#0C0C0C'}} className="pb-3">Make Admin</h5>
                    <form onSubmit={handleSubmit} className="w-75">
                        <label htmlFor="exampleInputTitle" style={{ fontSize: '16px', fontWeight: '500' }}>Email</label>
                        <div className="form-group row d-flex align-items-center justify-content-center">
                            <div className="col">
                                <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="jon@gmail.com" />
                            </div>
                            <div className="col">
                                <button type="submit" className="btn btn-success" style={{ borderRadius: '3px', padding: '6px 30px'}}>Submit</button>
                            </div>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default AddAdmin;