import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="main-footer p-0">
        <nav className="navbar navbar-expand justify-content-center text-center p-0 pt-1">
          <ul className="navbar-nav nav-footer w-100">
            <li className="nav-item w-100">
              <NavLink
                to="/my-orderschedule"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fa fa-truck"></i>
                <div>จัดส่ง</div>
              </NavLink>
            </li>
            <li className="nav-item w-100">
              <NavLink
                to="/manageorder-schedule"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fa fa-shopping-bag"></i>
                <div>รายการ</div>
              </NavLink>
            </li>
            <li className="nav-item w-100">
              <NavLink
                to="/manageuser"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fa fa-address-book"></i>
                <div>ลูกค้า</div>
              </NavLink>
            </li>
            <li className="nav-item w-100">
              <NavLink
                to="/manageproduct"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fa fa-fan"></i>
                <div>สินค้า</div>
              </NavLink>
            </li>
            <li className="nav-item w-100">
              <NavLink
                to="/dashboard"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fa fa-layer-group"></i>
                <div>ภาพรวม</div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
