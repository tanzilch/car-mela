import { Routes, Route } from "react-router-dom";
import { getRoutes } from "../utils/routes";
import Breadcrumb from "../components/breadcrumb";

const Index = () => {
  const routes = getRoutes();

  return (
    <div>
      <div className="container mt-4">
        <Breadcrumb />
      </div>
      <Routes>
        {routes.map(({ route, component: Component }, index) => (
          <Route key={index} path={route} element={<Component />} />
        ))}
      </Routes>
    </div>
  );
};

export default Index;
