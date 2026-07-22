import HomeClient from "../page";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "de" }, { locale: "fr" }, { locale: "es" }, { locale: "zh" }];
}

export default function LocaleHomePage() {
  return <HomeClient />;
}
