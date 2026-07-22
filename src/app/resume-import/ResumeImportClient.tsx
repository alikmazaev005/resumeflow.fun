"use client";
import { getHasUsedAppBefore } from "lib/redux/local-storage";
import { ResumeDropzone } from "components/ResumeDropzone";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useT } from "lib/i18n/context";
import { Footer } from "components/Footer";

export default function ResumeImportClient() {
  const [hasUsedAppBefore, setHasUsedAppBefore] = useState(false);
  const [hasAddedResume, setHasAddedResume] = useState(false);
  const t = useT();
  const onFileUrlChange = (fileUrl: string) => {
    setHasAddedResume(Boolean(fileUrl));
  };

  useEffect(() => {
    setHasUsedAppBefore(getHasUsedAppBefore());
  }, []);

  return (
    <>
      <main>
        <div className="mx-auto mt-14 max-w-3xl rounded-md border border-gray-200 px-10 py-10 text-center shadow-md">
          {!hasUsedAppBefore ? (
            <>
              <h1 className="text-lg font-semibold text-gray-900">
                {t("import.headingNew")}
              </h1>
              <ResumeDropzone
                onFileUrlChange={onFileUrlChange}
                className="mt-5"
              />
              {!hasAddedResume && (
                <>
                  <OrDivider t={t} />
                  <SectionWithHeadingAndCreateButton
                    heading={t("import.noResumeHeading")}
                    buttonText={t("import.createFromScratch")}
                  />
                </>
              )}
            </>
          ) : (
            <>
              {!hasAddedResume && (
                <>
                  <SectionWithHeadingAndCreateButton
                    heading={t("import.returningHeading")}
                    buttonText={t("import.continueWhereLeftOff")}
                  />
                  <OrDivider t={t} />
                </>
              )}
              <h1 className="font-semibold text-gray-900">
                {t("import.overrideHeading")}
              </h1>
              <ResumeDropzone
                onFileUrlChange={onFileUrlChange}
                className="mt-5"
              />
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

const OrDivider = ({ t }: { t: (key: string) => string }) => (
  <div className="mx-[-2.5rem] flex items-center pb-6 pt-8" aria-hidden="true">
    <div className="flex-grow border-t border-gray-200" />
    <span className="mx-2 mt-[-2px] flex-shrink text-lg text-gray-400">{t("import.or")}</span>
    <div className="flex-grow border-t border-gray-200" />
  </div>
);

const SectionWithHeadingAndCreateButton = ({
  heading,
  buttonText,
}: {
  heading: string;
  buttonText: string;
}) => {
  return (
    <>
      <p className="font-semibold text-gray-900">{heading}</p>
      <div className="mt-5">
        <Link
          href="/resume-builder"
          className="outline-theme-blue rounded-full bg-sky-500 px-6 pb-2 pt-1.5 text-base font-semibold text-white"
        >
          {buttonText}
        </Link>
      </div>
    </>
  );
};
