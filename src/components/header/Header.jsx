import React, { useContext } from 'react';
import logo from '../../assets/images/Logo.svg'
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        console.log('Log uot');
        logOut()
            .then(result => { })
            .catch(error => { console.log('error', error.message); })

    }
    return (
        <nav className='header'>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginRight: '40px' }} className='flex'>
                <Link to='/'><img src={logo} alt="" /></Link>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginRight: '40px' }}>
                    <Link style={{ marginRight: '40px' }} to="/">Order</Link>
                    <Link style={{ marginRight: '40px' }} to="/review">Order Review</Link>
                    <Link style={{ marginRight: '40px' }} to="/inventory">Manage Inventory</Link>
                    {
                        user ?
                            <p style={{ color: 'white', marginRight: '40px' }}>{user.email}  <span>  <button onClick={handleLogOut}>sign out</button></span></p>
                            :
                            <>
                                <Link style={{ marginRight: '40px' }} to="/login">Log in</Link>
                                <Link style={{ marginRight: '40px' }} to="/signin">Sign in</Link>
                            </>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;