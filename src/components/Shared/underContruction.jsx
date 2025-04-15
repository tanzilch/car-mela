import { useTranslation } from "react-i18next";

const UnderConstruction = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center min-w-full">
      <h1 className="font-bold text-4xl">
        {t("pageStatus.underConstruction")}
      </h1>
    </div>
  );
};
export default UnderConstruction;
