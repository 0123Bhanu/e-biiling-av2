import React, { useState } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar({ setLogged }) {
    const [isOpen, setIsOpen] = useState(false);

    const logOut = () => {
        setLogged(false);
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <nav className="navbar">
                <div className="nav-container">
                    <label htmlFor="menu-toggle" className="menu-icon" onClick={toggleMenu}>&#9776;</label>
                    <input type="checkbox" id="menu-toggle" checked={isOpen} readOnly />
                    <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                        <li onClick={toggleMenu}><NavLink to="/addproduct">Add Product</NavLink></li>
                        <li onClick={toggleMenu}><NavLink to="/addcustomer">Add Customer</NavLink></li>
                        <li onClick={toggleMenu}><NavLink to="/allproduct">All Product</NavLink></li>
                        <li onClick={toggleMenu}><NavLink to="/allcustomer">All Customer</NavLink></li>
                        <li onClick={toggleMenu}><button onClick={logOut}>Log Out</button></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
