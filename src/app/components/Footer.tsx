import Link from "next/link";

// ЗАМЕНИТЕ на реальные данные владельца домена
const OWNER_NAME = "ResumeFlow Studio";
const OWNER_CONTACT = "support@resumeflow.fun";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-8">
      <div className="mx-auto max-w-screen-2xl px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <p>ResumeFlow — Free, open-source resume builder</p>
          <p className="text-xs text-muted-foreground/70">
            ResumeFlow is based on the open-source OpenResume project by Xitang Zhao, maintained independently at resumeflow.fun.
          </p>
          <div className="flex flex-col items-start gap-1">
            <span className="text-xs text-muted-foreground/50">
              {/* OWNER_NAME — впишите сюда имя владельца/название организации */}
              Owner: {OWNER_NAME}
            </span>
            <span className="text-xs text-muted-foreground/50">
              {/* OWNER_CONTACT — впишите сюда способ связи (адрес, телефон, ссылку) */}
              Contact: {OWNER_CONTACT}
            </span>
          </div>
          <nav className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}