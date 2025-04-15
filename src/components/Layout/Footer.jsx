import { useTranslation } from "react-i18next";

const FooterMenu1Data = [
  {
    id: 1,
    value: "Bus",
  },
  {
    id: 2,
    value: "3-Wheeler",
  },
  {
    id: 3,
    value: "Pickup",
  },
  {
    id: 4,
    value: "Human Hauler",
  },
];

const FooterMenu2Data = [
  {
    id: 1,
    value: "About",
  },
  {
    id: 2,
    value: "FAQ",
  },
  {
    id: 3,
    value: "Careers",
  },
];

const FooterMenu3Data = [
  {
    id: 1,
    value: "Mahindra",
  },
  {
    id: 2,
    value: "Eicher",
  },
  {
    id: 3,
    value: "DongFeng",
  },
];

const Footer = () => {
  const { t } = useTranslation(); // Get the translation function

  return (
    <div className="bg-[#111827]">
      <div className="container pt-10 pb-20 md:py-16 flex gap-4 flex-col">
        <div className="flex justify-between flex-wrap gap-7 lg:gap-0">
          <div className="flex flex-col lg:max-w-[360px] w-full gap-2">
            <div className="max-w-[150px] w-full">
              <img src="/assets/images/logo.svg" alt="no-image" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[16px] xl:text-[18px] text-[#ADB7BC]">
                {t("footer.customerSupport")} 
              </p>
              <span className="text-[20px] xl:text-[24px] text-white font-medium">56345</span>
            </div>
            <p className="text-[16px] xl:text-[18px] text-[#ADB7BC]">
              {t("footer.address")} 
            </p>
            <h2 className="text-[20px] xl:text-[24px] text-white font-medium">
              info@garimela.com
            </h2>
          </div>
          <div className="flex max-w-[800px] w-full justify-between">
            <div className="max-w-max flex flex-col gap-3">
              <h2 className="text-[16px] xl:text-[18px] font-bold text-white">
                {t("footer.company")} 
              </h2>
              <ul className="flex flex-col gap-3">
                {FooterMenu1Data?.map((ls, id) => (
                  <li
                    className="text-[16px] xl:text-[18px] hover:cursor-pointer text-[#E5E7EB]"
                    key={id}
                  >
                    {t(`footer.menu1.${ls.value}`)} 
                  </li>
                ))}
              </ul>
            </div>
            <div className="max-w-max flex flex-col gap-3">
              <h2 className="text-[16px] xl:text-[18px] font-bold text-white">
                {t("footer.brand")} 
              </h2>
              <ul className="flex flex-col gap-3">
                {FooterMenu2Data?.map((ls, id) => (
                  <li
                    className="text-[16px] xl:text-[18px] hover:cursor-pointer text-[#E5E7EB]"
                    key={id}
                  >
                    {t(`footer.menu2.${ls.value}`)} 
                  </li>
                ))}
              </ul>
            </div>
            <div className="max-w-max flex flex-col gap-3">
              <h2 className="text-[16px] xl:text-[18px] font-bold text-white">
                {t("footer.products")} 
              </h2>
              <ul className="flex flex-col gap-3">
                {FooterMenu3Data?.map((ls, id) => (
                  <li
                    className="text-[16px] xl:text-[18px] hover:cursor-pointer text-[#E5E7EB]"
                    key={id}
                  >
                    {t(`footer.menu3.${ls.value}`)} 
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="h-[1px] border-[1px] border-[#374151]" />
        <div className="flex sm:justify-between flex-wrap justify-center">
          <p className="text-[16px] xl:text-[18px] text-[#E5E7EB] font-medium">
            ©2024 Garimela. {t("footer.allRightsReserved")} 
          </p>
          <p className="text-[16px] xl:text-[18px] text-[#E5E7EB] font-medium">
            {t("footer.privacyPolicy")} | {t("footer.termsAndConditions")} 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
