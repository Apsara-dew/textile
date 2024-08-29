import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>About Us</h4>
        <p>Information about the company.</p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: info@glorious.com</p>
        <p>Address: 123 Street Name, City, Country</p>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
