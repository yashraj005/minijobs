import React from 'react';
import './Price.css';

const services = [
  { role: "Maid", hours: 8, price: 12000 },
  { role: "Cook", hours: 10, price: 15000 },
  { role: "Watchman", hours: 12, price: 18000 },
  { role: "Pet Sitter", hours: 6, price: 10000 },
  { role: "Baby Sitter", hours: 8, price: 14000 },
];

const Price = () => {
  return (
    <div className="price-container">
      <h1 className="price-title">Service Pricing</h1>
      <h3>This Subscribtion if for month cancellation not allowed</h3>
      <div className="card-grid">
        {services.map((service, index) => (
          <div key={index} className="price-card">
            <h2 className="service-role">{service.role}</h2>
            <p className="service-hours">⏱️ {service.hours} hours/day</p>
            <p className="service-price">₹{service.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
