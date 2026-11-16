import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link to="/" className="footer-brand">CampusEnroll</Link>
          <p>A simpler way to plan your krush journey.</p>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} CampusEnroll. Student project demonstration.</p>
      </div>
    </footer>
  );
}
