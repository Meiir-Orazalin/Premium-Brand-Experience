import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { isLocale, locales } from "@/i18n/locales";
import { repository } from "@/lib/content/repository";
import { translation } from "@/lib/content/story";
import styles from "./story.module.scss";
export async function generateMetadata({
  params,
}: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return { title: `${t("about")} · %M%` };
}
export default async function About({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const story = await repository().story();
  const title = translation(story.title, locale),
    body = translation(story.body, locale);
  const t = await getTranslations({ locale, namespace: "home" });
  return (
    <main className={styles.story}>
      <header>
        <Link href={`/${locale}`}>%M%</Link>
        <nav aria-label={t("label")}>
          {locales.map((code) => (
            <Link
              key={code}
              href={`/${code}/about`}
              hrefLang={code}
              aria-current={code === locale ? "page" : undefined}
            >
              {code.toUpperCase()}
            </Link>
          ))}
        </nav>
      </header>
      <article>
        <div>
          <h1 lang={title.lang}>{title.text}</h1>
          <p lang={body.lang}>{body.text}</p>
        </div>
        <figure>
          <Image
            src="/media/espresso-study.webp"
            alt={t("espressoAlt")}
            width={1536}
            height={1024}
            sizes="(max-width: 720px) 92vw, 48vw"
            priority
          />
          <figcaption>{t("illustration")}</figcaption>
        </figure>
      </article>
    </main>
  );
}
