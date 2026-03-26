import { expect } from '@playwright/test';

export class Login {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#loginusername');
    this.passwordInput = page.locator('#loginpassword');
    this.loginLink = page.locator('id=login2');
    this.loginButton = page.locator("//button[normalize-space()='Log in']");
    this.logoutLink= page.locator('#logout2');
  }

async navigate() {
    // This now automatically goes to 'https://practice.automationtesting.in/'
    await this.page.goto('/'); 
  }



  async login(user, pass) {
    await this.loginLink.click();
    await expect(this.usernameInput).toBeVisible();
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
    await expect(this.logoutLink).toBeVisible();
    console.log('User is logged in');
  }
}