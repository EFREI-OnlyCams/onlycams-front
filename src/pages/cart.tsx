import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BasketService from '../services/basket-service';
import productService from '../services/product-service';
import { Product } from '../utils/product-type';
import '../css/cart.css';

const Cart: FunctionComponent = () => {
  const [basketProducts, setBasketProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBasket = async () => {
      try {
        const productIds: string[] = await BasketService.getBasket(); // Fetch product IDs from the basket
        console.log('productIds', productIds);
        
        // Fetch product details based on IDs
        const products = await productService.getProductsByIds(productIds);
        console.log('products', products);
        setBasketProducts(products);
      } catch (error) {
        console.error('Error fetching basket products', error);
      } finally {
        setLoading(false);
      }
    };

    

    fetchBasket();
  }, []);

  const handleClearBasket = async () => {
    try {
      await BasketService.clearBasket();
      setBasketProducts([]);
    } catch (error) {
      console.error('Error clearing basket', error);
    }
  };  

  const totalPrice = basketProducts.reduce((total, product) => total + product.price, 0);

  if (loading) {
    return <div>Loading...</div>; // Display loading state while fetching product details
  }

  return (
    <div className="container cart-page">
      <h2 className='title'>Shopping Cart</h2>

      {basketProducts.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
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
                    <p>{product.description}</p>
                    <p>Category: {product.category}</p>
                    <p>Price: {product.price} €</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {basketProducts.length > 0 && (
        <div className="total-section">
          <h4>Total Price: {totalPrice} €</h4>
          <button onClick={handleClearBasket} className="waves-effect waves-light btn red">
            Clear Cart
          </button>
          <Link to="/order" className="waves-effect waves-light btn">
            Proceed to the order
          </Link>
        </div>
        
      )}
    </div>
  );
};

export default Cart;
