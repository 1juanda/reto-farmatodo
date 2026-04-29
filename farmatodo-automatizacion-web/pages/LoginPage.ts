import { Page } from '@playwright/test';
import { Credentials } from '../models/Credentials';

export class LoginPage {
    usernameInput;
    passwordInput;
    loginButton;

  constructor(private page: Page) {
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async login(credentials: Credentials) {
    await this.usernameInput.fill(credentials.username);
    await this.passwordInput.fill(credentials.password);
    await this.loginButton.click();
  }
}