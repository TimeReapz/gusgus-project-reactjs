import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AuthProvider } from "./components/pages/authentication/Auth";
import Footer from "./components/_layout/Footer";
import MenuTop from "./components/_layout/MenuTop";
import MenuLeft from "./components/_layout/MenuLeft";

import Home from "./components/pages/home/Home";
import Dashboard from "./components/pages/dashboard/Index";
import LogIn from "./components/pages/authentication/LogIn";
import SignUp from "./components/pages/authentication/SignUp";
import ManageUser from "./components/pages/manage-users/Index";
import ManageUserCreate from "./components/pages/manage-users/Create";
import ManageProduct from "./components/pages/manage-products/Index";
import ManageProductCreate from "./components/pages/manage-products/Create";
import ManageOrderSchedule from "./components/pages/manage-orderschedule/Index";
import ManageOrderScheduleCreate from "./components/pages/manage-orderschedule/Create";
import ManageOrderScheduleMyOrderSchedule from "./components/pages/manage-orderschedule/MyOrderSchedule";

import DashboardMonthlyCustomer from "./components/pages/dashboard/MonthlyCustomer";
import DashboardMonthlyOverall from "./components/pages/dashboard/MonthlyOverall";

import ManageConfig from "./components/pages/manage-config/Index";

// const routes = [
//   {
//     path: "/",
//     exact: true,
//     component: Home,
//   },
//   {
//     path: "/manageuser",
//     component: ManageUser,
//   },
//   {
//     path: "/manageuser-create/:id",
//     component: ManageUserCreate,
//   },
//   {
//     path: "/manageuser-create",
//     component: ManageUserCreate,
//   },
//   {
//     path: "/manageproduct",
//     component: ManageProduct,
//   },
//   {
//     path: "/manageproduct-create/:id",
//     component: ManageProductCreate,
//   },
//   {
//     path: "/manageproduct-create",
//     component: ManageProductCreate,
//   },
//   {
//     path: "/manageorder-schedule",
//     component: ManageOrderSchedule,
//   },
//   {
//     path: "/manageorder-schedule-create/:id",
//     component: ManageOrderScheduleCreate,
//   },
//   {
//     path: "/manageorder-schedule-create",
//     component: ManageOrderScheduleCreate,
//   },
// ];

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <MenuTop />
        <MenuLeft />

        <div className="content-wrapper">
          <Switch>
            <Redirect exact from="/" to="/my-orderschedule" />
            <Route exact path="/home" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route
              exact
              path="/dashboard-monthly-customer"
              component={DashboardMonthlyCustomer}
            />
            <Route
              exact
              path="/dashboard-monthly-overall"
              component={DashboardMonthlyOverall}
            />
            {/* manageuser */}
            <Route exact path="/manageuser" component={ManageUser} />
            <Route
              exact
              path="/manageuser/create"
              component={ManageUserCreate}
            />
            <Route exact path="/manageuser/:id" component={ManageUserCreate} />
            {/* manageproduct */}
            <Route exact path="/manageproduct" component={ManageProduct} />
            <Route
              exact
              path="/manageproduct/create"
              component={ManageProductCreate}
            />
            <Route
              exact
              path="/manageproduct/:id"
              component={ManageProductCreate}
            />
            {/* manageorder-schedule */}
            <Route
              exact
              path="/manageorder-schedule"
              component={ManageOrderSchedule}
            />
            <Route
              exact
              path="/my-orderschedule"
              component={ManageOrderScheduleMyOrderSchedule}
            />
            <Route
              exact
              path="/manageorder-schedule/create"
              component={ManageOrderScheduleCreate}
            />
            <Route
              exact
              path="/manageorder-schedule/:id"
              component={ManageOrderScheduleCreate}
            />
            <Route exact path="/manageconfig" component={ManageConfig} />

            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

// function RouteWithSubRoutes(route) {
//   return (
//     <Route
//       path={route.path}
//       render={(props) => (
//         // pass the sub-routes down to keep nesting
//         <route.component {...props} routes={route.routes} />
//       )}
//     />
//   );
// }
