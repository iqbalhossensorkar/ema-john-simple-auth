import React from 'react';
import { Link } from 'react-router-dom';
import google from "../../icons/google.png"
import './Login.css'

const Login = () => {
    return (
        <>
        <div className='form-container'>
            <div className="form-title">Sign Up</div>
            <form className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required />
            </form>
            <form className='form-control'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" required />
            </form>
            <input className='btn-submit' type="submit" value="Login" />
            <p className='info'>New to Ema-john?<Link to="/register" className='login'> Create New Account</Link></p>
            <hr className='hr' />
            <p className='or'>or</p>
            <button className='btn-google'><img src={google} alt="" className='google' /> Continue with Google</button>
        </div>
        <div className='bacg'></div>
    </>
    );
};

export default Login;