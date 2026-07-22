import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | ResumeFlow",
  description:
    "ResumeFlow privacy policy. Your resume data stays in your browser — no server storage, no tracking of personal content.",
  alternates: {
    canonical: "https://resumeflow.fun/privacy",
    languages: {
      "x-default": "https://resumeflow.fun/privacy",
      en: "https://resumeflow.fun/privacy",
      ru: "https://resumeflow.fun/ru/privacy",
      de: "https://resumeflow.fun/de/privacy",
      fr: "https://resumeflow.fun/fr/privacy",
      es: "https://resumeflow.fun/es/privacy",
      zh: "https://resumeflow.fun/zh/privacy",
    },
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
