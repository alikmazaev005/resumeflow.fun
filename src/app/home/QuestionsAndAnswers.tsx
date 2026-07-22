"use client";
import { useT } from "lib/i18n/context";

export const QuestionsAndAnswers = () => {
  const t = useT();

  const QAS = [
    {
      question: t("qa.q1"),
      answer: (
        <>
          <p>{t("qa.a1p1")}</p>
          <p>{t("qa.a1p2")}</p>
        </>
      ),
    },
    {
      question: t("qa.q2"),
      answer: (
        <>
          <p>{t("qa.a2p1")} {t("qa.a2p1After")}</p>
          <p>
            <span className="font-semibold">{t("qa.a2Feature1Title")}</span>
            <br />
            {t("qa.a2Feature1Text")}
          </p>
          <p>
            <span className="font-semibold">{t("qa.a2Feature2Title")}</span>
            <br />
            {t("qa.a2Feature2Text")}
          </p>
        </>
      ),
    },
    {
      question: t("qa.q3"),
      answer: <p>{t("qa.a3p1")}</p>,
    },
    {
      question: t("qa.q4"),
      answer: <p>{t("qa.a4p1")}</p>,
    },
  ];

  return (
    <section className="mx-auto max-w-3xl divide-y divide-gray-300 lg:mt-4 lg:px-2">
      <h2 className="text-center text-3xl font-bold">{t("qa.title")}</h2>
      <div className="mt-6 divide-y divide-gray-300">
        {QAS.map(({ question, answer }) => (
          <div key={question} className="py-6">
            <h3 className="font-semibold leading-7">{question}</h3>
            <div className="mt-3 grid gap-2 leading-7 text-gray-600">
              {answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};