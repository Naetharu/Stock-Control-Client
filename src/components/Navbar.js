import React from "react";
import { Link } from "@reach/router";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="topNavBar">
        <div className="brand">Stock Control</div>
        <nav className="topNav">
          <ul className="topNavItems">
            <li className="topNavItem">
              <Link to="dashboard">Dashboard</Link>
            </li>
            <li className="topNavItem">
              <Link to="stock">Stock</Link>
            </li>
            <li className="topNavItem">
              <Link to="table">Table</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
