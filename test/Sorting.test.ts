import { test, expect } from "@playwright/test";
import ProductsPage from "../page/Products.page";
import LoginPage from "../page/Login.page";
import * as users from "../data/credentials.json";

test.describe("Login Feature", async () => {

    let loginPage: LoginPage;
    let productsPage: ProductsPage;

    test.beforeEach(async ({ page, baseURL}) => {
        loginPage = new LoginPage(page);
        await page.goto(`${baseURL}`);
        await loginPage.enterUsername(users.standard.username);
        await loginPage.enterPassword(users.standard.password);
        await loginPage.clickLoginButon();
        productsPage = new ProductsPage(page);
        expect(await productsPage.getTitle).toBe("Products");
    })

    test("Positive: User can sort the products by price (low to high).", async ({ page }) => {

    });

    test("Positive: User can sort the products by price (high to low).", async ({ page }) => {

    });

    test("Positive: User can sort the products by name (a to z).", async ({ page }) => {

    });

    test("Positive: User can sort the products by name (z to a).", async ({ page }) => {

    });

})