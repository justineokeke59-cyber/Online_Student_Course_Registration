import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Courses", "/courses"],
  ["Registration", "/registration"],
  ["Contact", "/contact"]
];

export default function Navbar({ selectedCount }) {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <NavLink to="/" className="brand" aria-label="CampusEnroll home">
          <span className="brand-mark">C</span>
          <span>Campus<span className="brand-light">Enroll</span></span>
        </NavLink>
        <nav className="main-nav" aria-label="Main navigation">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              {label}
              {label === "Registration" && selectedCount > 0 && (
                <span className="nav-count">{selectedCount}</span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
