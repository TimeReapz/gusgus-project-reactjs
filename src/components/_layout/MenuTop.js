import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function MenuTop() {
  return (
    <div>
      <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              className="img img-size-32 mx-2"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <span className="brand-text font-weight-light">Gusgus</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* Left navbar links */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/manageorder-schedule/my-order"
                  className="nav-link"
                  activeClassName="active"
                >
                  จัดส่ง
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/manageorder-schedule"
                  className="nav-link"
                  activeClassName="active"
                >
                  รายการจัดส่ง
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/manageuser"
                  className="nav-link"
                  activeClassName="active"
                >
                  รายชื่อลูกค้า
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/manageproduct"
                  className="nav-link"
                  activeClassName="active"
                >
                  รายชื่อสินค้า
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
