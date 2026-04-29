import { Page, expect } from '@playwright/test';

export class CompletePage {
  private successMessage;

  constructor(private page: Page) {
    this.successMessage = page.locator('.complete-header');
  }

  async validateOrderCompleted() {
    await expect(this.successMessage).toHaveText('Thank you for your order!');
  }
}