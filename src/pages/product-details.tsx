import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productService from '../services/product-service';
import { Product } from '../utils/product-type';
import '../css/product-details.css';
import BasketService from '../services/basket-service';
import AuthenticationService from '../services/authentication-service';

const ProductDetails: FunctionComponent = () => {
	const Navigate = useNavigate();

    const { productId } = useParams<{ productId: string }>(); // Extraire productId des paramètres d'URL
    const [product, setProduct] = useState<Product | undefined>(undefined);

    useEffect(() => {
        // Charger les détails du produit à partir du service productService
        const fetchedProduct = productService.getProductData(productId);
        setProduct(fetchedProduct);
    }, [productId]); // Exécuter cette fonction useEffect à chaque changement de productId

    if (!product) {
        return <div>Chargement en cours...</div>; // Afficher un message de chargement tant que le produit n'est pas chargé
    }

    const { name, image, description, price } = product;

	const quantityOptions = [1, 2, 3, 4, 5]; 

	const handleLoginRedirect = () => {
		localStorage.setItem('redirectPath', window.location.pathname);
		Navigate('/login');
	};

	const handleAddToBasket = () => {
		const selectedQuantity = document.getElementById('quantity') as HTMLSelectElement | null;
	  
		if (selectedQuantity) {
		  const quantity = selectedQuantity.value; // Récupère la valeur sélectionnée dans le <select>
		  
		  // Si je suis connecté, j'ajoute le produit au panier en fonction de la quantité sélectionnée
		  if (AuthenticationService.isAuthenticated()) {
			const productId = 'yourProductId'; // Remplacez par votre logique pour obtenir l'ID du produit
			const quantityValue = parseInt(quantity); // Convertit la chaîne en nombre entier
	  
			// Ajoute le produit au panier la quantité sélectionnée de fois
			for (let i = 0; i < quantityValue; i++) {
			  BasketService.addProductToBasket(productId);
			}
		  } else {
			// Redirige l'utilisateur vers la page de connexion
			handleLoginRedirect();
		  }
		}
	  };	  

	const handleGoToBuy = () => {
		// Sinon je redirige l'utilisateur vers la page de connexion
		if (!AuthenticationService.isAuthenticated()) {
			handleLoginRedirect();
		}

		// Si je suis connecté, je vais tout de suite l'acheter
	}
    return (
        <div className='product-details'>
            <img src={image} alt={name} className='product-image' />
	            <div className='product-info'>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Prix: {price} €</p>
                {/* Sélecteur de quantité */}
                <div className='quantity-selector'>
                    <label htmlFor='quantity'>Quantité:</label>
                    <select id='quantity' name='quantity'>
                        {quantityOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                {/* Boutons d'action */}
                <button className='btn' onClick={handleAddToBasket}>Ajouter au panier</button>
                <button className='btn' onClick={handleGoToBuy}>Acheter maintenant</button>
            </div>
        </div>
    );
};

export default ProductDetails;
