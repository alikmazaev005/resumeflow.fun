"use client";
import { Fragment } from "react";
import type { Resume } from "lib/redux/types";
import { initialEducation, initialWorkExperience } from "lib/redux/resumeSlice";
import { deepClone } from "lib/deep-clone";
import { cx } from "lib/cx";
import { useT } from "lib/i18n/context";

const TableRowHeader = ({ children }: { children: React.ReactNode }) => (
  <tr className="divide-x bg-gray-50">
    <th className="px-3 py-2 font-semibold" scope="colgroup" colSpan={2}>
      {children}
    </th>
  </tr>
);

const TableRow = ({
  label,
  value,
  className,
}: {
  label: string;
  value: string | string[];
  className?: string | false;
}) => (
  <tr className={cx("divide-x", className)}>
    <th className="px-3 py-2 font-medium" scope="row">
      {label}
    </th>
    <td className="w-full px-3 py-2">
      {typeof value === "string"
        ? value
        : value.map((x, idx) => (
            <Fragment key={idx}>
              • {x}
              <br />
            </Fragment>
          ))}
    </td>
  </tr>
);

export const ResumeTable = ({ resume }: { resume: Resume }) => {
  const t = useT();
  const educations =
    resume.educations.length === 0
      ? [deepClone(initialEducation)]
      : resume.educations;
  const workExperiences =
    resume.workExperiences.length === 0
      ? [deepClone(initialWorkExperience)]
      : resume.workExperiences;
  const skills = [...resume.skills.descriptions];
  const featuredSkills = resume.skills.featuredSkills
    .filter((item) => item.skill.trim())
    .map((item) => item.skill)
    .join(", ")
    .trim();
  if (featuredSkills) {
    skills.unshift(featuredSkills);
  }
  return (
    <table className="mt-2 w-full border text-sm text-gray-900">
      <tbody className="divide-y text-left align-top">
        <TableRowHeader>{t("parser.tableProfile")}</TableRowHeader>
        <TableRow label={t("parser.tableName")} value={resume.profile.name} />
        <TableRow label={t("parser.tableEmail")} value={resume.profile.email} />
        <TableRow label={t("parser.tablePhone")} value={resume.profile.phone} />
        <TableRow label={t("parser.tableLocation")} value={resume.profile.location} />
        <TableRow label={t("parser.tableLink")} value={resume.profile.url} />
        <TableRow label={t("parser.tableSummary")} value={resume.profile.summary} />
        <TableRowHeader>{t("parser.tableEducation")}</TableRowHeader>
        {educations.map((education, idx) => (
          <Fragment key={idx}>
            <TableRow label={t("parser.tableSchool")} value={education.school} />
            <TableRow label={t("parser.tableDegree")} value={education.degree} />
            <TableRow label={t("parser.tableGpa")} value={education.gpa} />
            <TableRow label={t("parser.tableDate")} value={education.date} />
            <TableRow
              label={t("parser.tableDescriptions")}
              value={education.descriptions}
              className={
                educations.length - 1 !== 0 &&
                idx !== educations.length - 1 &&
                "!border-b-4"
              }
            />
          </Fragment>
        ))}
        <TableRowHeader>{t("parser.tableWorkExperience")}</TableRowHeader>
        {workExperiences.map((workExperience, idx) => (
          <Fragment key={idx}>
            <TableRow label={t("parser.tableCompany")} value={workExperience.company} />
            <TableRow label={t("parser.tableJobTitle")} value={workExperience.jobTitle} />
            <TableRow label={t("parser.tableDate")} value={workExperience.date} />
            <TableRow
              label={t("parser.tableDescriptions")}
              value={workExperience.descriptions}
              className={
                workExperiences.length - 1 !== 0 &&
                idx !== workExperiences.length - 1 &&
                "!border-b-4"
              }
            />
          </Fragment>
        ))}
        {resume.projects.length > 0 && (
          <TableRowHeader>{t("parser.tableProjects")}</TableRowHeader>
        )}
        {resume.projects.map((project, idx) => (
          <Fragment key={idx}>
            <TableRow label={t("parser.tableProject")} value={project.project} />
            <TableRow label={t("parser.tableDate")} value={project.date} />
            <TableRow
              label={t("parser.tableDescriptions")}
              value={project.descriptions}
              className={
                resume.projects.length - 1 !== 0 &&
                idx !== resume.projects.length - 1 &&
                "!border-b-4"
              }
            />
          </Fragment>
        ))}
        <TableRowHeader>{t("parser.tableSkills")}</TableRowHeader>
        <TableRow label={t("parser.tableDescriptions")} value={skills} />
      </tbody>
    </table>
  );
};
