import ResumeBuilderClient from "../../resume-builder/ResumeBuilderClient";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "de" }, { locale: "fr" }, { locale: "es" }, { locale: "zh" }];
}

export default function LocaleResumeBuilderPage() {
  return <ResumeBuilderClient />;
}
