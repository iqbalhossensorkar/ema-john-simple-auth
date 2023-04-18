import React from 'react';
import logo from '../../assets/images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Order</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Log in</Link>
                <Link to="/signin">Sign in</Link>
            </div>
        </nav>
    );
};

export default Header;