import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    address: ''
  });

  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('mongodb://localhost:27017', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.text();
      setResponseMsg(data);
      setFormData({ email: '', password: '', address: '' }); // Clear form
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMsg('Error submitting form');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Address"
          required
          value={formData.address}
          onChange={handleChange}
          rows={3}
        />
        <button type="submit">Register</button>
      </form>
      {responseMsg && <p className="response-msg">{responseMsg}</p>}
    </div>
  );
};

export default Register;
