import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Section title="New In" items={newInItems} />
      <Section title="Best sellers" items={bestSellers} />
      <Footer />
    </div>
  );
}

const newInItems = [
  { name: 'Item Name', price: 'Rs. 2500', imageUrl: 'image1.jpg' },
  { name: 'Item Name', price: 'Rs. 2500', imageUrl: 'image2.jpg' },
  { name: 'Item Name', price: 'Rs. 2500', imageUrl: 'image3.jpg' },
  { name: 'Item Name', price: 'Rs. 2500', imageUrl: 'image4.jpg' },
];

const bestSellers = [
  { name: 'Item Name', price: 'Rs. 2500', imageUrl: 'image5.jpg' },
  { name: 'Item Name', price: 'Rs. 2500', imageUrl: 'image6.jpg' },
  { name: 'Item Name', price: 'Rs. 2500', imageUrl: 'image7.jpg' },
  { name: 'Item Name', price: 'Rs. 2500', imageUrl: 'image8.jpg' },
];

export default App;
