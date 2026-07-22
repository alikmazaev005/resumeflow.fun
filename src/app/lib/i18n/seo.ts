export const LOCALES = ["en", "ru", "de", "fr", "es", "zh"] as const;

type PagePath = "/" | "/resume-builder" | "/resume-parser" | "/resume-import" | "/privacy" | "/terms";

export function getAlternates(locale: string, path: PagePath = "/") {
  const baseUrl = "https://resumeflow.fun";
  const languages: Record<string, string> = {};

  for (const l of LOCALES) {
    if (l === "en") {
      languages[l] = `${baseUrl}${path}`;
    } else {
      languages[l] = `${baseUrl}/${l}${path}`;
    }
  }

  languages["x-default"] = `${baseUrl}${path}`;

  const canonical = locale === "en" ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;

  return { languages, canonical };
}
