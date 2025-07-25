import { test, expect } from "@playwright/test";

test.describe("Users Test", () => {
  //   test("loadUsers and click links", async ({ page }) => {
  //     await page.goto("/users");
  //     await page.waitForSelector("[data-testid='user-el']");
  //     const users = page.locator('[data-testid="user-el"]');
  //     expect(users).toHaveCount(10);
  //     expect(users.first()).toBeVisible();

  //     await users.first().click();
  //     await expect(page).toHaveURL(/\/users\/\d+/);
  //     await expect(page.getByTestId("user-page-1")).toBeVisible({ timeout: 2000 });
  //   });

  test("delete user from list", async ({ page }) => {
    await page.goto("/users");

    const users = page.locator('[data-testid="user-el"]');
    await expect(users).toHaveCount(10);

    const countBefore = await users.count();
    expect(countBefore).toBeGreaterThan(0);

    await users.first().click();

    const countAfter = await users.count();
    expect(countAfter).toBe(countBefore - 1);
  });
});
