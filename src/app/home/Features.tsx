"use client";

import Image from "next/image";
import featureFreeSrc from "public/assets/feature-free.svg";
import featureUSSrc from "public/assets/feature-us.svg";
import featurePrivacySrc from "public/assets/feature-privacy.svg";
import featureOpenSourceSrc from "public/assets/feature-open-source.svg";
import { useT } from "lib/i18n/context";

const FEATURES_KEYS = [
  {
    src: featureFreeSrc,
    titleKey: "features.freeTitle",
    textKey: "features.freeText",
  },
  {
    src: featureUSSrc,
    titleKey: "features.usTitle",
    textKey: "features.usText",
  },
  {
    src: featurePrivacySrc,
    titleKey: "features.privacyTitle",
    textKey: "features.privacyText",
  },
  {
    src: featureOpenSourceSrc,
    titleKey: "features.openSourceTitle",
    isLast: true,
  },
];

export const Features = () => {
  const t = useT();
  return (
    <section className="py-16 lg:py-36">
      <div className="mx-auto lg:max-w-4xl">
        <dl className="grid grid-cols-1 justify-items-center gap-y-8 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-16">
          {FEATURES_KEYS.map((feature) => (
            <div className="px-2" key={feature.titleKey}>
              <div className="relative w-96 self-center pl-16">
                <dt className="text-2xl font-bold">
                  <Image
                    src={feature.src}
                    className="absolute left-0 top-1 h-12 w-12"
                    alt={t("features.alt")}
                  />
                  {t(feature.titleKey)}
                </dt>
                <dd className="mt-2">
                  {feature.isLast ? (
                    t("features.openSourceText")
                  ) : (
                    t(feature.textKey!)
                  )}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
