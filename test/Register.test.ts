import { Browser, BrowserContext, chromium, Page, Locator, test, expect } from "@playwright/test";
import AccountPage from "../page/Account.page";
import HomePage from "../page/Home.page";
import RegistrationPage from "../page/Registration.page";

test("Positive: User registers with valid data.", async ({ page }) => {

    const homePage = new HomePage(page);
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    homePage.clickRegisterLink;

    expect(page.locator("h1")).toBeVisible( {timeout: 9000});
    expect(await page.locator("h1").textContent()).toBe("Signing up is easy!");

})