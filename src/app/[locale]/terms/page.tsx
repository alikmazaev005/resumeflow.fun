import { getAlternates } from "lib/i18n/seo";
import TermsClient from "../../terms/TermsClient";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "de" }, { locale: "fr" }, { locale: "es" }, { locale: "zh" }];
}

const TITLES: Record<string, string> = {
  ru: "Условия использования | ResumeFlow",
  de: "Nutzungsbedingungen | ResumeFlow",
  fr: "Conditions d'utilisation | ResumeFlow",
  es: "Términos de servicio | ResumeFlow",
  zh: "服务条款 | ResumeFlow",
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  const alt = getAlternates(params.locale, "/terms");
  return {
    title: TITLES[params.locale] || "Terms of Service | ResumeFlow",
    robots: { index: true, follow: true },
    alternates: { canonical: alt.canonical, languages: alt.languages },
  };
}

export default function LocaleTermsPage() {
  return <TermsClient />;
}
