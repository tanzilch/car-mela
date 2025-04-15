import  { useState } from "react";
import { IoHelpCircleOutline, IoMailOutline } from "react-icons/io5";
import { LuPhoneCall, LuClock3 } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaHomeSolid } from "react-icons/lia";
import { PiCarLight } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TopNavbarItems = [
  {
    id: 1,
    text: "navbar.home",
    link: "/",
  },
  {
    id: 2,
    text: "navbar.allVehicles",
    link: "/all-vehicles",
  },
  {
    id: 3,
    text: "navbar.offers",
    link: "/offers",
  },
  {
    id: 4,
    text: "navbar.help",
    link: "/help",
    icon: <IoHelpCircleOutline className="text-[20px] md:ml-1 " />,
  },
];

const navbarItems = [
  {
    id: 1,
    text: "navbar.home",
    icon: <LiaHomeSolid className="text-[24px]" />,
    link: "/",
  },
  {
    id: 2,
    text: "navbar.allVehicles",
    icon: <PiCarLight className="text-[24px]" />,
    link: "/all-vehicles",
  },
  {
    id: 3,
    text: "navbar.offers",
    icon: <BiSolidOffer className="text-[24px]" />,
    link: "/offers",
  },
  {
    id: 4,
    text: "navbar.help",
    link: "/help",
    icon: <IoHelpCircleOutline className="text-[20px] md:ml-3 mt-[2px]" />,
  },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [activeMenu, setActiveMenu] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const HandleMenuClicked = (link) => {
    setActiveMenu(link);
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "bn" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Top Navbar Content */}
      <div className="sm:flex container hidden justify-between pt-[14px]">
        <div className="flex gap-1 max-w-max items-center">
          <IoMailOutline className="text-[20px]" />
          <p className="text-[16px] font-medium text-[#111827]">
            {t("navbar.email")}
          </p>
        </div>
        <div className="max-w-[300px] xl:max-w-[400px] w-full flex justify-between items-center">
          <div className="max-w-[170px] xl:max-w-[228px] w-full flex justify-between items-center">
            <h1 className="text-[#38465A] text-[10px] xl:text-[12px] font-medium">
              {t("navbar.followUs")}
            </h1>
            <div className="max-w-[90px] lg:max-w-[112px] flex justify-between items-center w-full">
              <div className="max-w-[24px] hover:cursor-pointer w-full">
                <img
                  src="/assets/icons/facebook.svg"
                  alt="facebook"
                  className="max-w-[24px]"
                />
              </div>
              <div className="max-w-[24px] hover:cursor-pointer w-full">
                <img
                  src="/assets/icons/insta.svg"
                  alt="instagram"
                  className="max-w-[24px]"
                />
              </div>
              <div className="max-w-[24px] hover:cursor-pointer w-full">
                <img
                  src="/assets/icons/twitter.svg"
                  alt="twitter"
                  className="max-w-[24px]"
                />
              </div>
            </div>
          </div>
         
          <div className="max-w-max bg-[#e5e7eb] rounded-[10px] flex">
            <div
              onClick={() => i18n.changeLanguage("bn")}
              className={`max-w-max text-[14px] xl:text-[16px] font-medium cursor-pointer px-2 py-1 rounded ${
                i18n.language === "bn"
                  ? "bg-black text-white rounded-[10px] py-1 px-2"
                  : "bg-transparent text-black"
              }`}
            >
              বাংলা
            </div>
            <div
              onClick={() => i18n.changeLanguage("en")}
              className={`max-w-max text-[14px] xl:text-[16px] font-medium cursor-pointer px-2 py-1 rounded ${
                i18n.language === "en"
                  ? "bg-black text-white rounded-[10px] py-1 px-2"
                  : "bg-transparent text-black"
              }`}
            >
              English
            </div>
          </div>
        </div>
      </div>

      <hr className="h-[1px] hidden sm:flex border-[#E5E7EB] border-[1px]" />

      {/* Main Navbar Content */}
      <div className="flex justify-between py-4 items-center container">
        <div className="flex max-w-max gap-10 lg:max-w-[580px] items-center justify-between w-full">
          <div className="max-w-[80px] sm:max-w-[100px] lg:max-w-[155px] w-full">
            <img src="/assets/images/logo.svg" alt="company-logo" />
          </div>
          <div className="xl:max-w-[380px]  hidden lg:flex w-full">
            <ul className="items-center gap-10 flex">
              {TopNavbarItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className="text-[#525560] font-medium flex items-center text-[20px] sm:text-[13px] md:text-[16px] lg:text-[16px]"
                  >
                    {t(item.text)}
                    {item.icon && item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-max xl:max-w-[465px] gap-3 flex lg:justify-between items-center lg:w-full">
          <div className="max-w-max xl:max-w-[140px] flex items-center gap-2 lg:w-full">
            <div className="max-w-max">
              <LuPhoneCall className="text-[24px] lg:text-[32px] text-[#111827]" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[#38465A] text-[10px] lg:text-[12px] font-medium">
                {t("navbar.callNow")}
              </h2>
              <p className="text-[#111827] font-medium text-[12px] xl:text-[16px]">
                02 9130895
              </p>
            </div>
          </div>
          <div className="lg:max-w-[300px] max-w-max lg:w-full gap-2 flex items-center justify-between">
            <div className="hidden max-w-max lg:flex items-center gap-2">
              <LuClock3 className="text-[28px] xl:text-[32px]" />
              <div className="flex flex-col">
                <h2 className="text-[12px] font-medium text-[#38465A]">
                  {t("navbar.sunToThu")}
                </h2>
                <p className="text-[16px] font-medium text-[#111827]">
                  {t("navbar.businessHours")}
                </p>
              </div>
            </div>

            <div className="max-w-max hidden lg:flex">
              <FiSearch className="text-[28px] text-[#111827]" />
            </div>

            <Link to={"/account-info"}>
              <div className="flex gap-2 items-center">
                <div className="max-w-max rounded-full bg-[#F3F4F6] p-2 gap-3 flex items-center justify-center">
                  <FaRegUser className="text-[18px] md:text-[20px] xl:text-[22px]" />
                </div>
                <span className="text-[14px] xl:text-[16px] font-medium">
                  {t("navbar.account")}
                </span>
              </div>
            </Link>
            <RxHamburgerMenu
              onClick={toggleSidebar}
              className="lg:hidden text-[24px] text-[#2A3649]"
            />
          </div>
        </div>
        <div
          className={`fixed lg:hidden top-0 left-0 h-full w-full bg-white z-50 shadow-md transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <div className="max-w-[90px] sm:max-w-[120px] w-full">
              <img src="/assets/images/logo.svg" alt="company-logo" />
            </div>
            <button onClick={toggleSidebar} className="text-2xl">
              ✕
            </button>
          </div>
          <div className="flex flex-col bg-gray-50 h-full gap-10 p-4">
            <div className="bg-[#e5e7eb] max-w-[400px] mx-auto w-full grid grid-cols-2 rounded-[10px]">
              <div
                onClick={toggleLanguage}
                className={`text-[14px] xl:text-[16px] font-medium cursor-pointer text-center px-3 py-2 rounded ${
                  i18n.language === "bn"
                    ? "bg-black text-white rounded-[10px] py-1 px-2"
                    : "bg-transparent text-black"
                }`}
              >
                বাংলা
              </div>
              <div
                onClick={toggleLanguage}
                className={`text-[14px] xl:text-[16px] font-medium cursor-pointer px-3 py-2 text-center rounded ${
                  i18n.language === "en"
                    ? "bg-black text-white rounded-[10px] py-1 px-2"
                    : "bg-transparent text-black"
                }`}
              >
                English
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex items-center gap-2 w-[50%]">
                <div className="max-w-max">
                  <LuPhoneCall className="text-[24px] lg:text-[32px] text-[#111827]" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[#38465A] text-[14px] font-medium">
                    {t("navbar.callNow")}
                  </h2>
                  <p className="text-[#111827] font-medium text-[16px]">
                    02 9130895
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 w-[50%]">
                <LuClock3 className="text-[28px] xl:text-[32px]" />
                <div className="flex flex-col">
                  <h2 className="text-[12px] font-medium text-[#38465A]">
                    {t("navbar.sunToThu")}
                  </h2>
                  <p className="text-[#111827] font-medium text-[16px]">
                    {t("navbar.businessHours")}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-1 max-w-max items-center">
              <IoMailOutline className="text-[24px]" />
              <p className="text-[18px] font-medium text-[#111827]">
                {t("navbar.email")}
              </p>
            </div>
            <div className="max-w-[170px] xl:max-w-[228px] w-full flex justify-between items-center">
              <h1 className="text-[#38465A] text-[14px] xl:text-[16px] font-medium">
                {t("navbar.followUs")}
              </h1>
              <div className="max-w-[90px] lg:max-w-[112px] flex justify-between items-center w-full">
                <div className="max-w-[24px] hover:cursor-pointer w-full">
                  <img
                    src="/assets/icons/facebook.svg"
                    alt="facebook"
                    className="max-w-[24px]"
                  />
                </div>
                <div className="max-w-[24px] hover:cursor-pointer w-full">
                  <img
                    src="/assets/icons/insta.svg"
                    alt="instagram"
                    className="max-w-[24px]"
                  />
                </div>
                <div className="max-w-[24px] hover:cursor-pointer w-full">
                  <img
                    src="/assets/icons/twitter.svg"
                    alt="twitter"
                    className="max-w-[24px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Navbar */}
      <ul className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 py-2 z-10 flex justify-around items-center">
        {navbarItems.map((item) => (
          <li
            key={item.id}
            onClick={() => HandleMenuClicked(item.link)}
            className="text-center"
          >
            <Link
              to={item.link}
              className={`${
                activeMenu === item.link ? "text-[#ED1C25]" : "text-[#525560]"
              } flex-col font-medium flex gap-1 justify-center items-center text-[14px] sm:text-[13px] md:text-[16px]`}
            >
              {item.icon && item.icon}
              {t(item.text)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
