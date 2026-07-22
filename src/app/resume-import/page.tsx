import type { Metadata } from "next";
import ResumeImportClient from "./ResumeImportClient";

export const metadata: Metadata = {
  title: "Import Your Existing Resume | ResumeFlow",
  description:
    "Upload your existing PDF or Word resume to auto-fill our builder. Your data stays private — processed locally in your browser, never sent to our servers.",
  robots: "noindex, follow",
  alternates: {
    canonical: "https://resumeflow.fun/resume-import",
  },
};

export default function ResumeImportPage() {
  return <ResumeImportClient />;
}
