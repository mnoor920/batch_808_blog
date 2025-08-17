import React from 'react'

const Header = () => {
    return (
        <div>
            <header>
                <h1>Welcome to Our Website</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
