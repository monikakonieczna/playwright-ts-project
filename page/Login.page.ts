import { expect, Locator, Page } from "@playwright/test";


export default class HomePage {


    constructor(public page: Page){
    }

    async enterUsername(username: string){
        await this.page.locator("input[data-test='username']").type(username);
    }

    async enterPassword(password: string){
        await this.page.locator("input[data-test='password']").type(password);
    }


    async clickLoginButon(){
        await this.page.click("input[data-test='login-button']");
    }

    get getErrorMessage(){
        return this.page.locator("h3[data-test='error']").textContent();
    }

}