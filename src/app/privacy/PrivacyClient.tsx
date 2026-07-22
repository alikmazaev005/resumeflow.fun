"use client";
import Link from "next/link";
import { useT } from "lib/i18n/context";

export default function PrivacyClient() {
  const t = useT();

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-4">{t("privacy.title")}</h1>
          <p className="text-muted-foreground">{t("privacy.effectiveDate")}</p>
        </header>

        <article className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2>{t("privacy.dataWeCollect.title")}</h2>
            <p><strong>{t("privacy.dataWeCollect.none")}</strong> {t("privacy.dataWeCollect.description")}</p>
          </section>

          <section>
            <h2>{t("privacy.analyticsAds.title")}</h2>
            <ul>
              <li><strong>{t("privacy.analyticsAds.ym.title")}</strong> {t("privacy.analyticsAds.ym.desc")}</li>
              <li><strong>{t("privacy.analyticsAds.cf.title")}</strong> {t("privacy.analyticsAds.cf.desc")}</li>
            </ul>
          </section>

          <section>
            <h2>{t("privacy.thirdParty.title")}</h2>
            <ul>
              <li><strong>{t("privacy.thirdParty.fonts.title")}</strong> {t("privacy.thirdParty.fonts.desc")}</li>
              <li><strong>{t("privacy.thirdParty.github.title")}</strong> {t("privacy.thirdParty.github.desc")}</li>
            </ul>
          </section>

          <section>
            <h2>{t("privacy.yourRights.title")}</h2>
            <p>{t("privacy.yourRights.description")}</p>
          </section>

          <section>
            <h2>{t("privacy.contact.title")}</h2>
            <p>{t("privacy.contact.description")} <a href="mailto:hello@resumeflow.fun" className="underline">{t("privacy.contact.email")}</a></p>
          </section>
        </article>

        <footer className="mt-16 pt-8 border-t">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground underline">
            ← {t("privacy.backHome")}
          </Link>
        </footer>
      </div>
    </main>
  );
}
