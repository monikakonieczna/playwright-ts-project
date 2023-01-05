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


    async clickLoginButon(){
        await this.page.click("input[value='Log In']");
    }

}