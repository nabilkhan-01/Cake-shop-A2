// src/pages/CakeDetails.js
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import cakes from '../utils/data';
import { CartContext } from '../context/CartContext';
import './CakeDetails.css';

const CakeDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const cake = cakes.find(cake => cake.id === parseInt(id));

  const [size, setSize] = useState("small");
  const [quantity, setQuantity] = useState(1);

  if (!cake) return <p>Cake not found</p>;

  const handleAddToCart = () => {
    addToCart({ ...cake, size, quantity, price: cake.price[size] * quantity });
    alert("Cake added to cart!");
  };

  return (
    <div className="cake-details">
      <img src={cake.image} alt={cake.name} className="cake-img" />
      <div className="details">
        <h2>{cake.name}</h2>
        <p>{cake.description}</p>
        <p><strong>Ingredients:</strong> {cake.ingredients.join(", ")}</p>

        <div className="options">
          <label>
            Size:
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              {Object.keys(cake.price).map(s => (
                <option key={s} value={s}>{s} - ${cake.price[s]}</option>
              ))}
            </select>
          </label>

          <label>
            Quantity:
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </label>
        </div>

        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default CakeDetails;
