import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { locales } from "@/i18n/locales";
import styles from "./home.module.scss";
export async function generateMetadata({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return { title: `%M% · ${t("title")}` };
}
export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return (
    <main className={styles.cover}>
      <header className="flex items-center justify-between">
        <span>{t("brand")}</span>
        <nav aria-label={t("label")} className="flex gap-4">
          {locales.map((code) => (
            <Link
              key={code}
              href={`/${code}`}
              hrefLang={code}
              aria-current={code === locale ? "page" : undefined}
            >
              {code.toUpperCase()}
            </Link>
          ))}
        </nav>
      </header>
      <div>
        <h1>{t("title")}</h1>
        <Link className="mt-6 inline-block underline" href={`/${locale}/about`}>
          {t("about")}
        </Link>
      </div>
    </main>
  );
}
