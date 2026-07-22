import type { Metadata } from "next";
import ResumeImportClient from "./ResumeImportClient";

export const metadata: Metadata = {
  title: "Import Your Existing Resume | ResumeFlow",
  description:
    "Upload your existing PDF or Word resume to auto-fill our builder. Your data stays private — processed locally in your browser, never sent to our servers.",
  robots: "noindex, follow",
  alternates: {
    canonical: "https://resumeflow.fun/resume-import",
    languages: {
      "x-default": "https://resumeflow.fun/resume-import",
      en: "https://resumeflow.fun/resume-import",
      ru: "https://resumeflow.fun/ru/resume-import",
      de: "https://resumeflow.fun/de/resume-import",
      fr: "https://resumeflow.fun/fr/resume-import",
      es: "https://resumeflow.fun/es/resume-import",
      zh: "https://resumeflow.fun/zh/resume-import",
    },
  },
};

export default function ResumeImportPage() {
  return <ResumeImportClient />;
}
