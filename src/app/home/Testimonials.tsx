"use client";

import { useT } from "lib/i18n/context";
import Link from "next/link";
import { GraduationCap, Briefcase, UserCheck } from "lucide-react";

const ICONS = {
  "graduation-cap": GraduationCap,
  "briefcase": Briefcase,
  "user-check": UserCheck,
};

function hasTranslation(t: (key: string) => string, key: string): boolean {
  const result = t(key);
  return result !== key && result.trim().length > 0;
}

export const Testimonials = () => {
  const t = useT();

  return (
    <section className="mx-auto max-w-screen-2xl px-8 py-16 lg:py-24">
      <header className="mx-auto max-w-2xl text-center mb-12 lg:mb-16">
        <h2 className="text-3xl font-bold text-foreground tracking-tight">
          {t("testimonials.title")}
        </h2>
      </header>

      {/* Metrics Bar */}
      <div className="mx-auto max-w-4xl mb-12 lg:mb-16">
        <div className="grid grid-cols-3 gap-4 lg:gap-8">
          {[
            { valueKey: "testimonials.metrics.0.value", labelKey: "testimonials.metrics.0.label" },
            { valueKey: "testimonials.metrics.1.value", labelKey: "testimonials.metrics.1.label" },
            { valueKey: "testimonials.metrics.2.value", labelKey: "testimonials.metrics.2.label" },
          ].map((metric, idx) => (
            <div
              key={idx}
              className="text-center p-6 lg:p-8 rounded-2xl bg-muted/50 border border-border/50 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary tracking-tight">
                {t(metric.valueKey)}
              </div>
              <div className="mt-2 text-muted-foreground text-sm lg:text-base font-medium">
                {t(metric.labelKey)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Personas */}
      <div className="mx-auto max-w-5xl mb-12 lg:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "graduation-cap" as const,
              titleKey: "testimonials.personas.0.title",
              titleHighlightKey: "testimonials.personas.0.titleHighlight",
              descKey: "testimonials.personas.0.description",
            },
            {
              icon: "briefcase" as const,
              titleKey: "testimonials.personas.1.title",
              titleHighlightKey: "testimonials.personas.1.titleHighlight",
              descKey: "testimonials.personas.1.description",
            },
            {
              icon: "user-check" as const,
              titleKey: "testimonials.personas.2.title",
              titleHighlightKey: "testimonials.personas.2.titleHighlight",
              descKey: "testimonials.personas.2.description",
            },
          ].map((persona, idx) => {
            const Icon = ICONS[persona.icon] || GraduationCap;
            const showHighlight = hasTranslation(t, persona.titleHighlightKey);
            return (
              <article
                key={idx}
                className="relative p-6 lg:p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    {t(persona.titleKey)}
                    {showHighlight && (
                      <span className="text-sm font-medium text-primary/80">
                        {t(persona.titleHighlightKey)}
                      </span>
                    )}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t(persona.descKey)}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      {/* Parser CTA */}
      <div className="mx-auto max-w-xl text-center">
        <Link
          href={t("testimonials.parserCTA.href")}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          {t("testimonials.parserCTA.linkText")}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
        <p className="mt-4 text-sm text-muted-foreground">
          {t("testimonials.parserCTA.text")}
        </p>
      </div>
    </section>
  );
};