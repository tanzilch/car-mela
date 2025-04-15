import { Link, useLocation, matchPath } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  // Define breadcrumb mapping
  const breadcrumbMap = {
    "/": "Home",
    "/product-details/:id": "Product Details",
    "/all-vehicles": "All Vehicles",
    "/account-info": "Account Info",
    "/mahindra": "Mahindra Vehicles",
    "/dongfeng": "Dongfeng Vehicles",
    "/eicher": "Eicher Vehicles",
    "/login": "Login",
    "/help": "Help",
    "/offers": "Offers",
  };

  // Return null if the route is Home
  if (location.pathname === "/") {
    return null;
  }

  // Generate breadcrumbs dynamically
  const breadcrumbs = [];
  const pathSegments = location.pathname.split("/").filter(Boolean);

  let currentPath = "";
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;

    // Match dynamic routes like '/product-details/:id'
    const matchedPath = Object.keys(breadcrumbMap).find((route) =>
      matchPath(route, currentPath)
    );

    breadcrumbs.push({
      label: breadcrumbMap[matchedPath] || segment,
      path: currentPath,
    });
  });

  // Add the Home route as the first breadcrumb
  breadcrumbs.unshift({
    label: breadcrumbMap["/"],
    path: "/",
  });

  return (
    <nav className="breadcrumb">
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.path}>
          {index !== breadcrumbs.length - 1 ? (
            <Link to={breadcrumb.path} className="breadcrumb-link">
              {breadcrumb.label}
            </Link>
          ) : (
            <span className="breadcrumb-current">{breadcrumb.label}</span>
          )}
          {index !== breadcrumbs.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
