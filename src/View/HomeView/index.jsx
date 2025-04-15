import VehicleCategory from "../../components/Shared/vehicleCategory";
import VehiclesTypes from "../../components/Shared/vehicleTypes/vehiclesTypes";
import AboutUs from "./aboutUs";
import BestDealer from "./bestDealer";
import CardDetail from "./cardDetail";
import Certified from "./certified";
import Hero from "./hero";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <CardDetail />
      <VehiclesTypes />
      <div className="flex flex-col">
        <VehicleCategory title={"pickup"} />
        <VehicleCategory title={"truck"} />
        <VehicleCategory title={"humanHauler"} />
        <VehicleCategory title={"bus"} />
        <VehicleCategory title={"threeWheeler"} />
        <Certified/>
        <BestDealer/>
        <div className="bg-[#F3F4F6]">
        <AboutUs/>
        </div>
      </div>
    </div>
  );
};

export default Home;
