import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router
import "./About.css"
const About = () => {
  const navigate = useNavigate(); // For navigation

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>MiniJobs Portal</strong> – the ultimate destination for finding reliable 
        and local help for your everyday tasks. Whether it's **car washing, plumbing, gardening, pet sitting**, 
        or any other small job, our platform makes it easy to connect **job seekers** with **service providers** instantly.
      </p>

      <p>
        Life can get busy, and sometimes you need an extra pair of hands to get things done. 
        With <strong>MiniJobs Portal</strong>, you can **post your job request, set your price, and hire a trusted helper** 
        in just a few clicks. Our goal is to create a seamless and efficient way for people to find 
        work and get assistance for their tasks.
      </p>

      <h2>How It Works?</h2>
      <ol>
        <li><strong>Post a Job:</strong> Describe the task, set the payment amount, and post it.</li>
        <li><strong>Find a Helper:</strong> Local service providers apply for the job.</li>
        <li><strong>Choose the Right Fit:</strong> Review applications and select the best worker.</li>
        <li><strong>Get It Done:</strong> The helper completes the task, and you make the payment.</li>
      </ol>

      <h2>Available Job Categories</h2>
      <ul>
      <ul>
  <li>🔧 Plumbing</li>
  <li>🧹 Maid Services</li>
  <li>👨‍🍳 Cook</li>
  <li>🚔 Watchman</li>
  <li>💡 Electrician</li>
  <li>🪚 Carpenter</li>
  <li>🏠 Housekeeper</li>
  <li>🌿 Gardening</li>
  <li>🐶 Pet Sitting</li>
  <li>👶 Babysitting</li>
  <li>🧼 House Cleaning</li>
  <li>🍽️ Cooking & Catering</li>
  <li>🎨 Painting & Repairs</li>
  <li>...and many more!</li>
</ul>

      </ul>

      <h2>Why Choose Us?</h2>
      <p>
        ✅ <strong>Fast & Easy:</strong> Post a job in minutes and get responses quickly.<br />
        ✅ <strong>Secure Payments:</strong> Pay only when the job is completed to your satisfaction.<br />
        ✅ <strong>Verified Workers:</strong> All service providers are checked for authenticity.<br />
        ✅ <strong>Affordable Pricing:</strong> You set your budget, and workers bid accordingly.<br />
        ✅ <strong>Flexible & Reliable:</strong> Choose helpers based on ratings, reviews, and availability.<br />
        ✅ <strong>Wide Range of Services:</strong> From simple housework to technical support – we've got you covered!
      </p>

      <h2>Our Mission</h2>
      <p>
        At <strong>MiniJobs Portal</strong>, we believe in empowering individuals by providing 
        them with opportunities to earn and grow. We strive to build a **community-driven** platform 
        where people can easily find **trustworthy and skilled** workers for their daily needs. 
        Whether you're looking for a part-time gig or seeking assistance for your chores, we're here to help!
      </p>

      <h2>Join Our Community Today!</h2>
      <p>
        Looking for help? **Post a job** and let skilled workers come to you.  
        Want to earn money? **Sign up as a service provider** and start accepting tasks that match your skills.  
        It's that simple!  
      </p>

      <button onClick={() => navigate("/")} className="gotohome">Go To Home</button>
    </div>
  );
};

export default About;
