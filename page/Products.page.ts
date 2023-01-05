import { expect, Locator, Page } from "@playwright/test";


export default class ProductsPage {


    constructor(public page: Page){
    }

    get getTitle(){
        return this.page.locator("span[class='title']").textContent();
    }

    async addToCart(product: string){
        await this.page.locator("button[data-test*='" + product + "']").click();
    }

    async isAddedToCart(){
        return await this.page.locator(".shopping_cart_badge").isEnabled();
    }

    async navigateToCart(){
        await this.page.locator(".shopping_cart_link").click();
    }

}