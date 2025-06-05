import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StartHome.css';
import StartHomeImage from '../assets/StartHome.jpg'
const StartHome = () => {
  const navigate = useNavigate();

  return (
    <div className="start-home">
      <div className="overlay">
        <div className="content animate-fade-in">
          <img 
            src={StartHomeImage} 
            alt="MiniJobs Logo"
            className="logo-image"
          />
          <h1>Welcome to <span>WorkEasy Portal</span></h1>
          <p>
            Need a quick helping hand? Or looking to earn by doing small jobs?  
            <strong> MiniJobs Portal</strong> connects local job seekers and service providers instantly.
          </p>
          <p>
            From plumbing to pet sitting — we help you find trusted, verified help near you.
          </p>
          <button onClick={() => navigate('/register')} className='started'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default StartHome;
