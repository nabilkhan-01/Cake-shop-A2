// src/SignupForm.js
import React from 'react';
import './SignupForm.css';

function SignupForm() {
  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className="buttons">
          <button type="button">Sign Up</button>
          <button type="button">Login</button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
