import { test, expect } from "@playwright/test";

test.describe("Screenshots Tests", () => {
  test("homepage visual regression", async ({ page }) => {
    await page.goto("/");
    expect(await page.screenshot()).toMatchSnapshot("homepage.png");
  });
  test("aboutPage visual regression", async ({ page }) => {
    await page.goto("/about");
    expect(await page.screenshot()).toMatchSnapshot("aboutPage.png");
  });
  test("support visual regression", async ({ page }) => {
    await page.goto("/support");
    expect(await page.screenshot()).toMatchSnapshot("support.png");
  });
});
