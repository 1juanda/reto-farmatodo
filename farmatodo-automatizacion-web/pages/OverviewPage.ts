import { Page } from '@playwright/test';

export class OverviewPage {
  private finishButton;

  constructor(private page: Page) {
    this.finishButton = page.locator('#finish');
  }

  async finishPurchase() {
    await this.finishButton.click();
  }
}