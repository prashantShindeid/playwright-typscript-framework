import {test as baseTest} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Dashboard } from '../pages/Dashboard';
import { Cart } from '../pages/Cart';
import { Placeorder } from '../pages/Placeorder';
import { Order } from '../pages/Order';


type Pomfixture ={
    loginPage : LoginPage;
    dashboardPage :Dashboard;
    cartPage : Cart;
    placeOrderPage : Placeorder;
    orderPage:Order;
}

export const test =baseTest.extend<Pomfixture>({
    loginPage:async({page},use) =>{
     await use(new LoginPage(page));
    },
    dashboardPage:async({page},use) =>{
        await use(new Dashboard(page));
    },
    cartPage:async({page},use) =>{
        await use(new Cart(page));
    },
    placeOrderPage:async({page},use) =>{
        await use(new Placeorder(page));        
    },
    orderPage:async({page},use)=>{
        await use(new Order(page));
    }

})