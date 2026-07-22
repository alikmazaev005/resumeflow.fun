"use client";
import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import en from "./translations/en.json";
import ru from "./translations/ru.json";
import de from "./translations/de.json";
import fr from "./translations/fr.json";
import es from "./translations/es.json";
import zh from "./translations/zh.json";

const LOCALES = { en, ru, de, fr, es, zh } as const;
export type Locale = keyof typeof LOCALES;
export type Translations = typeof en;

const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  zh: "中文",
};

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

function getNested(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let result: unknown = obj;
  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  return typeof result === "string" ? result : path;
}

function getLocaleFromPath(): Locale {
  if (typeof window === "undefined") return "en";
  const path = window.location.pathname;
  const locale = path.split("/")[1];
  return (LOCALES as Record<string, unknown>)[locale] ? (locale as Locale) : "en";
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => getLocaleFromPath());

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale | null;
    if (savedLocale && (LOCALES as Record<string, unknown>)[savedLocale]) {
      setLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    const localeFromPath = getLocaleFromPath();
    if (localeFromPath !== locale) {
      setLocale(localeFromPath);
    }
  }, [locale]);

  const t = useCallback(
    (key: string): string => {
      const translations = LOCALES[locale] as Record<string, unknown>;
      return getNested(translations, key);
    },
    [locale]
  );

  const handleSetLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
    window.location.pathname = window.location.pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`);
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useT must be used within LocaleProvider");
  return ctx.t;
}

export function useLocale() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return { locale: ctx.locale, setLocale: ctx.setLocale, labels: LOCALE_LABELS };
}
