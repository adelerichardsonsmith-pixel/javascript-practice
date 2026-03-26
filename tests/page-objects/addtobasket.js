import { expect } from '@playwright/test';

export class AddToBasket {
  constructor(page) {
    this.page = page;
    this.samsungGalaxyS6 = page.locator("//a[normalize-space()='Samsung galaxy s6']");
    this.addToCart= page.locator("//a[normalize-space()='Add to cart']");
    this.cart= page.locator("//a[normalize-space()='Cart']");
    this.placeOrder = page.locator("//button[normalize-space()='Place Order']");
  }

async navigate() {
    // This now automatically goes to 'https://practice.automationtesting.in/'
    await this.page.goto('/'); 
  }

  async addToBasket() {
    await expect(this.samsungGalaxyS6).toBeVisible();
    await this.samsungGalaxyS6.click();
    await expect(this.addToCart).toBeVisible();
    await this.addToCart.click();
    await this.cart.click();
    await this.placeOrder.click();
  }

}