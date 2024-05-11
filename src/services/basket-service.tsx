import AccountService from "./account-service";
import productService from "./product-service";
import { Product } from "../utils/product-type";

export default class BasketService {

	static basket: Product[] = [];

	static addProductToBasket(productId: string): void {
		const product = productService.getProductData(productId);
		if (product) {
			this.basket.push(product);
		}
	}

	static removeProductFromBasket(productId: string): void {
		this.basket = this.basket.filter((product) => product.id !== productId);
	}

	static getBasket(): Product[] {
		return this.basket;
	}
}