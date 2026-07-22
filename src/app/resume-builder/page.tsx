import type { Metadata } from "next";
import ResumeBuilderClient from "./ResumeBuilderClient";

export const metadata: Metadata = {
  title: "Resume Builder — Create Your Resume Step by Step | ResumeFlow",
  description:
    "Build a professional resume step by step with our free, privacy-first resume builder. No signup required. ATS-friendly templates, multiple themes, instant PDF export.",
  alternates: {
    canonical: "https://resumeflow.fun/resume-builder",
    languages: {
      "x-default": "https://resumeflow.fun/resume-builder",
      en: "https://resumeflow.fun/resume-builder",
      ru: "https://resumeflow.fun/ru/resume-builder",
      de: "https://resumeflow.fun/de/resume-builder",
      fr: "https://resumeflow.fun/fr/resume-builder",
      es: "https://resumeflow.fun/es/resume-builder",
      zh: "https://resumeflow.fun/zh/resume-builder",
    },
  },
};

export default function ResumeBuilderPage() {
  return <ResumeBuilderClient />;
}
