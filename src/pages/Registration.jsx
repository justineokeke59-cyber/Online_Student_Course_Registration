import React from "react";
import { useState } from "react";

const initialForm = { fullName: "", email: "", matricNumber: "", department: "", level: "" };

export default function Registration({ registeredCourses }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const totalUnits = registeredCourses.reduce((sum, course) => sum + course.units, 0);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSuccess("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!form.matricNumber.trim()) nextErrors.matricNumber = "Please enter your matriculation number.";
    if (!form.department) nextErrors.department = "Select your department.";
    if (!form.level) nextErrors.level = "Select your level.";
    if (registeredCourses.length === 0) nextErrors.courses = "Please select at least one course from the Courses page.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      const record = { ...form, courses: registeredCourses, totalUnits, submittedAt: new Date().toISOString() };
      const previous = JSON.parse(localStorage.getItem("campusEnrollSubmissions") || "[]");
      localStorage.setItem("campusEnrollSubmissions", JSON.stringify([...previous, record]));
      setSuccess("Your demonstration registration has been submitted successfully in this browser.");
      setForm(initialForm);
    }
  }

  return (
    <section className="page-section">
      <div className="page-intro"><p className="eyebrow">STUDENT DETAILS</p><h1>Complete your registration.</h1><p>Enter your details and review your selected courses before submitting.</p></div>
      <div className="registration-layout">
        <form className="form-panel" onSubmit={handleSubmit} noValidate>
          <div className="form-heading"><h2>Student information</h2><p>Fields marked with * are required.</p></div>
          {success && <div className="success-message" role="status">{success}</div>}
          <div className="form-grid">
            <div className="form-group full-width"><label htmlFor="fullName">Full name *</label><input id="fullName" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Enter your full name" />{errors.fullName && <small className="error-text">{errors.fullName}</small>}</div>
            <div className="form-group"><label htmlFor="email">Email address *</label><input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="name@example.com" />{errors.email && <small className="error-text">{errors.email}</small>}</div>
            <div className="form-group"><label htmlFor="matricNumber">Matriculation number *</label><input id="matricNumber" name="matricNumber" value={form.matricNumber} onChange={handleChange} placeholder="e.g. 2026/CSC/001" />{errors.matricNumber && <small className="error-text">{errors.matricNumber}</small>}</div>
            <div className="form-group"><label htmlFor="department">Department *</label><select id="department" name="department" value={form.department} onChange={handleChange}><option value="">Select department</option><option>Computer Science</option><option>Computer Engineering</option><option>Electrical Engineering</option><option>Mechanical Engineering</option><option>Business Administration</option></select>{errors.department && <small className="error-text">{errors.department}</small>}</div>
            <div className="form-group"><label htmlFor="level">Academic level *</label><select id="level" name="level" value={form.level} onChange={handleChange}><option value="">Select level</option><option>100 Level</option><option>200 Level</option><option>300 Level</option><option>400 Level</option><option>500 Level</option></select>{errors.level && <small className="error-text">{errors.level}</small>}</div>
          </div>
          {errors.courses && <p className="error-text course-error">{errors.courses}</p>}
          <button className="button form-submit" type="submit">Submit registration <span>→</span></button>
          <p className="form-disclaimer">Demonstration only: this form saves its submission in your browser and does not send data to a school.</p>
        </form>
        <aside className="summary-panel">
          <p className="eyebrow">YOUR SELECTION</p><h2>Course summary</h2>
          {registeredCourses.length === 0 ? <div className="summary-empty"><p>You have not selected any courses yet.</p><a href="/courses">Browse courses →</a></div> : (
            <ul className="summary-list">{registeredCourses.map((course) => <li key={course.code}><div><strong>{course.code}</strong><span>{course.title}</span></div><b>{course.units} units</b></li>)}</ul>
          )}
          <div className="summary-total"><span>Total selected courses</span><strong>{registeredCourses.length}</strong></div>
          <div className="summary-total"><span>Total credit units</span><strong>{totalUnits}</strong></div>
        </aside>
      </div>
    </section>
  );
}
