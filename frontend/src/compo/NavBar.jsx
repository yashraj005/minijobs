import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ onAddClick }) => {
  const location = useLocation();

  return (
    <div className="navbar">
      <button className="brand">WorkEasy</button>
      <div className="nav-links">
        <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink>
        <NavLink to="/price" className={({ isActive }) => (isActive ? 'active' : '')}>Subscription</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact Us</NavLink>

        {/* Only show Add Mini Work button on the home page */}
        {location.pathname === '/home' && (
          <button onClick={onAddClick}>Add Mini Work</button>
        )}
      </div>
      <div className="login-register">
        <NavLink to="/login" className="logout-btn">LogIn</NavLink>
        <NavLink to="/register" className="register-btn">Register</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
