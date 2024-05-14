import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BasketService from '../services/basket-service';
import productService from '../services/product-service';
import { Product } from '../utils/product-type';
import '../css/commandes.css';

const CommandesPage: FunctionComponent = () => {
  const [CommandeProducts, setCommandeProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCommande = async () => {
      try {
        const productIds: string[] = await BasketService.getCommande(); // Fetch product IDs from the basket
        console.log('productIds', productIds);
        
        // Fetch product details based on IDs
        const products = await productService.getProductsByIds(productIds);
        console.log('products', products);
        setCommandeProducts(products);
      } catch (error) {
        console.error('Error fetching basket products', error);
      } finally {
        setLoading(false);
      }
    };

    
    fetchCommande();
  }, []);

  const totalPrice = CommandeProducts.reduce((total, product) => total + product.price, 0);

  if (loading) {
    return <div>Loading....</div>; // Display loading state while fetching product details
  }

  return (
    <div className="container cart-page">
      <h2>Historique de Commandes</h2>

      {CommandeProducts.length === 0 ? (
        <p>Aucune commande</p>
      ) : (
        <div className="row">
          {CommandeProducts.map((product: Product) => (
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
    </div>
  );
};

export default CommandesPage;
