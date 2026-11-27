import { Navigation } from "./navigation";
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
      <Navigation
        label={t("navigation")}
        items={[
          { label: t("home"), href: `/${locale}` },
          { label: t("about"), href: `/${locale}/about` },
        ]}
      />
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
