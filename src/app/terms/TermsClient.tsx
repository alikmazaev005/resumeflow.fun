"use client";
import Link from "next/link";
import { useT } from "lib/i18n/context";

export default function TermsClient() {
  const t = useT();

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-4">{t("terms.title")}</h1>
          <p className="text-muted-foreground">{t("terms.effectiveDate")}</p>
        </header>

        <article className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2>{t("terms.service.title")}</h2>
            <p>{t("terms.service.description")}</p>
          </section>

          <section>
            <h2>{t("terms.yourContent.title")}</h2>
            <p>{t("terms.yourContent.description")}</p>
          </section>

          <section>
            <h2>{t("terms.acceptableUse.title")}</h2>
            <ul>
              <li>{t("terms.acceptableUse.1")}</li>
              <li>{t("terms.acceptableUse.2")}</li>
              <li>{t("terms.acceptableUse.3")}</li>
            </ul>
          </section>

          <section>
            <h2>{t("terms.openSource.title")}</h2>
            <p>{t("terms.openSource.description")}</p>
          </section>

          <section>
            <h2>{t("terms.noLiability.title")}</h2>
            <p>{t("terms.noLiability.description")}</p>
          </section>

          <section>
            <h2>{t("terms.changes.title")}</h2>
            <p>{t("terms.changes.description")}</p>
          </section>

          <section>
            <h2>{t("terms.contact.title")}</h2>
            <p><a href="mailto:hello@resumeflow.fun" className="underline">{t("terms.contact.email")}</a></p>
          </section>
        </article>

        <footer className="mt-16 pt-8 border-t">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground underline">
            ← {t("terms.backHome")}
          </Link>
        </footer>
      </div>
    </main>
  );
}
