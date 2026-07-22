import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms of Service | ResumeFlow",
  description:
    "ResumeFlow terms of service. Free, open-source resume builder provided as-is. Your content, your rights.",
  alternates: {
    canonical: "https://resumeflow.fun/terms",
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
