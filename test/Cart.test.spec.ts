import { test, expect } from "@playwright/test";
import ProductsPage from "../page/Products.page";
import LoginPage from "../page/Login.page";
import CartPage from "../page/Cart.page";
import * as users from "../data/credentials.json";

test.describe("Cart Feature @cart", async () => {

    let loginPage: LoginPage;
    let productsPage: ProductsPage;
    let cartPage: CartPage;

    test.beforeEach(async ({ page, baseURL }) => {
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

    test("Positive: Standard user tries to add 1 product to the cart and remove.", async ({ page }) => {

        //add backpack to the cart
        await productsPage.addToCart("backpack");
        //check that there is 1 element in the cart
        expect(await productsPage.isAddedToCart()).toBe(true);

        //check that button shows 'remove' statement
        expect(await productsPage.getTextFromBackpackButton).toEqual('Remove');

        //remove backpack from the cart
        await productsPage.addToCart("backpack");

    });

    test("Positive: Standard user tries to add 1 product to the cart and then delete from the cart.", async ({ page }) => {

        //add backpack to the cart
        await productsPage.addToCart("backpack");
        //check that there is element in the cart
        expect(await productsPage.isAddedToCart()).toBe(true);
        //navigate to the cart
        cartPage = new CartPage(page);
        await productsPage.navigateToCart();
        //check that your cart has been opened
        expect(await cartPage.getTitle).toBe("Your Cart");

        //check that element is in the cart
        expect(await cartPage.getCartQuantity).toBe("1");
        expect(await cartPage.getItemName).toBe("Sauce Labs Backpack");

        //remove item from the cart
        cartPage.removeItem('backpack');
        //check that element is no longer in the cart
        expect(cartPage.getShoppingCartBadge).toBeNull;



    });

    test("Positive: Standard user tries to add 2 products to the cart.", async ({ page }) => {

        //add backpack to the cart
        await productsPage.addToCart("backpack");
        //check that there is element in the cart
        expect(await productsPage.isAddedToCart()).toBe(true);
        //check that there is 1 element in the cart
        expect(await productsPage.getCartItemsAmount).toBe("1");

        //add second item to the cart
        await productsPage.addToCart("bike-light");
        //check that there are 2 elements in the cart
        expect(await productsPage.getCartItemsAmount).toBe("2");

    });
})
