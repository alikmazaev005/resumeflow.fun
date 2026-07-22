"use client";
import { isBold } from "lib/parse-resume-from-pdf/extract-resume-from-sections/lib/common-features";
import {
  Badge,
  Heading,
  Link,
  Paragraph,
  Table,
} from "components/documentation";
import type {
  Line,
  Lines,
  ResumeSectionToLines,
  TextItem,
  TextItems,
  TextScores,
} from "lib/parse-resume-from-pdf/types";
import { extractProfile } from "lib/parse-resume-from-pdf/extract-resume-from-sections/extract-profile";
import { useT } from "lib/i18n/context";

export const ResumeParserAlgorithmArticle = ({
  textItems,
  lines,
  sections,
}: {
  textItems: TextItems;
  lines: Lines;
  sections: ResumeSectionToLines;
}) => {
  const t = useT();
  const getBadgeContent = (item: TextItem) => {
    const X1 = Math.round(item.x);
    const X2 = Math.round(item.x + item.width);
    const Y = Math.round(item.y);
    let content = `X₁=${X1} X₂=${X2} Y=${Y}`;
    if (X1 === X2) {
      content = `X=${X2} Y=${Y}`;
    }
    if (isBold(item)) {
      content = `${content} Bold`;
    }
    if (item.hasEOL) {
      content = `${content} NewLine`;
    }
    return content;
  };
  const step1TextItemsTable = [
    [t("algorithm.step1TableHeader.0"), t("algorithm.step1TableHeader.1"), t("algorithm.step1TableHeader.2")],
    ...textItems.map((item, idx) => [
      idx + 1,
      item.text,
      <Badge key={idx}>{getBadgeContent(item)}</Badge>,
    ]),
  ];

  const step2LinesTable = [
    [t("algorithm.step2TableHeader.0"), t("algorithm.step2TableHeader.1")],
    ...lines.map((line, idx) => [
      idx + 1,
      line.map((item, idx) => (
        <span key={idx}>
          {item.text}
          {idx !== line.length - 1 && (
            <span className="select-none font-extrabold text-sky-400">
              &nbsp;&nbsp;{"|"}&nbsp;&nbsp;
            </span>
          )}
        </span>
      )),
    ]),
  ];

  const { profile, profileScores } = extractProfile(sections);
  const Scores = ({ scores }: { scores: TextScores }) => {
    return (
      <>
        {scores
          .sort((a, b) => b.score - a.score)
          .map((item, idx) => (
            <span key={idx} className="break-all">
              <Badge>{item.score}</Badge> {item.text}
              <br />
            </span>
          ))}
      </>
    );
  };
  const step4ProfileFeatureScoresTable = [
    [
      t("algorithm.step4TableHeader.0"),
      t("algorithm.step4TableHeader.1"),
      t("algorithm.step4TableHeader.2"),
    ],
    [t("algorithm.step4Name"), profile.name, <Scores key={"Name"} scores={profileScores.name} />],
    [
      t("algorithm.step4Email"),
      profile.email,
      <Scores key={"Email"} scores={profileScores.email} />,
    ],
    [
      t("algorithm.step4Phone"),
      profile.phone,
      <Scores key={"Phone"} scores={profileScores.phone} />,
    ],
  ];

  const step4NameFeatureSetsTable = [
    [t("algorithm.step4FeatureSetsTableHeader.0"), t("algorithm.step4FeatureSetsTableHeader.1")],
    [t("algorithm.step4Feature1"), t("algorithm.step4Score3")],
    [t("algorithm.step4Feature2"), t("algorithm.step4Score2")],
    [t("algorithm.step4Feature3"), t("algorithm.step4Score2")],
    [t("algorithm.step4Feature4"), t("algorithm.step4ScoreMatchEmail")],
    [t("algorithm.step4Feature5"), t("algorithm.step4ScoreMatchPhone")],
    [t("algorithm.step4Feature6"), t("algorithm.step4ScoreMatchAddress")],
    [t("algorithm.step4Feature7"), t("algorithm.step4ScoreMatchUrl")],
  ];

  const step4CoreFeatureFunctionTable = [
    [t("algorithm.step4CoreTableHeader.0"), t("algorithm.step4CoreTableHeader.1"), t("algorithm.step4CoreTableHeader.2")],
    [t("algorithm.step4Name"), t("algorithm.step4CoreName"), "/^[a-zA-Z\\s\\.]+$/"],
    [
      t("algorithm.step4Email"),
      <>{t("algorithm.step4CoreEmail")}</>,
      "/\\S+@\\S+\\.\\S+/",
    ],
    [
      t("algorithm.step4Phone"),
      <>{t("algorithm.step4CorePhone")}</>,
      "/\\(?\\d{3}\\)?[\\s-]?\\d{3}[\\s-]?\\d{4}/",
    ],
    [
      "Location",
      <>{t("algorithm.step4CoreLocation")}</>,
      "/[A-Z][a-zA-Z\\s]+, [A-Z]{2}/",
    ],
    ["Url", t("algorithm.step4CoreUrl"), "/\\S+\\.[a-z]+\\/\\S+/"],
    ["School", t("algorithm.step4CoreSchool"), ""],
    ["Degree", t("algorithm.step4CoreDegree"), ""],
    ["GPA", t("algorithm.step4CoreGpa"), "/[0-4]\\.\\d{1,2}/"],
    [
      "Date",
      t("algorithm.step4CoreDate"),
      "Year: /(?:19|20)\\d{2}/",
    ],
    [
      "Job Title",
      t("algorithm.step4CoreJobTitle"),
      "",
    ],
    ["Company", t("algorithm.step4CoreCompany"), ""],
    ["Project", t("algorithm.step4CoreProject"), ""],
  ];

  return (
    <article className="mt-10">
      <Heading className="text-primary !mt-0 border-t-2 pt-8">
        {t("algorithm.title")}
      </Heading>
      <Paragraph smallMarginTop={true}>
        {t("algorithm.intro")}
      </Paragraph>
      {/* Step 1. Read the text items from a PDF file */}
      <Heading level={2}>{t("algorithm.step1Title")}</Heading>
      <Paragraph smallMarginTop={true}>
        {t("algorithm.step1p1")}{" "}
        <Link href="https://www.iso.org/standard/51502.html">
          {t("algorithm.step1IsoLink")}
        </Link>
        {t("algorithm.step1p1After")}
      </Paragraph>
      <Paragraph>
        {t("algorithm.step1p2")}{" "}
        <Link href="https://github.com/mozilla/pdf.js">
          {t("algorithm.step1PdfjsLink")}
        </Link>{" "}
        {t("algorithm.step1p2After")}
      </Paragraph>
      <Paragraph>
        {t("algorithm.step1p3").replace("{n}", String(textItems.length))}
      </Paragraph>
      <div className="mt-4 max-h-72 overflow-y-scroll border scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-w-3">
        <Table
          table={step1TextItemsTable}
          className="!border-none"
          tdClassNames={["", "", "md:whitespace-nowrap"]}
        />
      </div>
      {/* Step 2. Group text items into lines */}
      <Heading level={2}>{t("algorithm.step2Title")}</Heading>
      <Paragraph smallMarginTop={true}>
        {t("algorithm.step2Intro")}
      </Paragraph>
      <Paragraph>
        <span className="mt-3 block font-semibold">
          {t("algorithm.step2Issue1Title")}
        </span>
        {t("algorithm.step2Issue1Text")}
      </Paragraph>
<Paragraph smallMarginTop={true}>
        <span className="font-semibold">{t("algorithm.step2Solution1Title")}</span>{" "}
        {t("algorithm.step2Solution1Text")}
        <span
          dangerouslySetInnerHTML={{
            __html: `<math display="block">
                        <mrow>
                            <mn>Distance </mn>
                            <mo>=</mo>
                            <mn>RightTextItemX₁</mn>
                            <mo>-</mo>
                            <mn>LeftTextItemX₂</mn>
                        </mrow>
                    </math>`,
          }}
          className="my-2 block text-left text-base"
        />
        {t("algorithm.step2Solution1After")}
      </Paragraph>
      <Paragraph>
        <span className="mt-3 block font-semibold">
          {t("algorithm.step2Issue2Title")}
        </span>
        {t("algorithm.step2Issue2Text")}
      </Paragraph>
      <Paragraph smallMarginTop={true}>
        <span className="font-semibold">{t("algorithm.step2Solution2Title")}</span>{" "}
        {t("algorithm.step2Solution2Text")}
      </Paragraph>
      <div className="mt-4 max-h-96 overflow-y-scroll border scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-w-3">
        <Table table={step2LinesTable} className="!border-none" />
      </div>
      {/* Step 3. Group lines into sections */}
      <Heading level={2}>{t("algorithm.step3Title")}</Heading>
      <Paragraph smallMarginTop={true}>
        {t("algorithm.step3p1")}
      </Paragraph>
      <Paragraph>
        {t("algorithm.step3p2").replace("{n}", String(Object.entries(sections).length))}{" "}
        <span className="font-bold">{t("algorithm.step3p2Bold")}</span>{" "}
        {t("algorithm.step3p2After")}
      </Paragraph>
      <Step3SectionsTable sections={sections} />
      {/* Step 4. Extract resume from sections */}
      <Heading level={2}>{t("algorithm.step4Title")}</Heading>
      <Heading level={3}>{t("algorithm.step4Sub1")}</Heading>
      <Paragraph smallMarginTop={true}>
        {t("algorithm.step4Sub1Text")}
      </Paragraph>
      <Table table={step4ProfileFeatureScoresTable} className="mt-4" />
      {(profileScores.name.find((item) => item.text === profile.name)?.score ||
        0) > 0 && (
        <Paragraph smallMarginTop={true}>
          {t("algorithm.step4DynamicText")
            .replace("{name}", profile.name)
            .replace("{score}", String(profileScores.name.find((item) => item.text === profile.name)?.score))}
        </Paragraph>
      )}
      <Heading level={3}>{t("algorithm.step4Sub2")}</Heading>
      <Table
        table={step4NameFeatureSetsTable}
        title={t("algorithm.step4FeatureSetsTableTitle")}
        className="mt-4"
      />
      <Heading level={3}>{t("algorithm.step4Sub3")}</Heading>
      <Table table={step4CoreFeatureFunctionTable} className="mt-4" />
      <Heading level={3}>{t("algorithm.step4Sub4")}</Heading>
      <Paragraph smallMarginTop={true}>
        {t("algorithm.step4Sub4Text")}
      </Paragraph>
      <Paragraph>
        {t("algorithm.conclusion")}
      </Paragraph>
      <Paragraph>
        {t("algorithm.attribution").replace("{name}", t("algorithm.attributionName"))}
      </Paragraph>
    </article>
  );
};

const Step3SectionsTable = ({
  sections,
}: {
  sections: ResumeSectionToLines;
}) => {
  const t = useT();
  const table: React.ReactNode[][] = [[t("algorithm.step3TableHeader.0"), t("algorithm.step3TableHeader.1")]];
  const trClassNames = [];
  let lineCounter = 0;
  const BACKGROUND_COLORS = [
    "bg-red-50",
    "bg-yellow-50",
    "bg-orange-50",
    "bg-green-50",
    "bg-blue-50",
    "bg-purple-50",
  ] as const;
  const sectionsEntries = Object.entries(sections);

  const Line = ({ line }: { line: Line }) => {
    return (
      <>
        {line.map((item, idx) => (
          <span key={idx}>
            {item.text}
            {idx !== line.length - 1 && (
              <span className="select-none font-extrabold text-sky-400">
                &nbsp;&nbsp;{"|"}&nbsp;&nbsp;
              </span>
            )}
          </span>
        ))}
      </>
    );
  };

  for (let i = 0; i < sectionsEntries.length; i++) {
    const sectionBackgroundColor = BACKGROUND_COLORS[i % 6];
    const [sectionTitle, lines] = sectionsEntries[i];
    table.push([
      sectionTitle === "profile" ? "" : lineCounter,
      sectionTitle === "profile" ? t("algorithm.step3ProfileLabel") : sectionTitle,
    ]);
    trClassNames.push(`${sectionBackgroundColor} font-bold`);
    lineCounter += 1;
    for (let j = 0; j < lines.length; j++) {
      table.push([lineCounter, <Line key={lineCounter} line={lines[j]} />]);
      trClassNames.push(sectionBackgroundColor);
      lineCounter += 1;
    }
  }

  return (
    <div className="mt-4 max-h-96 overflow-y-scroll border scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-w-3">
      <Table
        table={table}
        className="!border-none"
        trClassNames={trClassNames}
      />
    </div>
  );
};
