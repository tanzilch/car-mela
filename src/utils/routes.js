import AccountInfo from "../View/AccountInfoView";
import AllVehicles from "../View/AllVehiclesView";
import DongfengVehicles from "../View/AllVehiclesView/dongfengVehicles";
import EicherVehicles from "../View/AllVehiclesView/eicherVehicles";
import MahindraVehicles from "../View/AllVehiclesView/mahindraVehicles";
import Faqs from "../View/helpView/help";
import Home from "../View/HomeView";
import LoginStepper from "../View/loginView/Login";
import Offers from "../View/OffersView";
import Stepper from "../View/productDetailsView/stepper";

const routes = [
  { name: "Home", route: "/", component: Home },
  {
    name: "Product Details",
    route: "/product-details/:id",
    component: Stepper,
  },
  { name: "All Vehicles", route: "/all-vehicles", component: AllVehicles },
  { name: "Account Info", route: "/account-info", component: AccountInfo },
  {
    name: "Mahindra Vehicles",
    route: "/mahindra",
    component: MahindraVehicles,
  },
  {
    name: "Dongfeng Vehicles",
    route: "/dongfeng",
    component: DongfengVehicles,
  },
  { name: "Eicher Vehicles", route: "/eicher", component: EicherVehicles },
  { name: "Login", route: "/login", component: LoginStepper },
  { name: "Help", route: "/help", component: Faqs },
  { name: "Offers", route: "/offers", component: Offers },
];

export const getRoutes = () => routes;
