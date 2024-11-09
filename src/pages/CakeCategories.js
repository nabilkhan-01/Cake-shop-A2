// src/pages/CakeCategories.js
import React, { useState } from 'react';
import cakes from '../utils/data';
import CakeCard from '../components/CakeCard';
import './CakeCategories.css';

const categories = ["All", "Chocolate Cakes", "Fruit Cakes"];

const CakeCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCakes = selectedCategory === "All"
    ? cakes
    : cakes.filter(cake => cake.category === selectedCategory);

  return (
    <div className="cake-categories">
      <h2>Our Cakes</h2>
      <div className="categories-filter">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="cakes-grid">
        {filteredCakes.map(cake => (
          <CakeCard key={cake.id} cake={cake} />
        ))}
      </div>
    </div>
  );
};

export default CakeCategories;
