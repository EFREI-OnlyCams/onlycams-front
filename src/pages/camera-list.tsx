import { FunctionComponent } from 'react';
import "../css/camera-list.css";
import ProductCard from "../components/product-card";
import productService from "../services/product-service";

const CameraList : FunctionComponent = () => {
	
	// EN francais
	const description = `
		Explorez notre sélection de caméras haut de gamme pour des clichés exceptionnels.
		Découvrez les dernières technologies en matière de photographie pour capturer des images
		nettes et détaillées. Que vous soyez un photographe amateur ou professionnel, nos caméras
		vous permettront de saisir chaque moment avec une qualité exceptionnelle. Des fonctionnalités
		avancées telles que la stabilisation d'image, la résolution élevée et la connectivité sans fil
		font de nos caméras le choix parfait pour vos besoins photographiques.
		`;

	const cameras = productService.getProductsByCategory("camera");

	return (
		<div className="main-content">
			<h1 className="title">Cameras</h1>
			<p className="description">{description}</p>
			<div className="row">
			{cameras.map((product) => (
				<div className="col s12 m6 l3" key={product.id}>
					<ProductCard product={product} />
				</div>
			))}
			</div>
		</div>
	);
};

export default CameraList;