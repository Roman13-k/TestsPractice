import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Toggle test", () => {
  test("Toggle true input", async ({ page }) => {
    const toggleBtn = page.getByRole("button", { name: "click me" });
    await toggleBtn.click();
    await expect(page.getByText(/hello text/i)).not.toBeVisible();
    await page.getByPlaceholder(/hello/i).fill("hello");
    await expect(page.getByText(/hello text/i)).toBeVisible();
    await toggleBtn.click();
    await expect(page.getByText(/hello text/i)).not.toBeVisible();
  });

  test("Toggle false input", async ({ page }) => {
    const toggleBtn = page.getByRole("button", { name: "click me" });
    await toggleBtn.click();
    await page.getByPlaceholder(/hello/i).fill("helloooo");
    await expect(page.getByText(/hello text/i)).not.toBeVisible();
  });
});
