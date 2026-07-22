import TermsClient from "../../terms/TermsClient";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "de" }, { locale: "fr" }, { locale: "es" }, { locale: "zh" }];
}

export default function LocaleTermsPage() {
  return <TermsClient />;
}
