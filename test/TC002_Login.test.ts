import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import AccountPage from "../page/Account.page";
import HomePage from "../page/Home.page";
import Env from "../utils/Environment";

describe("TC001", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;


    let home: HomePage;
    let account: AccountPage;

    beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto(Env.test);
        home = new HomePage(page);
        account = new AccountPage(page);
    })

    test("Positive: Login", async () => {

        expect(page.url()).toBe("https://parabank.parasoft.com/parabank/index.htm");
        await home.enterUsername("tomsmith");
        await home.enterPassword("tomsmith");
        await home.clickLoginButon;
        expect(page.url()).toBe("https://parabank.parasoft.com/parabank/login.htm");
        
        const actualText = await account.sHeaderText;
        const expectedText = ""
        expect(actualText).toBe




    });


    afterAll(async () => {

    })
})