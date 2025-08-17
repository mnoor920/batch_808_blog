import React from 'react'
import ServiceCard from '../../../components/serviceCard'

const OurProducts = ({ data }) => {
    return (
        <div className="our-products">
            <h2>Our Products</h2>
            <p>Explore our range of products designed to enhance your blogging experience.</p>
            <div className="product_list">
                <ServiceCard title={data[0].product_name}
                    desc={data[0].product_desc}
                    link={data[0].product_link}
                />

                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </div>
    )
}

export default OurProducts
