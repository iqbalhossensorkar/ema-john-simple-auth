import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import google from "../../icons/google.png"
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('');

    const handleEmailSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        setError('')

        if (password !== confirmPassword) {
            setError('Password not matched')
            return;
        }
        // if (!/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)) {
        //     setError("Password must contain at least one Special Symbol.");
        //     return;
        // }
        // if (!/^.{8,16}$/.test(password)) {
        //     setError("Password must be 8-16 Characters Long.");
        //     return;
        // }
        // if (!/^(?=.*[0-9]).*$/.test(password)) {
        //     setError("Password must contain at least one Digit.");
        //     return;
        // }
        // if (!/^\S*$/.test(password)) {
        //     setError("Password must not contain Whitespaces.");
        //     return;
        // }
        // if (!/^(?=.*[A-Z]).*$/.test(password)) {
        //     setError("Password must have at least one Uppercase Character.");
        //     return;
        // }
        // if (!/^(?=.*[a-z]).*$/.test(password)) {
        //     setError("Password must have at least one Lowercase Character.");
        //     return;
        // }

        createUser(email, password)
            .then(result => {
                form.reset();
                const loggedIn = result.user;
                console.log(loggedIn); 
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    return (
        <>
            <div className='form-container'>
                <div className="form-title">Sign Up</div>
                <form onSubmit={handleEmailSubmit}>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                        <p style={{ marginLeft: '42px', color: 'red', fontSize: '14px', marginTop: '4px' }}>{error}</p>
                    </div>
                    <div className='form-control'>
                        <label htmlFor="confirmPassword">Connfirm Password</label>
                        <input type="password" name="confirmPassword" id="" required />
                        <p style={{ marginLeft: '42px', color: 'red', fontSize: '14px', marginTop: '4px' }}>{error}</p>
                    </div>
                    <input className='btn-submit' type="submit" value="Sign Up" />
                </form>
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