import React from "react";
import { Link } from "react-router-dom";

export default function Home({ selectedCount }) {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">STUDENT COURSE PORTAL</p>
            <h1>Plan your semester. <span>Move forward.</span></h1>
            <p className="hero-text">
              Find your courses, make your selections and organise your academic
              registration in one simple place.
            </p>
            <div className="hero-actions">
              <Link to="/courses" className="button">Explore courses <span aria-hidden="true">→</span></Link>
              <Link to="/about" className="text-link light-link">Learn about us</Link>
            </div>
            <div className="hero-note">
              <span className="status-dot" /> Course registration made clearer
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-topline"><span>YOUR SEMESTER</span><span>01 / 2026</span></div>
            <div className="panel-number">{String(selectedCount).padStart(2, "0")}</div>
            <h2>Courses selected</h2>
            <p>Your course choices are saved in this browser while you work.</p>
            <Link to="/registration" className="panel-link">View registration summary <span>↗</span></Link>
            <div className="panel-rule" />
            <div className="panel-bottom"><span>CampusEnroll</span><span>STUDENT PORTAL</span></div>
          </div>
        </div>
      </section>

      <section className="section section-narrow">
        <div className="section-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>Registration, in three steps.</h2>
          <p>Use the portal to organise your course choices before completing your details.</p>
        </div>
        <div className="steps-grid">
          <div className="step-item"><span className="step-number">01</span><h3>Explore courses</h3><p>Browse available courses and review their descriptions and credit units.</p></div>
          <div className="step-item"><span className="step-number">02</span><h3>Make selections</h3><p>Add or remove courses and keep track of your selected units.</p></div>
          <div className="step-item"><span className="step-number">03</span><h3>Submit details</h3><p>Complete the registration form and review your course summary.</p></div>
        </div>
      </section>

      <section className="cta-band">
        <div><p className="eyebrow">READY TO BEGIN?</p><h2>Build your course list today.</h2></div>
        <Link to="/courses" className="button button-light">View available courses <span>→</span></Link>
      </section>
    </>
  );
}
