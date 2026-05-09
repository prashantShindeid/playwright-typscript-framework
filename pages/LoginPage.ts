import {Locator, Page} from '@playwright/test';

export class LoginPage{
    readonly page:Page;
    readonly userNameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;
    readonly loginCredentialErrorMsg:Locator;
    readonly emailRequiredErrorMsg:Locator;
    readonly passwordRequiredErrorMsg:Locator;

    constructor(page:Page){
        this.page=page;
        this.userNameInput = page.locator('#userEmail');
        this.passwordInput = page.locator('#userPassword');
        this.loginButton = page.locator('#login');
        this.loginCredentialErrorMsg = page.locator('#toast-container');
        this.emailRequiredErrorMsg = page.getByText('*Email is required');
        this.passwordRequiredErrorMsg = page.getByText('*Password is required');
        

    }


    async goto(){
        await this.page.goto(`${process.env.BASE_URL}/client/#/auth/login`);
    }
  
    async login(email:string,password:string){
        await this.userNameInput.fill(email);
        await this.passwordInput.fill(password)
        await this.loginButton.click();

    }
    async clickLoginButton(){
        await this.loginButton.click();
    }
   

}