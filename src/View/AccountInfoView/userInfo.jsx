import { LuPhoneCall } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { BiEditAlt } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const UserInfo = () => {
  const { t } = useTranslation(); // Hook to get the translation function

  const UserAccountData = [
    {
      id: 1,
      name: "Mizanur Rahman",
      business: "Transport Business",
      phone: "0186 444 5688",
      address: "Panchalia Bazar, Solanga, Sirajganj.",
      totalOffers: "65",
      purchasedVehicles: "9",
    },
  ];

  return (
    <div className="flex items-start gap-3 flex-col-reverse sm:flex-row justify-between ">
      <div className="flex flex-col w-full gap-7 ">
        {UserAccountData.map((user, id) => (
          <div className="flex flex-col gap-10" key={id}>
            <div className="flex flex-col gap-2">
              <h2 className="text-[32px] font-bold text-[#1F1F1F]">
                {user?.name}
              </h2>
              <p className="text-[18px] font-medium text-[#1F1F1F]">
                {t("user_info.business")}: {user?.business}
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="max-w-max flex items-center gap-2 w-full">
                <div className="max-w-max">
                  <LuPhoneCall className="text-[16px] text-[#111827]" />
                </div>
                <p className="text-[#38465A] font-medium text-[12px] xl:text-[16px]">
                  {t("user_info.phone")}: {user?.phone}
                </p>
              </div>
              <p className="text-[16px] text-[#38465A] font-medium">
                <div className="max-w-max flex gap-2">
                  <SlLocationPin className="text-[15px] lg:text-[20px] text-[#111827]" />
                  {t("user_info.address")}: {user?.address}
                </div>
              </p>
            </div>
          </div>
        ))}
        <div className="max-w-max">
          <button className="flex gap-2 items-center py-3 px-4 rounded-[12px] bg-[#F3F4F6]">
            <BiEditAlt className="text-[16px]" />
            <p className="text-[14px] font-medium">
              {t("user_info.edit_profile")}
            </p>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-2 sm:max-w-max  lg:max-w-[370px]  w-full">
        <div className="sm:max-w-[180px] bg-[#F3F4F6] p-3 rounded-[12px] md:gap-2 flex flex-col w-full">
          <p className="text-[26px] md:text-[32px] text-[#1F1F1F] font-semibold">
            {UserAccountData[0]?.totalOffers}
          </p>
          <h2 className="text-[14px] font-medium text-[#1F1F1F]">
            {t("user_info.total_offers")}
          </h2>
        </div>
        <div className="sm:max-w-[180px] bg-[#F3F4F6] p-3 rounded-[12px] md:gap-2 flex flex-col w-full">
          <p className="text-[26px] md:text-[32px] text-[#1F1F1F] font-semibold">
            {UserAccountData[0]?.purchasedVehicles}
          </p>
          <h2 className="text-[14px] font-medium text-[#1F1F1F]">
            {t("user_info.purchased_vehicles")}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
