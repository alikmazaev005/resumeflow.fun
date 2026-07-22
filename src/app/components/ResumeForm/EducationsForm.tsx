import { Form, FormSection } from "components/ResumeForm/Form";
import {
  BulletListTextarea,
  Input,
} from "components/ResumeForm/Form/InputGroup";
import { BulletListIconButton } from "components/ResumeForm/Form/IconButton";
import type { CreateHandleChangeArgsWithDescriptions } from "components/ResumeForm/types";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { changeEducations, selectEducations } from "lib/redux/resumeSlice";
import type { ResumeEducation } from "lib/redux/types";
import {
  changeShowBulletPoints,
  selectShowBulletPoints,
} from "lib/redux/settingsSlice";
import { useT } from "lib/i18n/context";

export const EducationsForm = () => {
  const t = useT();
  const educations = useAppSelector(selectEducations);
  const dispatch = useAppDispatch();
  const showDelete = educations.length > 1;
  const form = "educations";
  const showBulletPoints = useAppSelector(selectShowBulletPoints(form));

  return (
    <Form form={form} addButtonText={t("form.education.addButton")}>
      {educations.map(({ school, degree, gpa, date, descriptions }, idx) => {
        const handleEducationChange = (
          ...[
            field,
            value,
          ]: CreateHandleChangeArgsWithDescriptions<ResumeEducation>
        ) => {
          dispatch(changeEducations({ idx, field, value } as any));
        };

        const handleShowBulletPoints = (value: boolean) => {
          dispatch(changeShowBulletPoints({ field: form, value }));
        };

        const showMoveUp = idx !== 0;
        const showMoveDown = idx !== educations.length - 1;

        return (
          <FormSection
            key={idx}
            form="educations"
            idx={idx}
            showMoveUp={showMoveUp}
            showMoveDown={showMoveDown}
            showDelete={showDelete}
            deleteButtonTooltipText={t("form.education.deleteTooltip")}
          >
            <Input
              label={t("form.education.schoolLabel")}
              labelClassName="col-span-4"
              name="school"
              placeholder={t("form.education.schoolPlaceholder")}
              value={school}
              onChange={handleEducationChange}
            />
            <Input
              label={t("form.education.dateLabel")}
              labelClassName="col-span-2"
              name="date"
              placeholder={t("form.education.datePlaceholder")}
              value={date}
              onChange={handleEducationChange}
            />
            <Input
              label={t("form.education.degreeLabel")}
              labelClassName="col-span-4"
              name="degree"
              placeholder={t("form.education.degreePlaceholder")}
              value={degree}
              onChange={handleEducationChange}
            />
            <Input
              label={t("form.education.gpaLabel")}
              labelClassName="col-span-2"
              name="gpa"
              placeholder={t("form.education.gpaPlaceholder")}
              value={gpa}
              onChange={handleEducationChange}
            />
            <div className="relative col-span-full">
              <BulletListTextarea
                label={t("form.education.additionalLabel")}
                labelClassName="col-span-full"
                name="descriptions"
                placeholder={t("form.education.additionalPlaceholder")}
                value={descriptions}
                onChange={handleEducationChange}
                showBulletPoints={showBulletPoints}
              />
              <div className="absolute left-[15.6rem] top-[0.07rem]">
                <BulletListIconButton
                  showBulletPoints={showBulletPoints}
                  onClick={handleShowBulletPoints}
                />
              </div>
            </div>
          </FormSection>
        );
      })}
    </Form>
  );
};
