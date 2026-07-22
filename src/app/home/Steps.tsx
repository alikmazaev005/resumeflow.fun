"use client";

import { useT } from "lib/i18n/context";

const STEPS_KEYS = [
  { titleKey: "steps.step1Title", textKey: "steps.step1Text" },
  { titleKey: "steps.step2Title", textKey: "steps.step2Text" },
  { titleKey: "steps.step3Title", textKey: "steps.step3Text" },
];

export const Steps = () => {
  const t = useT();
  return (
    <section className="mx-auto mt-8 rounded-2xl bg-sky-50 bg-dot px-8 pb-12 pt-10 lg:mt-2">
      <h2 className="text-center text-3xl font-bold">{t("steps.title")}</h2>
      <div className="mt-8 flex justify-center">
        <dl className="flex flex-col gap-y-10 lg:flex-row lg:justify-center lg:gap-x-20">
          {STEPS_KEYS.map(({ titleKey, textKey }, idx) => (
            <div className="relative self-start pl-14" key={idx}>
              <dt className="text-lg font-bold">
                <div className="bg-primary absolute left-0 top-1 flex h-10 w-10 select-none items-center justify-center rounded-full p-[3.5px] opacity-80">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                    <div className="text-primary -mt-0.5 text-2xl">
                      {idx + 1}
                    </div>
                  </div>
                </div>
                {t(titleKey)}
              </dt>
              <dd>{t(textKey)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
