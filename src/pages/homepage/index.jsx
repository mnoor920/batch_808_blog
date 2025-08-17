import React, { useState } from 'react'
import Banner from './features/banner'
import OurServices from './features/ourServices'
import OurProducts from './features/ourProducts'

const Homepage = () => {
    const [showBanner, setShowBanner] = useState(true);
    const [showServices, setShowServices] = useState(false);
    const [data, setData] = useState(
        [
            {
                id: 1,
                product_name: 'Product 1',
                product_desc: 'Description for product 1',
                product_link: '/products/1'
            },
            {
                id: 2,
                product_name: 'Product 2',
                product_desc: 'Description for product 2',
                product_link: '/products/2'
            },
            {
                id: 3,
                product_name: 'Product 3',
                product_desc: 'Description for product 3',
                product_link: '/products/3'
            },
            {
                id: 4,
                product_name: 'Product 4',
                product_desc: 'Description for product 4',
                product_link: '/products/4'
            }
        ]
    )



    return (
        <div>
            <button onClick={() => setShowServices(!showServices)} >Show {showServices ? 'Products' : 'Services'}</button>
            <Banner />
            {showServices ? <OurServices /> : <OurProducts data={data} />}
            {/* <OurServices /> */}

        </div>
    )
}

export default Homepage
