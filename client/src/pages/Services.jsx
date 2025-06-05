import React, { useState } from "react";
import "./Services.css";
import { NavLink } from "react-router-dom";

const Services = () => {
  const [selectedService, setSelectedService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setDate(""); // Reset previous selections
    setTime("");
  };

  const handleBooking = () => {
    if (selectedService && date && time) {
      console.log(`Service: ${selectedService}, Date: ${date}, Time: ${time}`);
      alert(`Service booked: ${selectedService}\nDate: ${date}\nTime: ${time}`);
    } else {
      alert("Please select a date and time before booking.");
    }
  };

  return (
    <div className="services-container">
      <NavLink to="/price" className="subscribe-button">See Our Subscription for 1 month</NavLink>
      <h1>Our Services</h1>
      <ul className="services-list">
        {[
          "🔧 Plumbing",
          "🧹 Maid Services",
          "👨‍🍳 Cook",
          "🚔 Watchman",
          "💡 Electrician",
          "🪚 Carpenter",
          "🏠 Housekeeper",
          "🌿 Gardening",
          "🐶 Pet Sitting",
          "👶 Babysitting",
          "🧼 House Cleaning",
          "🍽️ Cooking & Catering",
          "🎨 Painting & Repairs",
        ].map((service, index) => (
          <li key={index} onClick={() => handleServiceClick(service)}>
            {service}
          </li>
        ))}
      </ul>

      {/* Show date & time picker when a service is selected */}
      {selectedService && (
        <div className="booking-section">
          <h2>{selectedService}</h2>
          <div className="inputs">
          <label>Select Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Select Time:</label>
          <input
          // className="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          </div>
          <button onClick={handleBooking}>Book</button>
        </div>
      )}
    </div>
  );
};

export default Services;
