import { getAlternates } from "lib/i18n/seo";

const TITLES: Record<string, string> = {
  ru: "ResumeFlow — бесплатный конструктор резюме с ATS-парсером",
  de: "ResumeFlow — Kostenloser Lebenslauf-Generator mit ATS-Parser",
  fr: "ResumeFlow — Créateur de CV gratuit avec analyseur ATS",
  es: "ResumeFlow — Creador de currículum gratuito con analizador ATS",
  zh: "ResumeFlow — 免费简历制作工具与ATS解析器",
};

const DESCRIPTIONS: Record<string, string> = {
  ru: "Бесплатный конструктор резюме с открытым кодом. Никакой регистрации, данные только в браузере. Экспорт PDF, проходящий ATS-проверки Greenhouse, Lever, Workday.",
  de: "Kostenloser, quelloffener Lebenslauf-Generator mit ATS-Parser. Keine Anmeldung, lokale Speicherung. Exportieren Sie PDFs, die in Greenhouse, Lever, Workday korrekt geparst werden.",
  fr: "Créateur de CV gratuit et open-source avec analyseur ATS intégré. Pas d'inscription, stockage local uniquement. Exportez des PDF qui se parsent correctement dans Greenhouse, Lever, Workday.",
  es: "Creador de currículum gratuito y de código abierto con analizador ATS incorporado. Sin registro, almacenamiento solo local. Exporta PDFs que se analizan correctamente en Greenhouse, Lever, Workday.",
  zh: "免费开源简历制作工具，内置ATS解析器。无需注册，数据仅存储在本地。导出可在Greenhouse、Lever、Workday中正确解析的PDF。",
};

import HomeClient from "../page";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "de" }, { locale: "fr" }, { locale: "es" }, { locale: "zh" }];
}

export function generateMetadata({ params }: { params: { locale: string } }) {
  const alt = getAlternates(params.locale, "/");
  return {
    title: TITLES[params.locale] || "ResumeFlow - Free Open-source Resume Builder and Parser",
    description: DESCRIPTIONS[params.locale] ||
      "Free resume builder with built-in ATS parser. No signup, local-only storage, open source.",
    alternates: { canonical: alt.canonical, languages: alt.languages },
    robots: { index: true, follow: true },
  };
}

export default function LocaleHomePage() {
  return <HomeClient />;
}
