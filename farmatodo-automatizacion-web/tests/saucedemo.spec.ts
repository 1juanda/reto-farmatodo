import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { OverviewPage } from '../pages/OverviewPage';
import { CompletePage } from '../pages/CompletePage';
import { CredentialsUser } from '../models/Credentials';
import { UserData } from '../models/User';

test.describe('E2E Purchase Flow', () => {

  let login: LoginPage;
  let inventory: InventoryPage;
  let cart: CartPage;
  let checkout: CheckoutPage;
  let overview: OverviewPage;
  let complete: CompletePage;

  const productName = 'Sauce Labs Fleece Jacket';

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    login = new LoginPage(page);
    inventory = new InventoryPage(page);
    cart = new CartPage(page);
    checkout = new CheckoutPage(page);
    overview = new OverviewPage(page);
    complete = new CompletePage(page);
  });

  test('should complete purchase successfully', async ({}) => {
    await login.login(CredentialsUser);
    const product = await inventory.getProductData(productName);
    await inventory.addToCart(productName);
    await inventory.goToCart();
    const cartProduct = await cart.getProduct();
    expect(cartProduct.name).toBe(product.name);
    expect(cartProduct.price).toBe(product.price);
    await cart.checkout();
    await checkout.fillUserData(UserData);
    await overview.finishPurchase();
    await complete.validateOrderCompleted();
  });
});