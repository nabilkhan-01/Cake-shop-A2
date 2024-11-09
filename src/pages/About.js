// src/pages/About.js
import React from 'react';
import './About.css';

const About = () => (
  <div className="about-page">
    <h2>About Our Cake Shop</h2>
    <p>
      Welcome to our Cake Shop! We are passionate about creating delicious and beautiful cakes
      for every occasion. Our ingredients are sourced locally, and our cakes are baked fresh daily.
    </p>
    <p>
      Our mission is to bring a touch of sweetness to your special moments. From classic flavors
      to custom designs, we take pride in every cake we make.
    </p>
    <h3>Contact Us</h3>
    <p>Phone: 9572172780</p>
    <p>Email: info@cakeshop.com</p>
    <h3>Follow Us on Social Media</h3>
    <div className="social-links">
       <a href="https://www.instagram.com/nabilkhan_01">Instagram</a> | <a href="https://x.com/dynamickhan01?t=klYuQUNek9TrItIKnVedLw&s=09">Twitter</a>
    </div>
  </div>
);

export default About;
