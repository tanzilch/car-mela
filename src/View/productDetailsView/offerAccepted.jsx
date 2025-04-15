import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const OfferAccepted = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-12">
      <div className="max-w-[418px] mx-auto flex items-center flex-col gap-4 w-full">
        <div className="max-w-[200px] w-full">
          <img
            src="/assets/images/offeraccepted.svg"
            alt={t("offerAccepted.altText")}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-[40px] font-semibold text-center text-[#1f1f1f]">
            {t("offerAccepted.title")}
          </h1>
          <p className="text-[14px] md:text-[16px] text-center xl:text-[18px] text-[#38465A]">
            {t("offerAccepted.description")}
          </p>
        </div>
        <Link to={"/"}>
          <button className="bg-[#ED1C25] text-white py-3 px-10 rounded-[14px]">
            <span>{t("offerAccepted.buttonText")}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OfferAccepted;
