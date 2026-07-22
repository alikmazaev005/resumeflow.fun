"use client";
import Script from "next/script";
import { useT } from "lib/i18n/context";

export function FAQSchema() {
  const t = useT();

  const faq = [
    { question: t("qa.q1"), answer: `${t("qa.a1p1")} ${t("qa.a1p2")}` },
    { question: t("qa.q2"), answer: `${t("qa.a2p1")} ${t("qa.a2Feature1Title")}. ${t("qa.a2Feature1Text")} ${t("qa.a2Feature2Title")}. ${t("qa.a2Feature2Text")}` },
    { question: t("qa.q3"), answer: t("qa.a3p1") },
    { question: t("qa.q4"), answer: t("qa.a4p1") },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <Script id="faq-schema" type="application/ld+json" strategy="lazyOnload">
      {JSON.stringify(schema)}
    </Script>
  );
}
