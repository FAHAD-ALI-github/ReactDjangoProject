import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Register/register.css';
import BrandLogo from '../../components/Hero/Header/BrandLogo';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', { username, password });
      navigate('/profile', { state: { user: response.data } });
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid username or password');
    }
  };

  return (
   <div className="Page ">
    <BrandLogo />
    <div className="blur page-blur-1"></div>
    <div className="form-body">
    <div className="form-container">
      <h2>Login </h2>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>
      <div className="footer">
        <p>Don't have an account? <button onClick={() => navigate('/register')}>Register</button></p>
      </div>
    </div>
    <div className="blur page-blur-2"></div>
    </div>

  <Footer/>
   </div>
  );
};

export default Login;
