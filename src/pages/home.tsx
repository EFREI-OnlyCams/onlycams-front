// Créer une page d'accueil pour une application d'audiovisuel (caméras et appareils photos)

import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate} from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';

const Home : FunctionComponent = () => {
	const images = [
		'./images/caroussel-1.jpeg',
		'./images/caroussel-2.jpg',
		'./images/caroussel-3.jpeg',
    ];

	const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Nombre d'images visibles à la fois
        slidesToScroll: 1 // Nombre d'images à faire défiler à la fois
    };

	const products = [
        {
            id: 1,
            name: 'Cameras',
            image: './images/products-camera.jpg',
            description: 'Découvrez notre sélection de caméras professionnelles.',
            link: '/cameras'
        },
        {
            id: 2,
            name: 'Appareils photos',
            image: './images/products-appareilphoto.jpg',
            description: 'Explorez nos appareils photo haut de gamme pour des clichés exceptionnels.',
            link: '/photos'
        }
        // Ajoutez d'autres produits ici...
    ];

	return (
		<div className="Center">
			<Slider {...settings}>
				{images.map((image, index) => (
					<div key={index} className="slider-images">
						<img src={image} alt={`caroussel-${index + 1}`}/>
					</div>
				))}
			</Slider>

			<div className="products-container">
            {products.map((product) => (
                <Link to={product.link} className="product-item" key={product.id}>
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                </Link>
            ))}
        </div>
		</div>
  	);
}

export default Home;