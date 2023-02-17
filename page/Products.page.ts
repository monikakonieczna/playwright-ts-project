import { expect, Locator, Page } from "@playwright/test";
import { Select } from '../utils/enums/select.enum';
import * as selectors from '../utils/selectors.json';


export default class ProductsPage {


    constructor(public page: Page) {
    }

    selectMap = new Map<Select, string>([
        [Select.SORT, selectors.ProductsPage.sortSelect]
    ])

    get getTitle() {
        return this.page.locator(selectors.ProductsPage.pageTittle).textContent();
    }

    async addToCart(product: string) {
        await this.page.locator("button[data-test*='" + product + "']").click();
    }

    async isAddedToCart() {
        return await this.page.locator(selectors.ProductsPage.cartBadge).isEnabled();
    }

    get getCartItemsAmount() {
        return this.page.locator(selectors.ProductsPage.cartBadge).textContent();
    }

    async navigateToCart() {
        await this.page.locator(selectors.ProductsPage.cartLink).click();
    }

    get getTextFromBackpackButton() {
        return this.page.locator(selectors.ProductsPage.backpackButton).textContent();
    }

    public getSelect(select: Select): Locator {
        //not null assertion operator
        return this.page.locator(this.selectMap.get(select)!);
    }

    async selectByValue(value: string, select: Select) {
        const dropdown = this.getSelect(select);
        await dropdown.selectOption(value);
    }

    async getProductsNames() {
        const itemsNamesList = await this.page.$$(selectors.ProductsPage.productsTitles);
        const titlesArray: string[] = [];
        for (let i = 0; i < itemsNamesList.length; i++) {
            titlesArray[i] = (await itemsNamesList[i].textContent())!;
        }
        return titlesArray;
    }

    async getProductsPrice() {
        const itemsPriceList = await this.page.$$(selectors.ProductsPage.productsPrices);
        const pricesArray: string[] = [];
        for (let i = 0; i < itemsPriceList.length; i++) {
            pricesArray[i] = (await itemsPriceList[i].textContent())!;
        }
        return pricesArray;
    }
}