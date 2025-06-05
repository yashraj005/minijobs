import React from 'react';
import './MiniPost.css';

const MiniPost = ({ title, description, amount, onDelete, onEdit }) => {
  return (
    <div className="mini-post">
      <h3>{title}</h3>
      <p className="desc">{description}</p>
      <p className="amount">₹ {amount}</p>
      <div className="card-actions">
        <button onClick={onEdit}>✏️ Edit</button>
        <button onClick={onDelete}>🗑️ Delete</button>
      </div>
    </div>
  );
};

export default MiniPost;
