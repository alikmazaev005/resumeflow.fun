import type { Metadata } from "next";
import ResumeParserClient from "./ResumeParserClient";

export const metadata: Metadata = {
  title: "ATS Resume Parser — Test Your Resume's Compatibility | ResumeFlow",
  description:
    "Upload a resume PDF to see exactly what an Applicant Tracking System (ATS) extracts. Fix formatting issues before you apply. Free, private, no signup required.",
  alternates: {
    canonical: "https://resumeflow.fun/resume-parser",
  },
};

export default function ResumeParserPage() {
  return <ResumeParserClient />;
}
