import { Page } from '@playwright/test';
import { Product } from '../models/Product';

export class InventoryPage {
  constructor(private page: Page) {}

  private productCard(name: string) {
    return this.page.locator('.inventory_item', {
      hasText: name,
    });
  }

  async getProductData(productName: string): Promise<Product> {
    const card = this.productCard(productName);
    return {
      name: (await card.locator('.inventory_item_name').textContent())!.trim(),
      price: (await card.locator('.inventory_item_price').textContent())!.trim(),
    };
  }

  async addToCart(productName: string) {
    await this.productCard(productName).locator('button').click();
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}