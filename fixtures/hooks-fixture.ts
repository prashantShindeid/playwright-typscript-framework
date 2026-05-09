import {test as baseTest} from '../fixtures/common-fixture';
import { LoginPage } from '../pages/LoginPage';

type hooksFixture = {
    getUrl:void;
    signOut:void;
}

export const test = baseTest.extend<hooksFixture>({
   getUrl : async({loginPage},use)=>{
    await loginPage.goto();
    await use();
   },
   signOut : async({dashboardPage},use)=>{
    await use();
    await dashboardPage.signOut();
   }

});
export {expect} from '@playwright/test'