import {Page,Locator} from "@playwright/test";

export class Cart{

    readonly page:Page;
    readonly checkout:Locator;
    readonly productItem: Locator;
    readonly productPrice: Locator;

    constructor(page:Page){
        this.page = page;
        this.checkout =  page.getByRole('button', { name: 'Checkout❯' });
        this.productItem = page.locator('li.items.even');
        this.productPrice = page.locator('.value').nth(1)
    }

    async clickCheckoutButton(){
        await this.checkout.click();
    }

   async getProductNameInCart(productName:string){
    await this.productItem.first().waitFor();
    const Name = await this.productItem.filter({hasText:productName});
    return Name;
   }
   async getProductPriceInCart(productName:string){
    const price = await this.productPrice.textContent();
    return Number(price?.replace('$', '').trim());
   }
   async clickDeleteButton(productName:string){
    await this.productItem.filter({hasText:productName}).locator('button.btn-danger').click();
   }

}