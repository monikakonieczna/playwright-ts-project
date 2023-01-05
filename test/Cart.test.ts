import { test, expect } from "@playwright/test";
import ProductsPage from "../page/Products.page";
import LoginPage from "../page/Login.page";
import CartPage from "../page/Cart.page";
import * as users from "../data/credentials.json";

test.describe("Cart Feature", async () => {

    let loginPage: LoginPage;
    let productsPage: ProductsPage;
    let cartPage: CartPage;

    test.beforeEach(async ({ page, baseURL}) => {
        loginPage = new LoginPage(page);
        await page.goto(`${baseURL}`);
        await loginPage.enterUsername(users.standard.username);
        await loginPage.enterPassword(users.standard.password);
        await loginPage.clickLoginButon();
        productsPage = new ProductsPage(page);
        expect(await productsPage.getTitle).toBe("Products");
    })

    test("Positive: Standard user tries to add 1 product to the cart.", async ({ page }) => {

        //add backpack to the cart
        productsPage.addToCart("backpack");
        //check that there is 1 element in the cart
        expect(await productsPage.isAddedToCart()).toBe(true);
        //navigate to the cart
        cartPage = new CartPage(page);
        await productsPage.navigateToCart();
        //check that your cart has been opened
        expect(await cartPage.getTitle).toBe("Your Cart");

        //check that element is in the cart
        expect(await cartPage.getCartQuantity).toBe("1");
        expect(await cartPage.getItemName).toBe("Sauce Labs Backpack");
    
    });
})
