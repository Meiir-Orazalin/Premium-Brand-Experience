import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { locales } from "@/i18n/locales";
import styles from "./masthead.module.scss";
export async function Masthead({
  locale,
  path = "",
}: {
  locale: string;
  path?: string;
}) {
  const t = await getTranslations({ locale, namespace: "home" });
  return (
    <header className={styles.bar}>
      <Link className={styles.section} href={`/${locale}/about`}>
        <span className={styles.lines} aria-hidden="true" />
        {t("about")}
      </Link>
      <Link className={styles.mark} href={`/${locale}`} aria-label={t("brand")}>
        %M%
      </Link>
      <nav aria-label={t("label")}>
        {locales.map((code) => (
          <Link
            key={code}
            href={`/${code}${path}`}
            aria-current={code === locale ? "page" : undefined}
            hrefLang={code}
          >
            {code.toUpperCase()}
          </Link>
        ))}
      </nav>
    </header>
  );
}
