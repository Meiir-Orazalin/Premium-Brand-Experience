import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("opens in Russian and switches language with native links", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/ru$/);
  for (const [code, title] of [
    ["kk", "Кофеден де артық."],
    ["en", "More than coffee."],
    ["ru", "Больше, чем кофе."],
  ]) {
    await page
      .getByRole("link", { name: code.toUpperCase(), exact: true })
      .click();
    await expect(page.locator("html")).toHaveAttribute("lang", code);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(title);
  }
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
});
test("reads a localized story with reduced motion and restores native history", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/en");
  await page.getByRole("link", { name: "Our philosophy" }).click();
  await expect(
    page.getByRole("heading", { name: "Time for coffee" }),
  ).toBeVisible();
  await expect(page.locator(".page-entry")).toHaveCSS("animation-name", "none");
  await page.getByRole("link", { name: "KK", exact: true }).click();
  await expect(page).toHaveURL(/\/kk\/about$/);
  await page.goBack();
  await expect(page).toHaveURL(/\/en\/about$/);
  await page.goForward();
  await expect(
    page.getByRole("heading", { name: "Кофеге арналған сәт" }),
  ).toBeVisible();
});
