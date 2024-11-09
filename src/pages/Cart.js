import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Cart.css';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate(); // Hook to navigate to another route

  const handleRemove = (index) => {
    // Filter out the item we want to remove from the cart
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart); // Update the cart context with the new cart array
  };

  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    // Show alert thanking the user for their order
    alert("Thanks for your order!");
    // Clear the cart after the alert
    setCart([]); // Clear the cart
    // Navigate to the checkout page after clearing the cart
    navigate('/checkout'); // Assuming your checkout route is '/checkout'
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => handleRemove(index)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="total-cost">
            <h3>Total: ${totalCost}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
