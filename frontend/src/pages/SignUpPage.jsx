import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import backgroundImage from '../images/background.jpg'
import axios from 'axios'
import toast from 'react-hot-toast'

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const navigate = useNavigate()

    const validateForm = () => {
        if (!formData.name.trim()) {
            toast.error("Full Name Required")
            return false
        }
        if (!formData.username.trim()) {
            toast.error("Username Required")
            return false 
        }
        if (!formData.email.trim()) {
            toast.error("Email Required")
            return false
        }
        if (!formData.password.trim()) {
            toast.error("Password Required")
            return false 
        }
        if (!formData.confirmPassword.trim()) {
            toast.error("Confirm Password Required")
            return false 
        } 
        if (formData.password.length < 6) {
            toast.error("Password Length Must be 6 Characters")
            return false 
        }
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords Must Match")
            return false 
        }

        return true
    }

    const handleSignUp = async (event) => {
        event.preventDefault()

        const success = validateForm()
        if (!success) return;

        try {
            const response = await axios.post('http://localhost:5001/api/auth/signup', {
                name: formData.name,
                username: formData.username,
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.confirmPassword
            });
            toast.success('User registered successfully!')
            navigate('/');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Something went wrong!')
        }
    }

    const loginLink = (event) => {
        event.preventDefault()
        navigate('/login')
    }

    return (
        <div className='sign-up'>
            <div className='sign-up-img'>
                <img src={backgroundImage} alt="sign-up-img" />
            </div>

            <div className='sign-up-container'>
                <div className='login-header'>
                    <h1>Welcome</h1>
                </div>

                <div className="login-upper-text">
                    <p>Already Have An Account? <a href="#" onClick={loginLink}>Login</a></p>
                </div>

                <form onSubmit={handleSignUp}>
                    <div className='login-input-boxes'>
                        <input 
                            type="text" 
                            className='input' 
                            placeholder="Name" 
                            name="name"
                            value={formData.name} 
                            onChange={(e) => setFormData({...formData, name: e.target.value})} 
                        />
                    </div>

                    <div className='login-input-boxes'>
                        <input 
                            type="text" 
                            className='input' 
                            placeholder="Username" 
                            name="username"
                            value={formData.username} 
                            onChange={(e) => setFormData({...formData, username: e.target.value})} 
                        />
                    </div>

                    <div className='login-input-boxes'>
                        <input 
                            type="email" 
                            className='input' 
                            placeholder="Email" 
                            name="email"
                            value={formData.email} 
                            onChange={(e) => setFormData({...formData, email: e.target.value})} 
                        />
                    </div>

                    <div className='login-input-boxes'>
                        <input 
                            type="password" 
                            className='input' 
                            placeholder="Password" 
                            name="password"
                            value={formData.password} 
                            onChange={(e) => setFormData({...formData, password: e.target.value})} 
                        />
                    </div>

                    <div className='login-input-boxes'>
                        <input 
                            type="password" 
                            className='input' 
                            placeholder="Confirm Password" 
                            name="confirmPassword"
                            value={formData.confirmPassword} 
                            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} 
                        />
                    </div>

                    <div className='login-input-boxes'>
                        <button type="submit" className='create-button'>Create</button>
                    </div>
                </form>

                <div className='login-lower-text'>
                    <input type="checkbox" className='remember' name="remember" />
                    <label>Remember Me</label>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage
