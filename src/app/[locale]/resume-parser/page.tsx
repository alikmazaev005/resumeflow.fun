import { getAlternates } from "lib/i18n/seo";
import ResumeParserClient from "../../resume-parser/ResumeParserClient";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "de" }, { locale: "fr" }, { locale: "es" }, { locale: "zh" }];
}

const TITLES: Record<string, string> = {
  ru: "ATS-парсер резюме онлайн — проверьте читаемость | ResumeFlow",
  de: "ATS-Lebenslauf-Parser — Prüfen Sie die Lesbarkeit | ResumeFlow",
  fr: "Analyseur ATS de CV en ligne | ResumeFlow",
  es: "Analizador ATS de currículum online | ResumeFlow",
  zh: "在线ATS简历解析器 — 检查简历可读性 | ResumeFlow",
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  const alt = getAlternates(params.locale, "/resume-parser");
  return {
    title: TITLES[params.locale] || "ATS Resume Parser - Check Your Resume Parsability | ResumeFlow",
    alternates: { canonical: alt.canonical, languages: alt.languages },
  };
}

export default function LocaleResumeParserPage() {
  return <ResumeParserClient />;
}
