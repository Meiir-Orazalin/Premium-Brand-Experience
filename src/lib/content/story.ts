import type { Locale } from "@/i18n/locales";
export type Translated = { ru: string } & Partial<Record<Locale, string>>;
export interface Story {
  title: Translated;
  body: Translated;
}
export interface ContentRepository {
  story(): Promise<Story>;
}
function isText(value: unknown): value is Translated {
  if (
    !value ||
    typeof value !== "object" ||
    !("ru" in value) ||
    typeof value.ru !== "string" ||
    !value.ru.trim()
  )
    return false;
  return ["kk", "en"].every(
    (code) => !(code in value) || typeof Reflect.get(value, code) === "string",
  );
}
export function readStory(value: unknown): Story {
  if (
    !value ||
    typeof value !== "object" ||
    !("title" in value) ||
    !("body" in value) ||
    !isText(value.title) ||
    !isText(value.body)
  )
    throw new Error("Invalid aboutPage content");
  return { title: value.title, body: value.body };
}
export function translation(value: Translated, locale: Locale) {
  const actualLocale = value[locale]?.trim() ? locale : "ru";
  return {
    text: value[actualLocale]!.trim(),
    lang: actualLocale,
    missing: actualLocale !== locale,
  };
}
export function contentSource(value = "fixture") {
  if (value !== "fixture" && value !== "sanity")
    throw new Error("Unknown CONTENT_SOURCE");
  return value;
}
