import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../pages/authentication/Auth";
import { firebase } from "../../utils/firebase";

export default function MenuTop() {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-light navbar-white">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              href="/#"
              className="nav-link"
              data-widget="pushmenu"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <NavLink
              to="/my-orderschedule"
              className="nav-link"
              activeClassName="active"
            >
              จัดส่ง
            </NavLink>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <NavLink
              to="/manageorder-schedule"
              className="nav-link"
              activeClassName="active"
            >
              รายการจัดส่ง
            </NavLink>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <NavLink
              to="/manageuser"
              className="nav-link"
              activeClassName="active"
            >
              รายชื่อลูกค้า
            </NavLink>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <NavLink
              to="/manageproduct"
              className="nav-link"
              activeClassName="active"
            >
              รายชื่อสินค้า
            </NavLink>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <NavLink
              to="/dashboard"
              className="nav-link"
              activeClassName="active"
            >
              ภาพรวม
            </NavLink>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <NavLink
              to="/manageconfig"
              className="nav-link"
              activeClassName="active"
            >
              ตั้งค่า
            </NavLink>
          </li>
        </ul>
        <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
          <li className="nav-item">
            {currentUser ? (
              <NavLink
                to="/"
                onClick={() => firebase.auth().signOut()}
                className="nav-link"
                activeClassName="active"
              >
                Logout
              </NavLink>
            ) : (
              <NavLink to="/" className="nav-link" activeClassName="active">
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}
