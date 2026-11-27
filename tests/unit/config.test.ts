import { expect, it } from "vitest";
import { defaultLocale, isLocale } from "../../src/i18n/locales";
import { siteOrigin } from "../../src/lib/origin";
it("recognizes public locale segments", () => {
  expect(defaultLocale).toBe("ru");
  for (const code of ["ru", "kk", "en"]) expect(isLocale(code)).toBe(true);
  expect(isLocale("kz")).toBe(false);
});
it("accepts a bare origin and rejects credentials, paths and unsupported protocols", () => {
  expect(siteOrigin("https://example.org/")).toBe("https://example.org");
  for (const url of [
    "https://example.org/page",
    "https://user@example.org",
    "file:///tmp/file",
  ])
    expect(() => siteOrigin(url)).toThrow();
});
