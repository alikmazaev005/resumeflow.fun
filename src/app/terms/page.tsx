import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms of Service | ResumeFlow",
  description:
    "ResumeFlow terms of service. Free, open-source resume builder provided as-is. Your content, your rights.",
  alternates: {
    canonical: "https://resumeflow.fun/terms",
    languages: {
      "x-default": "https://resumeflow.fun/terms",
      en: "https://resumeflow.fun/terms",
      ru: "https://resumeflow.fun/ru/terms",
      de: "https://resumeflow.fun/de/terms",
      fr: "https://resumeflow.fun/fr/terms",
      es: "https://resumeflow.fun/es/terms",
      zh: "https://resumeflow.fun/zh/terms",
    },
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
