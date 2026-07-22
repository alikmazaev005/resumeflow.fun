import type { Metadata } from "next";
import ResumeBuilderClient from "./ResumeBuilderClient";

export const metadata: Metadata = {
  title: "Resume Builder — Create Your Resume Step by Step | ResumeFlow",
  description:
    "Build a professional resume step by step with our free, privacy-first resume builder. No signup required. ATS-friendly templates, multiple themes, instant PDF export.",
  alternates: {
    canonical: "https://resumeflow.fun/resume-builder",
  },
};

export default function ResumeBuilderPage() {
  return <ResumeBuilderClient />;
}
