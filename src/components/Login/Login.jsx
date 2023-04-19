import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import google from "../../icons/google.png"
import './Login.css'
import { AuthContext } from '../providers/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


const Login = () => {
    const { logIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [show, setShow] = useState(false);
    const handleShowHide = () => {
        setShow(!show);
    }
    // console.log(location);
    const from = location?.state?.from?.pathname || '/';

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                form.reset();
                const signIn = result.user;
                // console.log(signIn);
                navigate(from);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    return (
        <>
            <div className='form-container'>
                <form onSubmit={handleSignIn}>
                    <div className="form-title">Log In</div>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type={show ? "text" : "password"} name="password" id="" required />
                        <div style={{marginLeft: '430px', marginTop: '-40px'}} onClick={handleShowHide}>
                            {
                                show ? <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> : <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
                            }
                        </div>
                    </div>
                    <input className='btn-submit' type="submit" value="Login" />
                </form>
                <p className='info'>New to Ema-john ? <Link to="/signin" className='login'> Create New Account</Link></p>
                <hr className='hr' />
                <p className='or'>or</p>
                <button className='btn-google'><img src={google} alt="" className='google' /> Continue with Google</button>
            </div>
            <div className='bacg'></div>
        </>
    );
};

export default Login;