import React, { useState } from 'react';
import '../styles/Login.css';

export const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src="/path/to/logo.png" alt="SL Railway" className="login-logo" />
                <h2>{isLogin ? 'SL Railway Login' : 'SL Railway Sign Up'}</h2>
                <form>
                    {!isLogin && (
                        <div className="input-group">
                            <label htmlFor="email">EMAIL</label>
                            <input type="email" id="email" placeholder="Enter your email" />
                        </div>
                    )}
                    <div className="input-group">
                        <label htmlFor="username">USERNAME</label>
                        <input type="text" id="username" placeholder="Enter your username" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" id="password" placeholder="Enter your password" />
                        <span className="password-toggle"><i className="eye-icon"></i></span>
                    </div>
                    {!isLogin && (
                        <div className="input-group">
                            <label htmlFor="confirm-password">CONFIRM PASSWORD</label>
                            <input type="password" id="confirm-password" placeholder="Confirm your password" />
                        </div>
                    )}
                    {isLogin ? (
                        <>
                            <div className="forgot-password">
                                <a href="#">Forgot Password?</a>
                            </div>
                            <button type="submit" className="login-button">Login</button>
                        </>
                    ) : (
                        <button type="submit" className="login-button">Sign Up</button>
                    )}
                </form>
                <div className="toggle-form">
                    {isLogin ? (
                        <>
                            Don't you have an account? <a href="#" onClick={toggleForm}>Sign Up</a>
                        </>
                    ) : (
                        <>
                            Already have an account? <a href="#" onClick={toggleForm}>Login</a>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;
