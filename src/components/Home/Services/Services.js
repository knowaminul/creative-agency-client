import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    
    return (
        <section>
            <div className="container my-5 py-5">
                <div className="text-center">
                    <h3 style={{ fontSize: '34px', fontWeight: '600', color: '#171B4E'}}>Provide awesome <span style={{ color: '#7AB259'}}>services</span></h3>
                </div>
                <div className="row mt-5">
                    {
                        service.map(service => <ServiceCard service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;