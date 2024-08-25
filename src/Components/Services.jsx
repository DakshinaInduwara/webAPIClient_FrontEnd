import React from 'react';
import '../styles/Services.css';

export const Services = () => {
    const services = [
        { title: 'Colombo Fort - Beliatta', details: 'Intercity & Express trains\nAvailable class types: 1st, 2nd and 3rd' },
        { title: 'Colombo Fort - Badulla', details: 'Intercity & Express trains\nAvailable class types: 1st, 2nd, 3rd, and observations saloon' },
        { title: 'Colombo Fort - Talaimannar', details: 'Night mail train\nAvailable class types: 2nd class' },
        { title: 'Colombo Fort - Jaffna', details: 'Intercity, Express & Night mail trains\nAvailable class types: 1st, 2nd and 3rd' },
        { title: 'Colombo Fort - Trincomalee', details: 'Night mail train\nAvailable class types: 1st, 2nd and 3rd' },
        { title: 'Kandy - Badulla', details: 'Slow train\nAvailable class types: 2nd and 3rd' },
    ];

    return (
        <div className="services-container">
            <h2>Our Services</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <h3>{service.title}</h3>
                        <p>{service.details}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
