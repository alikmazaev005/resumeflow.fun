import PrivacyClient from "../../privacy/PrivacyClient";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "de" }, { locale: "fr" }, { locale: "es" }, { locale: "zh" }];
}

export default function LocalePrivacyPage() {
  return <PrivacyClient />;
}
