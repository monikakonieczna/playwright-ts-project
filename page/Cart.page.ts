import { Page } from "@playwright/test";
import * as selectors from '../utils/selectors.json';


export default class CartPage {

    constructor(public page: Page) { }

    get getTitle() {
        return this.page.locator(selectors.CartPage.pageTittle).textContent();
    }

    get getCartQuantity() {
        return this.page.locator(selectors.CartPage.cartQuantityBadge).textContent();
    }

    get getItemName() {
        return this.page.locator(selectors.CartPage.itemName).textContent();
    }

    get getItemPrice() {
        return this.page.locator(selectors.CartPage.itemPrice).textContent();
    }

    async removeItem(product: String) {
        await this.page.locator("button[data-test*='" + product + "']").click();
    }

    get getShoppingCartBadge() {
        return this.page.locator(selectors.CartPage.cartBadge);
    }



}