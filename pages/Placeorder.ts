import {Page,Locator} from "@playwright/test";

export class Placeorder{
    readonly page:Page;
    readonly selectCountry:Locator;
    readonly placeOrderButton:Locator;
    readonly options:Locator;
    readonly message:Locator;
    readonly orderId:Locator;

    constructor(page:Page){
        this.page = page;
        this.selectCountry =   page.getByRole('textbox', { name: 'Select Country' });
        this.placeOrderButton =page.getByText('Place Order');
        this.options = page.locator('button.ta-item');
        this.message = page.getByRole('heading', { name: 'Thankyou for the order.' });
        this.orderId = page.locator('.em-spacer-1 .ng-star-inserted');
    }

  async selectCountryOption(country: string) {
    await this.selectCountry.click();
    await this.selectCountry.pressSequentially(country, { delay: 100 });

   await this.options.first().waitFor();

    
    await this.options
      .filter({ has: this.page.locator(`span:text-is("${country}")`) })
      .click();
  }
 

  async clickPlaceOrderButton() {
    await this.placeOrderButton.click();
  }

  async getOrderId() {
   const orderIdText = await this.orderId.textContent();
  
  if (!orderIdText) {
    return null;
  }

  const cleanedOrderId = orderIdText.trim().replace(/\|/g, "");
  return cleanedOrderId;

  }

}