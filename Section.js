import React from 'react';
import './Section.css';

function Section({ title, items }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="section-items">
        {items.map((item, index) => (
          <div className="section-item" key={index}>
            <img src={item.imageUrl} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button>Shop Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section;
