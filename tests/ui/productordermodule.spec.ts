import {test,expect} from "../../fixtures/hooks-fixture";
import loginModuleData from '../../test-data/login-module.json'

test('Verify user can place an order',async ({getUrl,dashboardPage,cartPage,placeOrderPage,orderPage})=>{

    await test.step('click on the add to cart button',async()=>{
        await dashboardPage.clickAddToCart();
    });
    await test.step('Navigate to cart Page',async()=>{
        await dashboardPage.navigateToCart();
    });
    await test.step('Click on the checkout button',async()=>{
       await cartPage.clickCheckoutButton();
    });
    await test.step('Select country from dropdown',async()=>{
       await placeOrderPage.selectCountryOption('India');
    })
    await test.step('Click on the place order button',async()=>{
        await placeOrderPage.clickPlaceOrderButton();
        await placeOrderPage.message.waitFor();
    })
    
    await test.step('Verify order confirmation message and order ID',async()=>{
    await expect(placeOrderPage.message).toHaveText('Thankyou for the order.');
    let actualOrderId = (await placeOrderPage.getOrderId())?.trim();
    console.log('Order ID:', actualOrderId);
    await orderPage.navigateToOrders();
    await orderPage.clickViewButton(actualOrderId!);
    const expectedOrderId = await orderPage.getViewPageOrderId();
     console.log('Expected Order ID:', expectedOrderId +"  This is the actual Order ID: "+actualOrderId);
    await expect(expectedOrderId).toBe(actualOrderId);
    });
 
});
test('Verify user can delete product from cart',async({getUrl,dashboardPage,cartPage})=>{
     await test.step('click on the add to cart button',async()=>{
        await dashboardPage.clickAddToCart();
    });
    await test.step('Navigate to cart Page',async()=>{
        await dashboardPage.navigateToCart();
    })
    await test.step('Verify product is added to cart and delete the product',async()=>{
    const productItem = await cartPage.getProductNameInCart(loginModuleData.productName);
    await expect(productItem).toBeVisible();
    await cartPage.clickDeleteButton(loginModuleData.productName);
    await expect(productItem).not.toBeVisible();
    })

});
test('Verify product price on the cart page is correct',async({getUrl,dashboardPage,cartPage})=>{
    
    await test.step('click on the add to cart button',async()=>{
        await dashboardPage.clickAddToCart();
    });
    await test.step('Navigate to cart Page',async()=>{
        await dashboardPage.navigateToCart();
    })
    await test.step('Verify product price in the cart',async()=>{ 
    const productPrice = await cartPage.getProductPriceInCart(loginModuleData.productName);
    await expect(productPrice).toBe(loginModuleData.price);
     await cartPage.clickDeleteButton(loginModuleData.productName);
    });
});
