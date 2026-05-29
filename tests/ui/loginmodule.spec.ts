

import {test,expect} from '../../fixtures/hooks-fixture'

import loginModuleData from '../../test-data/ui-testdata/login-module.json'

test.use({storageState:{
    cookies:[],
    origins:[]
}})

test('Verify login with invalid password',async ({getUrl,loginPage,commonUtils})=>{
    const username = commonUtils.decryptedData(process.env.USER_NAME!);
    await loginPage.login(username,loginModuleData.wrongPassword);
    await expect(loginPage.loginCredentialErrorMsg).toHaveText(loginModuleData.Invalid_Credtials_Error_Message);
  
});

test('Verify login with invalid username',async ({getUrl,loginPage,commonUtils})=>{
    const password = commonUtils.decryptedData(process.env.PASSWORD!);
    await loginPage.login(loginModuleData.wrongUsername,password);
    await expect(loginPage.loginCredentialErrorMsg).toHaveText(loginModuleData.Invalid_Credtials_Error_Message);
    
});

test('Verify login with empty credentials',async ({getUrl,loginPage})=>{
    await loginPage.clickLoginButton();
    await expect(loginPage.emailRequiredErrorMsg).toBeVisible();
    await expect(loginPage.passwordRequiredErrorMsg).toBeVisible();
   
});