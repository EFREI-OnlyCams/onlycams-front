import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import BasketService from '../services/basket-service';
import '../css/order.css';

const Order = () => {
  const [address, setAddress] = useState('123 Main Street, City, Country'); // Adresse de livraison par défaut
  const [cardNumber, setCardNumber] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const products = BasketService.getBasket();
  const totalPrice = products.reduce((total, product) => total + product.price, 0);

  const handleAddressChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setAddress(e.target.value);
  };

  const handleCardNumberChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setCardNumber(e.target.value);
  };

  const placeOrder = () => {
	// vérification de la validité de la carte de crédit
	if (cardNumber.length !== 16) {
	  alert('Invalid card number');
	  return;
	}
	
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return <Navigate to="/command-status" />;
  }

  return (
    <div className="container card-page">
      <h2>Order Summary</h2>
      <div className="order-details">
        <h4>Delivery Address</h4>
        <input
          type="text"
          value={address}
          onChange={handleAddressChange}
          className="address-input"
        />
      </div>
      <div className="order-details">
        <h4>Products</h4>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <p><strong>{product.name}</strong></p>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="order-details">
        <h4>Total Price</h4>
        <p>${totalPrice}</p>
      </div>
      <div className="order-details">
        <h4>Payment</h4>
        <input
          type="text"
          placeholder="Enter card number"
          value={cardNumber}
          onChange={handleCardNumberChange}
          className="card-input"
        />
      </div>
      <button className="waves-effect waves-light btn" onClick={placeOrder}>Place Order</button>
      <Link to="/home" className="waves-effect waves-light btn red">Cancel</Link>
    </div>
  );
};

export default Order;
