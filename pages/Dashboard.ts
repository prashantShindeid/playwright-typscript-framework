import { Locator,Page } from "@playwright/test";

export class Dashboard{
    readonly page:Page;
    readonly dashboardTitletext:Locator;
    readonly signOutButton:Locator;
    readonly AddToCartButton:Locator;
    readonly cart:Locator;

    constructor(page:Page){
        this.page = page;
        this.dashboardTitletext =page.getByRole('heading',{name:'Automation'});
        this.signOutButton = page.getByRole('button', { name: 'Sign Out' });
        this.AddToCartButton = page.getByRole('button', { name: ' Add To Cart' }).first();
        this.cart =page.getByRole('button', { name: '   Cart' })


   
    }
    async signOut(){
       await this.signOutButton.click();
    }
    async clickAddToCart(){
        await this.AddToCartButton.click();
    }
    async navigateToCart(){
        await this.cart.click();
    }
}