import { Page } from '@playwright/test';
import { Product } from '../models/Product';

export class CartPage {
  private checkoutButton;

  constructor(private page: Page) {
    this.checkoutButton = page.locator('#checkout');
  }

  async getProduct(): Promise<Product> {
    return {
      name: (await this.page.locator('.inventory_item_name').textContent())!.trim(),
      price: (await this.page.locator('.inventory_item_price').textContent())!.trim(),
    };
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}