import { Page } from "@playwright/test";


export default class HomePage {

    private page:Page;

    constructor(page: Page){
        this.page=page;
    }

    // Login section

    public get eUsernameInput(){
        const usernameInput = this.page.$("input[name='username']");
        if(usernameInput != null) {
            return usernameInput;
        } else throw new Error("No element")
    }

    public get eLoginBtn(){
        const loginBtn = this.page.$("input[value='Log In']");
        if(loginBtn != null) {
            return loginBtn;
        } else throw new Error("No element")
    }

    public get ePasswordInput(){
        const passwordInput = this.page.$("input[name='password']");
        if(passwordInput != null) {
            return passwordInput;
        } else throw new Error("No element")
    }

    public get eRegisterLink(){
        const registerLink = this.page.getByText('Register');
        if(registerLink != null) {
            return registerLink;
        } else throw new Error("No element")
    }


    // Button section

    public get eHomeButton(){
        const homeBtn = this.page.$('a:text("home")');
        if(homeBtn != null){
            return homeBtn;
        } else throw new Error("No Element");
    }

    public get eAboutButton(){
        const aboutBtn = this.page.$('a:text("about")');
        if(aboutBtn != null){
            return aboutBtn;
        } else throw new Error("No Element");
    }

    public get eContactButton(){
        const contactBtn = this.page.$('a:text("contact")');
        if(contactBtn != null){
            return contactBtn;
        } else throw new Error("No Element");
    }

    public async clickHomeLink() {
        const ele = await this.eHomeButton;
        ele?.click();
    }

    public async clickAboutLink() {
        const ele = await this.eAboutButton;
        ele?.click();
    }

    public async clickContactLink() {
        const ele = await this.eContactButton;
        ele?.click();
    }

    public async enterUsername(name: string){
        const el = await this.eUsernameInput;
        await el?.fill(name);
    }

    public async enterPassword(password: string){
        const el = await this.ePasswordInput;
        await el?.fill(password);
    }

    public async clickLoginButon(){
        const el = await this.eLoginBtn;
        await el?.click();
    }

    public async clickRegisterLink(){
        const el = this.eRegisterLink;
        await el?.click();
    }
}