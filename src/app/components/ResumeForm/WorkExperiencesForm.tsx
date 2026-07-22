import { Form, FormSection } from "components/ResumeForm/Form";
import {
  Input,
  BulletListTextarea,
} from "components/ResumeForm/Form/InputGroup";
import type { CreateHandleChangeArgsWithDescriptions } from "components/ResumeForm/types";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import {
  changeWorkExperiences,
  selectWorkExperiences,
} from "lib/redux/resumeSlice";
import type { ResumeWorkExperience } from "lib/redux/types";
import { useT } from "lib/i18n/context";

export const WorkExperiencesForm = () => {
  const t = useT();
  const workExperiences = useAppSelector(selectWorkExperiences);
  const dispatch = useAppDispatch();

  const showDelete = workExperiences.length > 1;

  return (
    <Form form="workExperiences" addButtonText={t("form.work.addButton")}>
      {workExperiences.map(({ company, jobTitle, date, descriptions }, idx) => {
        const handleWorkExperienceChange = (
          ...[
            field,
            value,
          ]: CreateHandleChangeArgsWithDescriptions<ResumeWorkExperience>
        ) => {
          // TS doesn't support passing union type to single call signature
          // https://github.com/microsoft/TypeScript/issues/54027
          // any is used here as a workaround
          dispatch(changeWorkExperiences({ idx, field, value } as any));
        };
        const showMoveUp = idx !== 0;
        const showMoveDown = idx !== workExperiences.length - 1;

        return (
          <FormSection
            key={idx}
            form="workExperiences"
            idx={idx}
            showMoveUp={showMoveUp}
            showMoveDown={showMoveDown}
            showDelete={showDelete}
            deleteButtonTooltipText={t("form.work.deleteTooltip")}
          >
            <Input
              label={t("form.work.companyLabel")}
              labelClassName="col-span-full"
              name="company"
              placeholder={t("form.work.companyPlaceholder")}
              value={company}
              onChange={handleWorkExperienceChange}
            />
            <Input
              label={t("form.work.jobTitleLabel")}
              labelClassName="col-span-4"
              name="jobTitle"
              placeholder={t("form.work.jobTitlePlaceholder")}
              value={jobTitle}
              onChange={handleWorkExperienceChange}
            />
            <Input
              label={t("form.work.dateLabel")}
              labelClassName="col-span-2"
              name="date"
              placeholder={t("form.work.datePlaceholder")}
              value={date}
              onChange={handleWorkExperienceChange}
            />
            <BulletListTextarea
              label={t("form.work.descriptionLabel")}
              labelClassName="col-span-full"
              name="descriptions"
              placeholder={t("form.work.descriptionPlaceholder")}
              value={descriptions}
              onChange={handleWorkExperienceChange}
            />
          </FormSection>
        );
      })}
    </Form>
  );
};
