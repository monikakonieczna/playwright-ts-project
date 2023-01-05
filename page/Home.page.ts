import { expect, Locator, Page } from "@playwright/test";


export default class HomePage {


    constructor(public page: Page){
    }

    get getTitle(){
        return this.page.locator("span[class='title']").textContent();
    }


}