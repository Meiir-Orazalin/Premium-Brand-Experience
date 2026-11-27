import { expect, test } from "@playwright/test";
test("selects all scenes and toggles playback", async ({ page }) => {
  await page.clock.install();
  await page.goto("/en");
  await page.getByRole("button", { name: "Coffee", exact: true }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "A cup of quiet.",
  );
  await page.getByRole("button", { name: "Spaces", exact: true }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Room to linger.",
  );
  await page.getByRole("button", { name: "Play scenes" }).click();
  await expect(
    page.getByRole("button", { name: "Pause scenes" }),
  ).toBeVisible();
  await page.clock.runFor(9100);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "More than coffee.",
  );
  await page.getByRole("button", { name: "Pause scenes" }).click();
  await page.clock.runFor(9200);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "More than coffee.",
  );
});
test("mobile navigation and missing photography preserve access", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.route("**/_next/image*", (route) => route.abort());
  await page.goto("/en");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.getByText("Explore", { exact: true }).click();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("link", { name: "Our philosophy" })).toBeHidden();
  await page.keyboard.press("Enter");
  await page.getByRole("link", { name: "Our philosophy" }).click();
  await expect(page).toHaveURL(/\/en\/about$/);
});
test("fits each localized scene at 320px", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  for (const locale of ["ru", "kk", "en"]) {
    await page.goto("/" + locale);
    const cards = page.getByRole("group").getByRole("button");
    for (const card of await cards.all()) {
      await card.click();
      await page.evaluate(() => document.fonts.ready);
      const visible = await page.locator("h1").evaluate((el) => {
        const range = document.createRange();
        range.selectNodeContents(el);
        return [...range.getClientRects()].every(
          (r) => r.left >= 0 && r.right <= innerWidth,
        );
      });
      expect(visible).toBe(true);
      expect(
        (await card.boundingBox())!.x + (await card.boundingBox())!.width,
      ).toBeLessThanOrEqual(320);
    }
  }
});
