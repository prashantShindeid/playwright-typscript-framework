import {test} from '../../fixtures/common-fixture';
import { expect } from '@playwright/test';
import path from 'path';




test('Global Auto save login',async({page,loginPage,commonUtils,dashboardPage})=>{
    const username = commonUtils.decryptedData(process.env.USER_NAME!);
    const password = commonUtils.decryptedData(process.env.PASSWORD!);
    await loginPage.goto();
    await loginPage.login(username,password);
    await page.waitForURL(`${process.env.BASE_URL}/client/#/dashboard/dash`);
    await expect(dashboardPage.dashboardTitletext).toHaveText('Automation');
    await page.context().storageState({ path: 'playwright/.auth/user.json' }); 
        
})