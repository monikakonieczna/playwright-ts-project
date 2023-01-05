import { expect, Locator, Page } from "@playwright/test";


export default class HomePage {


    constructor(public page: Page){
    }

    async enterUsername(username: string){
        await this.page.locator("input[name='username']").type(username);
    }

    async enterPassword(password: string){
        await this.page.locator("input[name='password']").type(password);
    }


    async clickHomeLink() {
        await this.page.click("a:text('home')");
    }

    async clickRegisterLink(){
        expect(this.page.locator("a[href='lookup.htm']")).toBeVisible();
        await this.page.click("a[href='lookup.htm']", { strict: true });
    }

    async clickLoginButon(){
        await this.page.click("input[value='Log In']");
    }










}