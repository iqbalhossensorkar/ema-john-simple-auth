import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import google from "../../icons/google.png"

const SignUp = () => {
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
                <form className='form-control'>
                    <label htmlFor="password">Connfirm Password</label>
                    <input type="password" name="connfirm" id="" required />
                </form>
                <input className='btn-submit' type="submit" value="Sign Up" />
                <p className='info'>Already have an account?<Link to="/login" className='login'> Login</Link></p>
                <hr className='hr' />
                <p className='or'>or</p>
                <button className='btn-google'><img src={google} alt="" className='google' /> Continue with Google</button>
            </div>
            <div className='bg'></div>
        </>
    );
};

export default SignUp;