import { getAlternates } from "lib/i18n/seo";
import PrivacyClient from "../../privacy/PrivacyClient";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "de" }, { locale: "fr" }, { locale: "es" }, { locale: "zh" }];
}

const TITLES: Record<string, string> = {
  ru: "Политика конфиденциальности | ResumeFlow",
  de: "Datenschutzerklärung | ResumeFlow",
  fr: "Politique de confidentialité | ResumeFlow",
  es: "Política de privacidad | ResumeFlow",
  zh: "隐私政策 | ResumeFlow",
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  const alt = getAlternates(params.locale, "/privacy");
  return {
    title: TITLES[params.locale] || "Privacy Policy | ResumeFlow",
    robots: { index: true, follow: true },
    alternates: { canonical: alt.canonical, languages: alt.languages },
  };
}

export default function LocalePrivacyPage() {
  return <PrivacyClient />;
}
