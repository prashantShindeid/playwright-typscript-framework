import {test} from  '../fixtures/hooks-fixture'
import { expect } from '@playwright/test';


// test.beforeEach(async ({loginPage})=>{
//      await loginPage.goto();
// });

test('Temp test 1',async ({page,getUrl})=>{


    // console.log(process.env.BASE_URL);
    // console.log(process.env.USER_NAME);
    // console.log(process.env.PASSWORD);

    // await loginPage.goto();
    // await loginPage.login('prashushinde431@gmail.com','Admin@123');


    

    // console.log("Encrypted:", encrypted);

    // const decrypted = utils.decryptedData(encrypted);
    // console.log("Decrypted:", decrypted);

    // const username = commonUtils.decryptedData(process.env.USER_NAME!);
    // const password = commonUtils.decryptedData(process.env.PASSWORD!);
     
     console.log(page.title());

});

test('Temp test 2',async ({page,getUrl,signOut})=>{

    await page.waitForLoadState('networkidle');

    await expect(page.getByRole('heading',{name:'Automation'})).toBeVisible();

});