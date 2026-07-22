import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { LocaleProvider } from "lib/i18n/context";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ResumeFlow",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
  },
  "description":
    "Free, open-source, privacy-first resume builder with built-in ATS parser. Create professional resumes in minutes — no signup, no tracking, your data stays in your browser.",
  "url": "https://resumeflow.fun",
  "author": {
    "@type": "Organization",
    "name": "ResumeFlow",
  },
  "license": "https://github.com/xitanggg/open-resume/blob/main/LICENSE",
};

export const metadata = {
  title: "ResumeFlow - Free Open-source Resume Builder and Parser",
  description:
    "Free resume builder with built-in ATS parser. No signup, local-only storage, open source. Export clean PDFs that parse correctly in Greenhouse, Lever, Workday.",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="software-schema"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body>
        <LocaleProvider>
          <TopNavBar />
          {children}
        </LocaleProvider>
        <Analytics />
        {/* Yandex Autoplacement */}
        <Script
          src="https://yandex.ru/ads/system/context.js"
          strategy="lazyOnload"
        />
        <Script
          id="yandex-autoplacement"
          src="https://yandex.ru/ads/system/ap-loader.js"
          strategy="lazyOnload"
          data-page-id="19628716"
        />
      </body>
    </html>
  );
}