import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/_layout/Header";
import Footer from "./components/_layout/Footer";
import MenuTop from "./components/_layout/MenuTop";
import Home from "./components/pages/home/Home";
import ManageUser from "./components/pages/manage-users/Index";
import ManageUserCreate from "./components/pages/manage-users/Create";
import ManageProduct from "./components/pages/manage-products/Index";
import ManageProductCreate from "./components/pages/manage-products/Create";
import ManageOrder from "./components/pages/manage-orders/Index";
import ManageOrderCreate from "./components/pages/manage-orders/Create";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/manageuser",
    component: ManageUser,
  },
  {
    path: "/manageuser-create/:id",
    component: ManageUserCreate,
  },
  {
    path: "/manageuser-create",
    component: ManageUserCreate,
  },
  {
    path: "/manageproduct",
    component: ManageProduct,
  },
  {
    path: "/manageproduct-create/:id",
    component: ManageProductCreate,
  },
  {
    path: "/manageproduct-create",
    component: ManageProductCreate,
  },
  {
    path: "/manageorder",
    component: ManageOrder,
  },
  {
    path: "/manageorder-create/:id",
    component: ManageOrderCreate,
  },
  {
    path: "/manageorder-create",
    component: ManageOrderCreate,
  },
];

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <MenuTop />

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
