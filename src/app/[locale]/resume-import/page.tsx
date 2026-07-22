import { getAlternates } from "lib/i18n/seo";
import ResumeImportClient from "../../resume-import/ResumeImportClient";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "de" }, { locale: "fr" }, { locale: "es" }, { locale: "zh" }];
}

export function generateMetadata({ params }: { params: { locale: string } }) {
  const alt = getAlternates(params.locale, "/resume-import");
  return {
    robots: { index: false, follow: false },
    alternates: { canonical: alt.canonical, languages: alt.languages },
  };
}

export default function LocaleResumeImportPage() {
  return <ResumeImportClient />;
}
