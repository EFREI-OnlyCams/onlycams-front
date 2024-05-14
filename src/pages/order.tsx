import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import BasketService from '../services/basket-service';
import { Product } from '../utils/product-type';
import '../css/order.css';

const Order = () => {
  const [address, setAddress] = useState('123 Main Street, City, Country'); // Default delivery address
  const [cardNumber, setCardNumber] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBasket = async () => {
      try {
        const basketProducts = await BasketService.getBasket();
        //setProducts(basketProducts);
      } catch (error) {
        console.error('Error fetching basket products', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBasket();
  }, []);

  const totalPrice = products.reduce((total, product) => total + product.price, 0);

  const handleAddressChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setAddress(e.target.value);
  };

  const handleCardNumberChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setCardNumber(e.target.value);
  };

  const placeOrder = () => {
    // Check if the card number is valid
    if (cardNumber.length !== 16) {
      alert('Invalid card number');
      return;
    }
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return <Navigate to="/command-status" />;
  }

  if (loading) {
    return <div>Loading...</div>;
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
