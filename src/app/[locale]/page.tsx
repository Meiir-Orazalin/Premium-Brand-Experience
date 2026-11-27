import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Masthead } from "@/components/layout/masthead";
import { EditorialLink } from "@/components/ui/editorial-link";
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
      <Image
        fill
        sizes="100vw"
        priority
        src="/media/espresso-study.webp"
        alt=""
        className={styles.photo}
      />
      <div className={styles.shade} />
      <Masthead locale={locale} />
      <div className={styles.copy}>
        <p className={styles.kicker}>
          <i aria-hidden="true" />
          {t("culture")}
        </p>
        <h1>
          {t("line1")} <em>{t("line2")}</em>
        </h1>
        <EditorialLink href={`/${locale}/about`}>{t("discover")}</EditorialLink>
      </div>
      <footer className={styles.caption}>
        <span>{t("scene")}</span>
        <span>{t("illustration")}</span>
      </footer>
    </main>
  );
}
