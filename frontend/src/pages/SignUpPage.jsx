import backgroundImage from '../images/background.jpg';

const SignUpPage = () => {

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
                    <p>Already Have An Account? <a href="#" >Login</a></p>
                </div>

                    <div className='login-input-boxes'>
                        <input 
                            type="text" 
                            className='input' 
                            placeholder="Name" 
                            name="name"
                            //value={formData.name} 
                            //onChange={(e) => setFormData({...formData, name: e.target.value})} 
                        />
                    </div>

                    <div className='login-input-boxes'>
                        <input 
                            type="text" 
                            className='input' 
                            placeholder="Username" 
                            name="username"
                            //value={formData.username} 
                            //onChange={(e) => setFormData({...formData, username: e.target.value})} 
                        />
                    </div>

                    <div className='login-input-boxes'>
                        <input 
                            type="email" 
                            className='input' 
                            placeholder="Email" 
                            name="email"
                            //value={formData.email} 
                            //onChange={(e) => setFormData({...formData, email: e.target.value})} 
                        />
                    </div>

                    <div className='login-input-boxes'>
                        <input 
                            type="password" 
                            className='input' 
                            placeholder="Password" 
                            name="password"
                            //value={formData.password} 
                            //onChange={(e) => setFormData({...formData, password: e.target.value})} 
                        />
                    </div>

                    <div className='login-input-boxes'>
                        <input 
                            type="password" 
                            className='input' 
                            placeholder="Confirm Password" 
                            name="confirmPassword"
                            //value={formData.confirmPassword} 
                            //onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} 
                        />
                    </div>

                    <div className='login-input-boxes'>
                        <button type="submit" className='create-button'>Create</button>
                    </div>

                <div className='login-lower-text'>
                    <input type="checkbox" className='remember' name="remember" />
                    <label>Remember Me</label>
                </div>
            </div>
        </div>
    )
};

export default SignUpPage;
