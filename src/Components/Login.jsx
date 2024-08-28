import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/web/user/login', {
        email,
        password,
      });
  
      // Access the role from the response
      const role = res.data.user.role;
      console.log('role', role);
  
      // Navigate based on the user's role
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Failed to login:', error);
      setError(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };
  

  return (
    <div>
      <NavBar />
      <div className="login-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="login-form"
        >
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password atleast 6 charactors"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
