import { test, expect } from "@playwright/test";
import ProductsPage from "../page/Products.page";
import LoginPage from "../page/Login.page";
import * as users from "../data/credentials.json";

test.describe("Login Feature @login", async () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page, baseURL }) => {
        loginPage = new LoginPage(page);
        await page.goto(`${baseURL}`);
    })

    test("Positive: Standard user tries to login with correct credentials.", async ({ page }) => {

        await loginPage.enterUsername(users.standard.username);
        await loginPage.enterPassword(users.standard.password);

        await loginPage.clickLoginButon();

        const productsPage = new ProductsPage(page);

        expect(await productsPage.getTitle).toBe("Products");
    });

    test("Positive: Problem user tries to login with correct credentials.", async ({ page }) => {

        await loginPage.enterUsername(users.problem.username);
        await loginPage.enterPassword(users.problem.password);

        await loginPage.clickLoginButon();

        const productsPage = new ProductsPage(page);

        expect(await productsPage.getTitle).toBe("Products");
    });

    test("Positive: Performance user tries to login with correct credentials.", async ({ page }) => {

        await loginPage.enterUsername(users.performance.username);
        await loginPage.enterPassword(users.performance.password);

        await loginPage.clickLoginButon();

        const productsPage = new ProductsPage(page);

        expect(await productsPage.getTitle).toBe("Products");
    });


    test("Negative: User tries to login without credentials.", async ({ page }) => {

        await loginPage.enterUsername("");
        await loginPage.enterPassword("");

        await loginPage.clickLoginButon();

        expect(await loginPage.getErrorMessage).toBe("Epic sadface: Username is required");
    });

    test("Negative: User tries to login without password.", async ({ page }) => {

        await loginPage.enterUsername(users.standard.username);
        await loginPage.enterPassword("");

        await loginPage.clickLoginButon();

        expect(await loginPage.getErrorMessage).toBe("Epic sadface: Password is required");
    });

    test("Negative: User tries to login without username.", async ({ page }) => {

        await loginPage.enterUsername("");
        await loginPage.enterPassword(users.standard.password);

        await loginPage.clickLoginButon();

        expect(await loginPage.getErrorMessage).toBe("Epic sadface: Username is required");
    });
})