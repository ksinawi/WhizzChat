import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import backgroundImage from '../images/background.jpg';

const LoginPage = () => {

    const navigate = useNavigate();

    const signUpLink = (event) => {
        event.preventDefault();
        navigate('/signup');
    };

    return (
        <div className="login">
            <div className="login-img">
                <img src={backgroundImage} alt="login-img" />
            </div>

            <div className="login-container">
                <div className="login-header">
                    <h1>Login</h1>
                </div>

                <div className="login-upper-text">
                    <p>Need An Account? <a href="#" onClick={signUpLink}>Sign-Up</a></p>
                </div>

                <div className="login-input-boxes">
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="Username" 
                        //value={formData.username} 
                        //onChange={(e) => setFormData({...formData, username: e.target.value})} 
                    />
                </div>

                <div className="login-input-boxes">
                    <input 
                        type="password" 
                        className="input" 
                        placeholder="Password" 
                        //value={formData.password} 
                        //onChange={(e) => setFormData({...formData, password: e.target.value})} 
                    />
                </div>

                <div className="login-input-boxes">
                    <button type="submit" className="create-button">
                        Login
                    </button>
                </div>

                <div className="login-lower-text">
                    <input type="checkbox" className="remember" name="remember" />
                    <label>Remember Me</label>
                </div>
            </div>
        </div>
    )
};
  
export default LoginPage;
