// src/pages/Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';
import cakes from '../utils/data';
import CakeCard from '../components/CakeCard';
import './Homepage.css';

const Homepage = () => (
  <div className="homepage">
    <header className="hero">
      <h1>Welcome to the Cake Paradise!</h1>
      <p>Delicious cakes for every occasion.</p>
    </header>
    <section className="featured-cakes">
      <h2>Featured Cakes</h2>
      <div className="cakes-grid">
        {cakes.slice(0, 4).map((cake) => (
          <CakeCard key={cake.id} cake={cake} />
        ))}
      </div>
      <Link to="/categories" className="see-more">See More Cakes</Link>
    </section>
  </div>
);

export default Homepage;
