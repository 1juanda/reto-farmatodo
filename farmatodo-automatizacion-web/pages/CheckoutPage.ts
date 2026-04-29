import { Page } from '@playwright/test';
import { User } from '../models/User';

export class CheckoutPage {
  
  firstNameInput;
  lastNameInput;
  postalCodeInput;
  continueButton;

  constructor(private page: Page) {
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.postalCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
  }

  async fillUserData(user: User) {
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.postalCodeInput.fill(user.postalCode);
    await this.continueButton.click();
  }
}