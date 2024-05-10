import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }, testInfo) => {
  await page.goto("http://www.uitestingplayground.com/ajax/");
  await page.getByText("Button Triggering AJAX Request").click();
  testInfo.setTimeout(testInfo.timeout + 2000);
});

test("auto waiting", async ({ page }) => {
  const successButton = page.locator(".bg-success");

  //   await successButton.click();

  //   const text = await successButton.textContent();

  //   await successButton.waitFor({ state: "attached" });
  //   const text = await successButton.allTextContents();

  //   expect(text).toContain("Data loaded with AJAX get request.");

  await expect(successButton).toHaveText("Data loaded with AJAX get request.", {
    timeout: 20000,
  });
});

test("alternative waits", async ({ page }) => {
  const successButton = page.locator(".bg-success");

  //---wait for element
  // await page.waitForSelector("");

  //--- wait for particular response
  // await page.waitForResponse("http://www.uitestingplayground.com/ajaxdata");

  //-----wait for network calls to be completed ('NOT RECOMMENDED')
  await page.waitForLoadState("networkidle");

  // await page.waitForURL

  const text = await successButton.allTextContents();

  expect(text).toContain("Data loaded with AJAX get request.");
});

test("timeouts", async ({ page }) => {
  test.setTimeout(20000);
  const successButton = page.locator(".bg-success");
  await successButton.click();
});
