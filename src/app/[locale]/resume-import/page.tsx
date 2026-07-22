import ResumeImportClient from "../../resume-import/ResumeImportClient";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "de" }, { locale: "fr" }, { locale: "es" }, { locale: "zh" }];
}

export default function LocaleResumeImportPage() {
  return <ResumeImportClient />;
}
