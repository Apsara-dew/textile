import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-image">
        <img src="your-image-url.png" alt="Fabric" />
      </div>
      <div className="header-logo">
        <h1>Glorious</h1>
        <p>Glorious Textile has been the go-to company since the 80's.</p>
      </div>
    </header>
  );
}

export default Header;
