import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../services/product-service';
import { Product } from '../utils/product-type';
import './product-details.css';

const ProductDetails: FunctionComponent = () => {
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
                <button className='btn'>Ajouter au panier</button>
                <button className='btn'>Acheter maintenant</button>
            </div>
        </div>
    );
};

export default ProductDetails;
