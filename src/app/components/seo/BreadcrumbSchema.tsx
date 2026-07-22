import Script from "next/script";

type Crumb = { name: string; href: string };

export function BreadcrumbSchema({ items }: { items: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://resumeflow.fun${item.href}`,
    })),
  };

  return (
    <Script id="breadcrumb-schema" type="application/ld+json" strategy="lazyOnload">
      {JSON.stringify(schema)}
    </Script>
  );
}
