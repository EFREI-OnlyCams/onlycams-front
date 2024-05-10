import { Product } from "../utils/product-type";

export default class productService {
	
	static getProductData(productId: string | undefined): Product | undefined {
		// Si productId est indéfini, retourner undefined
		if (productId === undefined) {
			return undefined;
		}

		// Simuler les données des produits
		const products: Record<string, Product> = {
			'canon-new-canonet-28': {
				id: 'canon-new-canonet-28',
				name: 'Canon New Canonet 28',
				image: '../appareils-photos/canon-new-canonet-28.png',
				description: 'Compact and lightweight film camera with manual focus and aperture-priority automatic exposure.',
				price: 399.99, // Exemple de prix
				category : 'appareil-photo'
			},
			'appareil-photo-2': {
				id: 'appareil-photo-2',
				name: 'Appareil Photo 2',
				image: '../appareils-photos/canon-2.png',
				description: 'High-resolution DSLR camera with advanced features, including a 45.7-megapixel sensor',
				price: 499.99, // Exemple de prix
				category : 'appareil-photo'
			},
			'appareil-photo-3': {
				id: 'appareil-photo-3',
				name: 'Appareil Photo 3',
				image: '../appareils-photos/canon-3.png',
				description: 'Mirrorless camera with a full-frame sensor, impressive autofocus capabilities, and 4K video recording.',
				price: 599.99, // Exemple de prix
				category : 'appareil-photo'
			},
			'appareil-photo-4': {
				id: 'appareil-photo-4',
				name: 'Appareil Photo 4',
				image: '../appareils-photos/cameras-4.png',
				description: 'Mirrorless camera known for its retro design, excellent image quality, and advanced video features,',
				price: 699.99, // Exemple de prix
				category : 'appareil-photo'
			},
			'camera-1':{
				id: 'camera-1',
				name: 'ULTRA X MACHINE',
				image: '../cameras/camera1.png',
				description: 'A versatile camera ideal for capturing memories on the go. With high-resolution imaging and easy-to-use features',
				price: 299.99, // Exemple de prix
				category : 'camera'
			},
			'camera-2':{
				id: 'camera-2',
				name: 'VIDEO PRO',
				image: '../cameras/camera2.png',
				description: 'Elevate your photography game with Camera 2. Packed with advanced features and a sleek design',
				price: 399.99, // Exemple de prix
				category : 'camera'
			},
			'camera-3':{
				id: 'camera-3',
				name: '999 IQ CAMERA',
				image: '../cameras/camera3.png',
				description: 'Keep your home or office safe and secure with Camera 3. Featuring advanced motion detection and night vision capabilities',
				price: 499.99, // Exemple de prix
				category : 'camera'
			},
			'camera-4':{
				id: 'camera-4',
				name: 'Camera Best Seller',
				image: '../cameras/camera4.png',
				description: 'Experience the ultimate in photographic excellence with Camera 4. From breathtaking landscapes to intimate portraits',
				price: 599.99, // Exemple de prix
				category : 'camera'
			}
		};

		// Récupérer le produit correspondant à productId dans l'objet products
		const product: Product | undefined = products[productId];

		return product;
	}

	static getProducts(): Product[] {
		return [
			{
				id: 'canon-new-canonet-28',
				name: 'Canon New Canonet 28',
				image: './appareils-photos/canon-new-canonet-28.png',
				description: 'Compact and lightweight film camera with manual focus and aperture-priority automatic exposure.',
				price: 399.99, // Exemple de prix
				category : 'appareil-photo'
			},
			{
				id: 'appareil-photo-2',
				name: 'Nikon D850',
				image: './appareils-photos/canon-2.png',
				description: 'High-resolution DSLR camera with advanced features, including a 45.7-megapixel sensor',
				price: 499.99, // Exemple de prix
				category : 'appareil-photo'
			},
			{
				id: 'appareil-photo-3',
				name: 'Sony Alpha A7 III',
				image: './appareils-photos/canon-3.png',
				description: 'Mirrorless camera with a full-frame sensor, impressive autofocus capabilities, and 4K video recording.',
				price: 599.99, // Exemple de prix
				category : 'appareil-photo'
			},
			{
				id: 'appareil-photo-4',
				name: 'Instax 2024',
				image: './appareils-photos/cameras-4.png',
				description: 'Mirrorless camera known for its retro design, excellent image quality, and advanced video features, ',
				price: 699.99, // Exemple de prix
				category : 'appareil-photo'
			},
			{
				id: 'camera-1',
				name: 'ULTRA X MACHINE',
				image: './cameras/camera1.png',
				description: 'A versatile camera ideal for capturing memories on the go. With high-resolution imaging and easy-to-use features',
				price: 299.99, // Exemple de prix
				category : 'camera'
			},
			{
				id: 'camera-2',
				name: 'VIDEO PRO',
				image: './cameras/camera2.png',
				description: 'Elevate your photography game with Camera 2. Packed with advanced features and a sleek design',
				price: 399.99, // Exemple de prix
				category : 'camera'
			},
			{
				id: 'camera-3',
				name: '999 IQ CAMERA',
				image: './cameras/camera3.png',
				description: 'Keep your home or office safe and secure with Camera 3. Featuring advanced motion detection and night vision capabilities',
				price: 499.99, // Exemple de prix
				category : 'camera'
			},
			{
				id: 'camera-4',
				name: 'Camera Best Seller',
				image: './cameras/camera4.png',
				description: 'Experience the ultimate in photographic excellence with Camera 4. From breathtaking landscapes to intimate portraits',
				price: 599.99, // Exemple de prix
				category : 'camera'
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