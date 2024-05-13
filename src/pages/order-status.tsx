import React from 'react';
import { Link } from 'react-router-dom';

const OrderStatus = () => {
  return (
    <div className="container">
      <h2>Order Status</h2>
      <div className="card-panel teal lighten-2">
        <span className="white-text">Your order has been successfully placed!</span>
      </div>
      <p>Thank you for your purchase.</p>
      <Link to="/home" className="waves-effect waves-light btn">Go to Home</Link>
    </div>
  );
};

export default OrderStatus;
