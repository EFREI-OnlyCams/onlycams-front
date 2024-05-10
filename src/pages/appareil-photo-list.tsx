import { FunctionComponent } from 'react';
import "./appareil-photo-list.css";
import ProductCard from "../components/product-card";
import productService from "../services/product-service";

const AppareilPhotoList : FunctionComponent = () => {

	const description = `
        Explorez notre sélection d'appareils photo haut de gamme pour des clichés exceptionnels.
        Découvrez les dernières technologies en matière de photographie pour capturer des images
        nettes et détaillées. Que vous soyez un photographe amateur ou professionnel, nos appareils
        photo vous permettront de saisir chaque moment avec une qualité exceptionnelle. Des fonctionnalités
        avancées telles que la stabilisation d'image, la résolution élevée et la connectivité sans fil
        font de nos appareils photo le choix parfait pour vos besoins photographiques.
    `;

	const appareilsPhoto = productService.getProductsByCategory("appareil-photo");

	return (
		<div className="main-content">
			<div className="title">
				<h1>Appareils photos</h1>
				<p>{description}</p>
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