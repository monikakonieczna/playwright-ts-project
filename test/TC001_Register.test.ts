import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import AccountPage from "../page/Account.page";
import HomePage from "../page/Home.page";
import RegistrationPage from "../page/Registration.page";
import Env from "../utils/Environment";
import * as data from "../utils/DataGenerator"

describe("TC001", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;


    let home: HomePage;
    let registration: RegistrationPage;
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
        registration = new RegistrationPage(page);
    })

    test("Positive: Login", async () => {

        expect(page.url()).toBe("https://parabank.parasoft.com/parabank/index.htm");
        home.clickRegisterLink;
        const actualText = await registration.sH1Text;
        const expectedText = "Signing up is easy!";
        expect(actualText).toEqual(expectedText);

        const customerData = data.getCustomerData();
        const firstname = customerData.firstname;
        const lastname = customerData.lastname;
        const address = customerData.address;
        const city = customerData.city;
        const state = customerData.state;
        const zipCode = customerData.zipCode;
        const phone  =  customerData.phone;
        const ssn = customerData.ssn;
        const username = customerData.username;
        const password = customerData.password;
        const confirm = customerData.confirm;

        registration.fillRegistrationForm(firstname, lastname, address, city, state, zipCode, phone, ssn, username, password, confirm);
        registration.clickRegisterBtn;

    });


    afterAll(async () => {

    })
})