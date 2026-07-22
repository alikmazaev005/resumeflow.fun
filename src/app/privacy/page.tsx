import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | ResumeFlow",
  description:
    "ResumeFlow privacy policy. Your resume data stays in your browser — no server storage, no tracking of personal content.",
  alternates: {
    canonical: "https://resumeflow.fun/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
