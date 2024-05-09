import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../utils/product-type';

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { name, image, description, price } = product;
    const detailsLink = `/product/${product.id}`; // URL vers les détails du produit

    return (
        <div className="card">
            <div className="card-image">
                <Link to={detailsLink}>
                    <img src={image} alt={name} className="zoom-on-hover" />
                </Link>
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
                <p className="price">Prix : ${price.toFixed(2)}</p>
            </div>
            {/* Ajoutez ici d'autres éléments d'action comme "Ajouter au panier" si nécessaire */}
        </div>
    );
};

export default ProductCard;
