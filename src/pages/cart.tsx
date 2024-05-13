import { Link } from 'react-router-dom';
import BasketService from '../services/basket-service';
import { Product } from '../utils/product-type';
import '../css/cart.css'; // Importez le CSS personnalisé pour le style de la page

const Cart = () => {
  const basketProducts = BasketService.getBasket();

  // Calcul du prix total du panier
  const totalPrice = basketProducts.reduce((total, product) => total + product.price, 0);

  return (
    <div className="container cart-page">
      <h2>Shopping Cart</h2>

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
          <Link to="/order" className="waves-effect waves-light btn">
            Proceed to the order
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
