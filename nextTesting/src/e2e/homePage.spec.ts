import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Test HomePage navigation", () => {
  test("test aboutPage link", async ({ page }) => {
    await page.getByTestId("about-link").click();
    await expect(page.getByTestId("aboutPage")).toBeVisible();
  });

  test("test supportPage link", async ({ page }) => {
    await page.getByTestId("support-link").click();
    await expect(page.getByTestId("supportPage")).toBeVisible();
  });

  test("test mainPage link", async ({ page }) => {
    await page.getByTestId("main-link").click();
    await expect(page.getByTestId("mainPage")).toBeVisible();
  });
});
