import { useState, useEffect } from "react";
import UserInfo from "./userInfo";
import OfferList from "./offerList";
import PurchaseList from "./purchaseList";
import SaveList from "./saveList";
import { RiArrowRightFill } from "react-icons/ri";
import { LiaUserLockSolid } from "react-icons/lia";
import { HiOutlineBookmark } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";
import { LuSearchCheck } from "react-icons/lu";
import { useTranslation } from "react-i18next"; // Import t method

const AccountInfoData1 = [
  {
    id: 1,
    icon: <FaRegUser className="text-[20px]" />,
    titleKey: "account_info_data.accountInfoItems.accountInfo", // Use key for translation
    component: <UserInfo />,
  },
  {
    id: 2,
    icon: <LuSearchCheck className="text-[22px] rotate-45" />,
    titleKey: "account_info_data.accountInfoItems.offerList",
    component: <OfferList />,
  },
  {
    id: 3,
    icon: <LiaUserLockSolid className="text-[22px]" />,
    titleKey: "account_info_data.accountInfoItems.purchaseList",
    component: <PurchaseList />,
  },
  {
    id: 4,
    icon: <HiOutlineBookmark className="text-[22px]" />,
    titleKey: "account_info_data.accountInfoItems.savedList",
    component: <SaveList />,
  },
  // {
  //   id: 5,
  //   icon: "/assets/icons/logout.svg",
  //   titleKey: "account_info_data.accountInfoItems.logOut",
  //   component: <SaveList />,
  // },
];

const AccountInfo = () => {
  const [activeId, setActiveId] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const { t } = useTranslation(); // Use t method for translation

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 1024;
      setIsMobileView(isMobile);

      if (!isMobile && activeId === null) {
        setActiveId(AccountInfoData1[0].id);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [activeId]);

  const handleClick = (id) => {
    setActiveId(id);
  };

  const handleBack = () => {
    setActiveId(null);
  };

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-[24px] text-center lg:text-start md:text-[26px] xl:text-[32px] font-semibold">
          {t("account_info_data.accountInfo")} 
        </h1>
        <hr className="h-[1px] bg-[#E5E7EB]" />

        <div className="flex lg:min-h-screen gap-4">
       
          {!isMobileView || activeId === null ? (
            <div className="lg:max-w-[300px] w-full bg-gray-200 p-4 rounded-lg">
              <div className="flex flex-col gap-1 md:gap-3">
                {AccountInfoData1.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center py-3  md:px-8 gap-3 cursor-pointer rounded-lg ${
                      activeId === item.id
                        ? "bg-black text-white"
                        : "text-[#38465A]"
                    }`}
                    onClick={() => handleClick(item.id)}
                  >
                    {typeof item.icon === "string" ? (
                      <img
                        src={item.icon}
                        alt={item.titleKey}
                        className="w-[20px] h-[20px]"
                      />
                    ) : (
                      <span>{item.icon}</span> 
                    )}
                    <h2 className="text-[16px] md:text-[18px] font-medium">
                      {t(item.titleKey)} 
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {/* Content Area */}
          {(isMobileView && activeId !== null) || !isMobileView ? (
            <div className={`flex-1 ${isMobileView ? "w-full" : ""}`}>
              {isMobileView && activeId !== null && (
                <button className="mb-4 flex items-center gap-2 hover:underline">
                  <RiArrowRightFill
                    onClick={handleBack}
                    className="text-[20px] rotate-180 xl:text-[24px]"
                  />{" "}
                  <h2 className="text-[20px] font-semibold mb-2">
                    {t(
                      `account_info_data.accountInfoItems.${AccountInfoData1.find(
                        (item) => item.id === activeId
                      ).titleKey.split(".").pop()}`
                    )}
                  </h2>
                </button>
              )}
              {activeId ? (
                <div className="">
                  <div className="text-[16px]">
                    {
                      AccountInfoData1.find((item) => item.id === activeId)
                        .component
                    }
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
