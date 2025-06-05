import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add login logic here (POST request to backend)
    setMessage('Logged in successfully!');
    setFormData({ email: '', password: '' });
  };

  return (
    <div className="login-container">
      <form className="login-form animate-fade" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Login</button>
        {message && <p className="msg">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
