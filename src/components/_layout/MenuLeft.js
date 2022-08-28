import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function MenuLeft() {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary">
        <a href="index3.html" className="brand-link">
          <img
            data-cfsrc="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            data-cfstyle="opacity: .8"
            style={{ opacity: ".8" }}
            src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png"
          />
          <span className="brand-text font-weight-light">Gusgus</span>
        </a>
        <div className="sidebar">
          <div className="user-panel pt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                data-cfsrc="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User "
                src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg"
              />
            </div>
            <div className="info">
              <a href="/#" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <NavLink
                  to="/my-orderschedule"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="fa fa-truck nav-icon" />
                  <p>จัดส่ง</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/manageorder-schedule"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="fa fa-shopping-bag nav-icon" />
                  <p>รายการจัดส่ง</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/manageuser"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="fa fa-address-book nav-icon" />
                  <p>รายชื่อลูกค้า</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/manageproduct"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="fa fa-fan nav-icon" />
                  <p>รายชื่อสินค้า</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/dashboard"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="fa fa-layer-group nav-icon" />
                  <p>ภาพรวม</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/dashboard-monthly-overall"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>สรุปรายเดือนทั้งหมด</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/dashboard-monthly-customer"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>สรุปรายเดือนรายลูกค้า</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/manageconfig"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="far fa-circle nav-icon" />
                  <p>ตั้งค่า</p>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
