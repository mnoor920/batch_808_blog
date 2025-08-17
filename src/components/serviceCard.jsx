import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../assets/Icon.svg'

const ServiceCard = ({ title, desc, link }) => {
    return (
        <div className="service-card" >
            <div className="top_part_card">
                <div className="img">
                    <img src={Icon} alt="Service" />
                </div>
                <div className="title">
                    <h3>{title}</h3>
                </div>
            </div>
            <p>{desc}</p>
            <Link to={link} className="btn">
                Learn More
            </Link>
        </div>
    )
}

export default ServiceCard
