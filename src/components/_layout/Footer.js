import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer class="main-footer p-0">
        <div className="text-center">
          <nav className="navbar navbar-expand justify-content-center">
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
                  <i class="fa fa-address-book"></i>
                  <div>ลูกค้า</div>
                </NavLink>
              </li>
              <li className="nav-item w-100">
                <NavLink
                  to="/manageproduct"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i class="fa fa-fan"></i>
                  <div>สินค้า</div>
                </NavLink>
              </li>
              <li className="nav-item w-100">
                <NavLink
                  to="/dashboard"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i class="fa fa-layer-group"></i>
                  <div>ภาพรวม</div>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
