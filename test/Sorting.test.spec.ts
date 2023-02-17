import { test, expect } from "@playwright/test";
import ProductsPage from "../page/Products.page";
import LoginPage from "../page/Login.page";
import * as users from "../data/credentials.json";
import { Select } from "../utils/enums/select.enum";
import * as utility from "../utils/utility-methods";


test.describe("Sorting Feature. @sorting", async () => {

    let loginPage: LoginPage;
    let productsPage: ProductsPage;

    test.beforeEach(async ({ page, baseURL }) => {
        loginPage = new LoginPage(page);
        await page.goto(`${baseURL}`);
        await loginPage.enterUsername(users.standard.username);
        await loginPage.enterPassword(users.standard.password);
        await loginPage.clickLoginButon();
        productsPage = new ProductsPage(page);
        expect(await productsPage.getTitle).toBe("Products");
    })

    test("Positive: User can sort the products by price (low to high).", async ({ page }) => {
        //Select sorting by Price(low to high)
        await productsPage.selectByValue("lohi", Select.SORT);

        //get all prices on a page
        const productsPrices = utility.convertStringArrayIntoNumberArray(await productsPage.getProductsPrice());
        const sortedPrices = utility.sortPriceASC(productsPrices);
        const haveSameOrder = utility.compareNumArrays(productsPrices, sortedPrices);
        expect(haveSameOrder).toBe(true);
    });

    test("Positive: User can sort the products by price (high to low).", async ({ page }) => {
        //Select sorting by Price(low to high)
        await productsPage.selectByValue("hilo", Select.SORT);

        //get all prices on a page
        const productsPrices = utility.convertStringArrayIntoNumberArray(await productsPage.getProductsPrice());
        const sortedPrices = utility.sortPriceDESC(productsPrices);
        const haveSameOrder = utility.compareNumArrays(productsPrices, sortedPrices);
        expect(haveSameOrder).toBe(true);
    });

    test("Positive: User can sort the products by name (a to z).", async ({ page }) => {
        //Select ASC sorting by Name(A-Z)
        await productsPage.selectByValue("az", Select.SORT);

        //get all titles on a page
        const productsTitles = await productsPage.getProductsNames();
        const sortedTitles = utility.sortAlphabeticallyASC(productsTitles);
        const haveSameOrder = utility.compareStringArraysWithOrder(productsTitles, sortedTitles);
        expect(haveSameOrder).toBe(true);
    });

    test("Positive: User can sort the products by name (z to a).", async ({ page }) => {
        //Select DESC sorting by Name(Z-A)
        await productsPage.selectByValue("za", Select.SORT);

        //get all titles on a page
        const productsTitles = await productsPage.getProductsNames();
        const sortedTitles = utility.sortAlphabeticallyDESC(productsTitles);
        const haveSameOrder = utility.compareStringArraysWithOrder(productsTitles, sortedTitles);
        expect(haveSameOrder).toBe(true);
    });

})