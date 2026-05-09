
import {Page,Locator} from '@playwright/test';

export class Order{
    readonly page:Page;
    readonly order:Locator;
    readonly expectedOrder:Locator;

    constructor(page:Page){
        this.page = page;
        this.order = page.locator("button[routerlink*='myorders']");
        this.expectedOrder = page.locator(".col-text").first();
    }

    async navigateToOrders(){
        await this.order.click();
    }

async clickViewButton(orderId: string) {
 

  await this.page
    .getByRole("row")
    .filter({ has: this.page.getByRole("rowheader", { name: orderId }) })
    .getByRole("button", { name: "View" })
    .click();
}


  async getViewPageOrderId(){
    const orderIdText = await this.expectedOrder.textContent();
    return orderIdText?orderIdText.trim():null;;
  }

}