import React from "react";
export default function About() {
  return (
    <section className="page-section">
      <div className="page-intro">
        <p className="eyebrow">ABOUT CAMPUSENROLL</p>
        <h1>Helping students make informed course choices.</h1>
        <p>CampusEnroll is a demonstration student portal designed to make course selection and registration easier to understand and manage.</p>
      </div>
      <div className="about-layout">
        <div className="about-main">
          <p className="eyebrow">OUR BACKGROUND</p>
          <h2>A more organised registration experience.</h2>
          <p>Course registration can involve checking course information, confirming credit units and entering student details. CampusEnroll brings these basic activities together in one responsive interface.</p>
          <p>This project was created as an academic demonstration of how React can be used to build reusable, interactive web applications.</p>
        </div>
        <div className="about-aside">
          <div><span className="aside-index">01</span><h3>Our mission</h3><p>Make course information and selection easier for students to navigate.</p></div>
          <div><span className="aside-index">02</span><h3>Our vision</h3><p>Support a clear, accessible and well-organised digital student experience.</p></div>
          <div><span className="aside-index">03</span><h3>Our objective</h3><p>Demonstrate practical React development through a useful student portal.</p></div>
        </div>
      </div>
      <div className="notice"><strong>Project note</strong><p>CampusEnroll is a student project prototype. It is not connected to a real institution or official academic database.</p></div>
    </section>
  );
}
