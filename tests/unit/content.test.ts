import { expect, it } from "vitest";
import {
  contentSource,
  readStory,
  translation,
} from "../../src/lib/content/story";
import { fixtures } from "../../src/lib/content/fixtures";
it("reads shared contract from fixtures and requires base translations", async () => {
  const story = await fixtures.story();
  expect(readStory(story)).toEqual(story);
  expect(() => readStory({ title: { kk: "a" }, body: { ru: "b" } })).toThrow();
  expect(() => readStory({ ...story, body: { ru: "a", en: 32 } })).toThrow();
});
it("reports Russian fallback and its actual language", () => {
  expect(translation({ ru: "Кофе", kk: " " }, "kk")).toEqual({
    text: "Кофе",
    lang: "ru",
    missing: true,
  });
});
it("defaults to fixtures and rejects unknown sources", () => {
  expect(contentSource()).toBe("fixture");
  expect(contentSource("sanity")).toBe("sanity");
  expect(() => contentSource("prod")).toThrow();
});
