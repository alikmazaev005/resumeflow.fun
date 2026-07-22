import { BaseForm } from "components/ResumeForm/Form";
import { Input, Textarea } from "components/ResumeForm/Form/InputGroup";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { changeProfile, selectProfile } from "lib/redux/resumeSlice";
import { ResumeProfile } from "lib/redux/types";
import { useT } from "lib/i18n/context";

export const ProfileForm = () => {
  const t = useT();
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();
  const { name, email, phone, url, summary, location } = profile;

  const handleProfileChange = (field: keyof ResumeProfile, value: string) => {
    dispatch(changeProfile({ field, value }));
  };

  return (
    <BaseForm>
      <div className="grid grid-cols-6 gap-3">
        <Input
          label={t("form.profile.nameLabel")}
          labelClassName="col-span-full"
          name="name"
          placeholder={t("form.profile.namePlaceholder")}
          value={name}
          onChange={handleProfileChange}
        />
        <Textarea
          label={t("form.profile.summaryLabel")}
          labelClassName="col-span-full"
          name="summary"
          placeholder={t("form.profile.summaryPlaceholder")}
          value={summary}
          onChange={handleProfileChange}
        />
        <Input
          label={t("form.profile.emailLabel")}
          labelClassName="col-span-4"
          name="email"
          placeholder={t("form.profile.emailPlaceholder")}
          value={email}
          onChange={handleProfileChange}
        />
        <Input
          label={t("form.profile.phoneLabel")}
          labelClassName="col-span-2"
          name="phone"
          placeholder={t("form.profile.phonePlaceholder")}
          value={phone}
          onChange={handleProfileChange}
        />
        <Input
          label={t("form.profile.websiteLabel")}
          labelClassName="col-span-4"
          name="url"
          placeholder={t("form.profile.websitePlaceholder")}
          value={url}
          onChange={handleProfileChange}
        />
        <Input
          label={t("form.profile.locationLabel")}
          labelClassName="col-span-2"
          name="location"
          placeholder={t("form.profile.locationPlaceholder")}
          value={location}
          onChange={handleProfileChange}
        />
      </div>
    </BaseForm>
  );
};
