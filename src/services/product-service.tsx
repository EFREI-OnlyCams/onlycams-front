import { Product } from "../utils/product-type";

export default class productService {
	
	static getProductData(productId: string | undefined): Product | undefined {
		// Si productId est indéfini, retourner undefined
		if (productId === undefined) {
			return undefined;
		}

		// Simuler les données des produits
		const products: Record<string, Product> = {
			'appareil-photo-1': {
				id: 'appareil-photo-1',
				name: 'Appareil Photo 1',
				image: 'path/to/image1.jpg',
				description: 'Description détaillée de l\'appareil photo 1.',
				price: 399.99, // Exemple de prix
				category : 'appareil-photo'
			},
			'appareil-photo-2': {
				id: 'appareil-photo-2',
				name: 'Appareil Photo 2',
				image: 'path/to/image2.jpg',
				description: 'Description détaillée de l\'appareil photo 2.',
				price: 499.99, // Exemple de prix
				category : 'appareil-photo'
			},
			'appareil-photo-3': {
				id: 'appareil-photo-3',
				name: 'Appareil Photo 3',
				image: 'path/to/image3.jpg',
				description: 'Description détaillée de l\'appareil photo 3.',
				price: 599.99, // Exemple de prix
				category : 'appareil-photo'
			},
			'appareil-photo-4': {
				id: 'appareil-photo-4',
				name: 'Appareil Photo 4',
				image: 'path/to/image4.jpg',
				description: 'Description détaillée de l\'appareil photo 4.',
				price: 699.99, // Exemple de prix
				category : 'appareil-photo'
			}
		};

		// Récupérer le produit correspondant à productId dans l'objet products
		const product: Product | undefined = products[productId];

		return product;
	}

	static getProducts(): Product[] {
		return [
			{
				id: 'appareil-photo-1',
				name: 'Appareil Photo 1',
				image: 'path/to/image1.jpg',
				description: 'Description détaillée de l\'appareil photo 1.',
				price: 399.99, // Exemple de prix
				category : 'appareil-photo'
			},
			{
				id: 'appareil-photo-2',
				name: 'Appareil Photo 2',
				image: 'path/to/image2.jpg',
				description: 'Description détaillée de l\'appareil photo 2.',
				price: 499.99, // Exemple de prix
				category : 'appareil-photo'
			},
			{
				id: 'appareil-photo-3',
				name: 'Appareil Photo 3',
				image: 'path/to/image3.jpg',
				description: 'Description détaillée de l\'appareil photo 3.',
				price: 599.99, // Exemple de prix
				category : 'appareil-photo'
			},
			{
				id: 'appareil-photo-4',
				name: 'Appareil Photo 4',
				image: 'path/to/image4.jpg',
				description: 'Description détaillée de l\'appareil photo 4.',
				price: 699.99, // Exemple de prix
				category : 'appareil-photo'
			}
		];
	}

	static getProductsByIds(productIds : string[]): Product[] {
		const products = productService.getProducts();
		return products.filter(product => productIds.includes(product.id));
	}

	static getProductsByCategory(category: string): Product[] {
		const products = productService.getProducts();
		return products.filter(product => product.category === category);
	}
}