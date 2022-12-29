import { Page } from "@playwright/test";


export default class AccountPage {

    private page:Page;

    constructor(page: Page){
        this.page=page;
    }

    public get sHeaderText(){
        const headerText = this.page.textContent('h2');
        if( headerText != null){
            return headerText;
        } else {
            throw new Error("No text found")
        }
    }

}