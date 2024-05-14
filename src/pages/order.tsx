import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import BasketService from '../services/basket-service';
import productService from '../services/product-service';
import { Product } from '../utils/product-type';
import '../css/order.css';

const Order = () => {
  const [address, setAddress] = useState('123 Main Street, City, Country');
  const [cardNumber, setCardNumber] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [basketProducts, setBasketProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBasket = async () => {
      try {
        const productIds: string[] = await BasketService.getBasket();
        const products = await productService.getProductsByIds(productIds);
        setBasketProducts(products);
      } catch (error) {
        console.error('Error fetching basket products', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBasket();
  }, []);

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };


  const placeOrder = async () => {
    try {
      await BasketService.placeOrder();
      setOrderPlaced(true);
    } catch (error) {
      console.error('Error clearing basket', error);
    }
  };  

  if (orderPlaced) {
    return <Navigate to="/order-status" />;
  }

  const totalPrice = basketProducts.reduce((total, product) => total + product.price, 0);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container order-page">
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
        <div className="row">
          {basketProducts.map((product: Product) => (
            <div key={product.id} className="col s12 m6">
              <div className="card horizontal">
                <div className="card-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <h5>{product.name}</h5>
                    <p>Category: {product.category}</p>
                    <p>Price: ${product.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
      <Link to="/commandes" className="waves-effect waves-light btn" onClick={placeOrder}>Place Order</Link>
      <Link to="/home" className="waves-effect waves-light btn red">Cancel</Link>
    </div>
  );
};

export default Order;
