import React from 'react'
import ServiceCard from '../../../components/serviceCard'

const OurServices = () => {
    const services = [
        { title: 'Service 1', description: 'Description for service 1', link: '/services/1' },
        { title: 'Service 2', description: 'Description for service 2', link: '/services/2', },
        { title: 'Service 3', description: 'Description for service 3', link: '/services/3' },
        { title: 'Service 4', description: 'Description for service 4', link: '/services/4' }
    ];
    return (
        <div className="our-services">
            <h2>Our Services</h2>
            <p>We offer a variety of services to help you with your blogging needs.</p>
            <div className="services-list">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        desc={service.description}
                        link={service.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default OurServices
