"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "public/logo.svg";
import { cx } from "lib/cx";
import { useT } from "lib/i18n/context";
import { LanguageSwitcher } from "components/LanguageSwitcher";

export const TopNavBar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";
  const t = useT();

  return (
    <header
      aria-label={t("nav.ariaHeader")}
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex h-10 w-full items-center justify-between">
        <Link href="/">
          <span className="sr-only">ResumeFlow</span>
          <Image
            src={logoSrc}
            alt={t("nav.logoAlt")}
            className="h-8 w-full"
            priority
          />
        </Link>
        <nav
          aria-label={t("nav.ariaNav")}
          className="flex items-center gap-2 text-sm font-medium"
        >
          {[
            ["/resume-builder", "nav.builder"],
            ["/resume-parser", "nav.parser"],
          ].map(([href, key]) => (
            <Link
              key={key}
              className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
              href={href}
            >
              {t(key)}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};
