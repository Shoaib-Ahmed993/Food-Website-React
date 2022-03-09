import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            {/* Navbar  */}

            <nav className="navbar navbar-expand-lg navbar-light">
                <div id="logo" className="container">
                    <Link className="navbar-brand mx-5 logo" to="/">
                        Delicious<br /><span id="food">Food Blog</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-5 px-3" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-2">
                                <Link className="nav-link" id="homelink" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/services">Our Services</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        <div className="search">
                            <i className="fa fa-search"></i>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
