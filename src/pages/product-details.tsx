import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../services/product-service';
import { Product } from '../utils/product-type';

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

    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt={name} style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }} />
            <p>Description : {description}</p>
            <p>Prix : ${price.toFixed(2)}</p>
        </div>
    );
};

export default ProductDetails;
