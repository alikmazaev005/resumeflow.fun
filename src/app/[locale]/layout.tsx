export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="${params.locale}";window.__INITIAL_LOCALE__="${params.locale}";`,
        }}
      />
      {children}
    </>
  );
}
