import { getAlternates } from "lib/i18n/seo";
import ResumeBuilderClient from "../../resume-builder/ResumeBuilderClient";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "de" }, { locale: "fr" }, { locale: "es" }, { locale: "zh" }];
}

const TITLES: Record<string, string> = {
  ru: "Онлайн-конструктор резюме — бесплатно | ResumeFlow",
  de: "Kostenloser Online-Lebenslauf-Generator | ResumeFlow",
  fr: "Créateur de CV en ligne gratuit | ResumeFlow",
  es: "Creador de currículum vitae online gratis | ResumeFlow",
  zh: "免费在线简历制作工具 | ResumeFlow",
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  const alt = getAlternates(params.locale, "/resume-builder");
  return {
    title: TITLES[params.locale] || "Online Resume Builder - Free & Open Source | ResumeFlow",
    alternates: { canonical: alt.canonical, languages: alt.languages },
  };
}

export default function LocaleResumeBuilderPage() {
  return <ResumeBuilderClient />;
}
