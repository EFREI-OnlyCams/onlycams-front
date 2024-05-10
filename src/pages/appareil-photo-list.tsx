import { FunctionComponent } from 'react';
import "./appareil-photo-list.css";
import ProductCard from "../components/product-card";
import productService from "../services/product-service";

const AppareilPhotoList : FunctionComponent = () => {

	const description = `
        Explorez notre sélection d'appareils photo haut de gamme pour des clichés exceptionnels.
        Découvrez les dernières technologies en matière de photographie pour capturer des images
        nettes et détaillées. Que vous soyez un photographe amateur ou professionnel, nos appareils
        photo vous permettront de saisir chaque moment avec une qualité exceptionnelle. 
    `;

	const appareilsPhoto = productService.getProductsByCategory("appareil-photo");

	return (
		<div className="main-content">
			<div className="title">
                <div className = "intro-">
				<h1>Appareils photos</h1>
                </div>
                <div className = "intro-text">
				<p>{description}</p>
                </div> 
			</div>

			<div className="row">
            {appareilsPhoto.map((product) => (
                <div className="col s12 m6 l3" key={product.id}>
                    <ProductCard product={product} />
                </div>
            ))}
        	</div>
		</div>
	);
};

export default AppareilPhotoList;