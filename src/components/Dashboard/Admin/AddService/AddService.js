import React, { useState } from 'react';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import Sidebar from '../../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import './AddService.css';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('https://infinite-woodland-13167.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert('Service added successfully!');
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div class="container-fluid" id="addService">
            <DashboardNavbar></DashboardNavbar>
            <div class="row min-vh-100 flex-column flex-md-row">
                <Sidebar></Sidebar>
                <main class="col bg-faded py-3 flex-grow-1" style={{ backgroundColor: '#F4FCF7' }}>
                    <h5 style={{ fontSize: '22px', fontWeight: '500', color: '#0C0C0C' }} className="pb-3">Add Service</h5>
                    <form onSubmit={handleSubmit} className="w-50">
                        <div className="form-group row d-flex align-items-center justify-content-center">
                            <div className="col">
                                <label htmlFor="exampleInputTitle">Service Title</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter title" />
                            </div>
                            <div className="col">
                                <div className="upload">
                                    <button className="upload-btn"><FontAwesomeIcon icon={faCloudUploadAlt}/> Upload Image</button>
                                    <input onChange={handleFileChange} type="file" name="myfile" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputDescription">Description</label>
                            <textarea onBlur={handleBlur} className="form-control" id="" cols="20" rows="3" name="description" placeholder="Enter Designation"></textarea>
                        </div>
                        <button type="submit" className="btn text-white" style={{ background: 'black', borderRadius: '5px', padding: '3px 20px' }}>Send</button>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default AddService;