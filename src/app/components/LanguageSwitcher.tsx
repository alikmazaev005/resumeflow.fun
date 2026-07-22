"use client";
import { useLocale } from "lib/i18n/context";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function LanguageSwitcher() {
  const { locale, setLocale, labels } = useLocale();

  return (
    <div className="relative">
      <select
        value={locale}
        onChange={(e) =>
          setLocale(e.target.value as keyof typeof labels)
        }
        className="appearance-none rounded-md border border-gray-300 bg-white py-1.5 pl-2 pr-7 text-sm text-gray-600 hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-400 cursor-pointer"
        aria-label="Select language"
      >
        {Object.entries(labels).map(([code, label]) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute right-1.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
    </div>
  );
}
