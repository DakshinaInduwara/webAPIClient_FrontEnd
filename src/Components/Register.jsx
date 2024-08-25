import React from 'react';
import '../styles/Register.css';

export const Register = () => {
    return (
        <div className="register-container">
            <div className="register-box">
                <img src="/path/to/logo.png" alt="SL Railway" className="register-logo" />
                <h2>Create Your Account</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">USERNAME</label>
                        <input type="text" id="username" placeholder="Enter your username" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">EMAIL</label>
                        <input type="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" id="password" placeholder="Enter your password" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">CONFIRM PASSWORD</label>
                        <input type="password" id="confirm-password" placeholder="Confirm your password" />
                    </div>
                    <button type="submit" className="register-button">Sign Up</button>
                </form>
                <div className="login-link">
                    Already have an account? <a href="/login">Login</a>
                </div>
            </div>
        </div>
    );
}

export default Register;
