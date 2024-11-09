// src/components/CakeCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CakeCard.css';

const CakeCard = ({ cake }) => (
  <div className="cake-card">
    <img src={cake.image} alt={cake.name} className="cake-img" />
    <h3>{cake.name}</h3>
    <p>Starting from ${cake.price.small}</p>
    <Link to={`/cake/${cake.id}`} className="details-link">View Details</Link>
  </div>
);

export default CakeCard;
