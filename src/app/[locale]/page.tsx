import { getTranslations } from "next-intl/server";
import { Masthead } from "@/components/layout/masthead";
import { Hero } from "@/features/home/hero";
export async function generateMetadata({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return { title: `%M% · ${t("title")}` };
}
export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const scenes = [
    {
      name: t("brandScene"),
      line1: t("line1"),
      line2: t("line2"),
      image: "/media/espresso-study.webp",
    },
    {
      name: t("coffeeScene"),
      line1: t("coffee1"),
      line2: t("coffee2"),
      image: "/media/coffee.webp",
    },
    {
      name: t("spaceScene"),
      line1: t("space1"),
      line2: t("space2"),
      image: "/media/space.webp",
    },
  ].map((s) => ({ ...s, href: `/${locale}/about`, action: t("discover") }));
  return (
    <main>
      <Hero
        scenes={scenes}
        culture={t("culture")}
        caption={t("illustration")}
        controls={t("scenes")}
        play={t("play")}
        pause={t("pause")}
      >
        <Masthead locale={locale} />
      </Hero>
    </main>
  );
}
