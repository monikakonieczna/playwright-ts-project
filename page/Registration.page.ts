import { Page } from "@playwright/test";


export default class HomePage {

    constructor(public page: Page){
    }

    //Locators
    public get eFirstnameInput(){
        return this.page.locator("input[id='customer.firstName']");
    }

    public get eLastnameInput(){
        return this.page.locator("input[id='customer.lastName']");
    }

    public get eAddressInput(){
        return this.page.locator("input[id='customer.address.street']");
    }
    
    public get eCityInput(){
        return this.page.locator("input[id='customer.address.city']");
    }

    public get eStateInput(){
        return this.page.locator("input[id='customer.address.state']");
    }

    public get eZipCodeInput(){
        return this.page.locator("input[id='customer.address.zipCode']");
    }

    public get ePhoneInput(){
        return this.page.locator("input[id='customer.phoneNumber']");
    }

    public get eSsnInput(){
        return this.page.locator("input[id='customer.ssn']");
    }

    public get eUsernameInput(){
        return this.page.locator("input[id='customer.username']");
    }

    public get ePasswordInput(){
        return this.page.locator("input[id='customer.password']");
    }

    public get eConfirmPasswordInput(){
        return this.page.locator("input[id='repeatedPassword']");
    }

    public get eRegisterBtn(){
        return this.page.locator("input[value='Register']");
    }

    public get sH1Text(){
        return this.page.textContent('h1');
    }

    
    public async clickRegisterBtn(){
        await this.eRegisterBtn?.click();
    } 

    public async fillRegistrationForm(firstname: string, lastname: string, address: string, city: string, state: string, zipcode: string, phone: string, ssn: string, username: string, password: string, confirm: string){
        await this.eFirstnameInput.fill(firstname);
        await this.eLastnameInput.fill(lastname);
        await this.eAddressInput.fill(address);
        await this.eCityInput.fill(city);
        await this.eStateInput.fill(state);
        await this.eZipCodeInput.fill(zipcode);
        await this.ePhoneInput.fill(phone);
        await this.eSsnInput.fill(ssn);
        await this.eUsernameInput.fill(username);
        await this.ePasswordInput.fill(password);
        await this.eConfirmPasswordInput.fill(confirm);
    } 







}