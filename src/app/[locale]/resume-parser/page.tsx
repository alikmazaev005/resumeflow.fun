import ResumeParserClient from "../../resume-parser/ResumeParserClient";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "de" }, { locale: "fr" }, { locale: "es" }, { locale: "zh" }];
}

export default function LocaleResumeParserPage() {
  return <ResumeParserClient />;
}
