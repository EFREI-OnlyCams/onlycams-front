// BasketService.tsx
import { Product } from '../utils/product-type';
import AuthenticationService from './authentication-service';
import productService from './product-service';

export default class BasketService {
    static async addProductToBasket(productId: number, quantity: number): Promise<void> {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            throw new Error("User ID not found");
        }
	
        const response = await fetch(`http://localhost:8081/basket/add/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, productId, quantity }),
        });

        if (!response.ok) {
            throw new Error("Failed to add product to basket");
        }
    }

    static async getBasket(): Promise<string[]> {
		const userId = localStorage.getItem('userId');
		if (!userId) {
			throw new Error("User ID not found");
		}
	
		const response = await fetch(`http://localhost:8081/basket/get/${userId}`);
		if (!response.ok) {
			throw new Error("Failed to fetch basket");
		}
	
		const basketItems = await response.json();
		console.log(basketItems);
		return basketItems;
	}	
}
