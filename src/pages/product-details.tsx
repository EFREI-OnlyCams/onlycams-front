import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productService from '../services/product-service';
import { Product } from '../utils/product-type';
import '../css/product-details.css';
import BasketService from '../services/basket-service';
import AuthenticationService from '../services/authentication-service';

const ProductDetails: FunctionComponent = () => {
	const navigate = useNavigate();
	const { productId } = useParams<{ productId: string }>();
	const [product, setProduct] = useState<Product | undefined>(undefined);

	useEffect(() => {
		if (productId) {
			const fetchProduct = async () => {
				const fetchedProduct = await productService.getProductData(productId);
				setProduct(fetchedProduct);
			};

			fetchProduct();
		}
	}, [productId]);

	if (!product) {
		return <div>Chargement en cours...</div>;
	}

	const { name, image, description, price } = product;

	const quantityOptions = [1, 2, 3, 4, 5];

	const handleLoginRedirect = () => {
		localStorage.setItem('redirectPath', window.location.pathname);
		navigate('/login');
	};

	const handleAddToBasket = async () => {
		const selectedQuantity = document.getElementById('quantity') as HTMLSelectElement | null;

		if (selectedQuantity && productId) {
			const quantity = parseInt(selectedQuantity.value);

			if (AuthenticationService.isAuthenticated()) {
				try {
					await BasketService.addProductToBasket(parseInt(productId), quantity);
					alert('Product added to basket');
				} catch (error) {
					console.error('Error adding product to basket', error);
					alert('Failed to add product to basket');
				}
			} else {
				handleLoginRedirect();
			}
		}
	};

	const handleGoToBuy = () => {
		if (!AuthenticationService.isAuthenticated()) {
			handleLoginRedirect();
		} else {
			// Implement the buy logic here
			alert('Proceed to buy');
		}
	};

	return (
		<div className='product-details'>
			<img src={image} alt={name} className='product-image' />
			<div className='product-info'>
				<h2>{name}</h2>
				<p>{description}</p>
				<p>Prix: {price} €</p>
				<div className='quantity-selector'>
					<label htmlFor='quantity'>Quantité:</label>
					<select id='quantity' name='quantity'>
						{quantityOptions.map(option => (
							<option key={option} value={option}>{option}</option>
						))}
					</select>
				</div>
				<button className='btn' onClick={handleAddToBasket}>Ajouter au panier</button>
				<button className='btn' onClick={handleGoToBuy}>Acheter maintenant</button>
			</div>
		</div>
	);
};

export default ProductDetails;
