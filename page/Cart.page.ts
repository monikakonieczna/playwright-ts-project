import { Page } from "@playwright/test";


export default class CartPage {

    constructor(public page: Page){}

    get getTitle(){
        return this.page.locator(".title").textContent();
    }

    get getCartQuantity(){
        return this.page.locator(".cart_quantity").textContent();
    }

    get getItemName(){
        return this.page.locator(".inventory_item_name").textContent();
    }

    get getItemPrice(){
        return this.page.locator(".inventory_item_price").textContent();
    }

    async removeItem(product: String){
        await this.page.locator("button[data-test*='" + product + "']").click();
    }

    get getShoppingCartBadge(){
        return this.page.locator(".shopping_cart_badge");
    }

    

}