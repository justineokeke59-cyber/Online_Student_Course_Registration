import React from "react";
import { useMemo, useState } from "react";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function Courses({ registeredCourses, onToggleCourse }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [department, setDepartment] = useState("All departments");

  const departments = ["All departments", ...new Set(courses.map((course) => course.department))];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = `${course.code} ${course.title} ${course.description}`
        .toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = department === "All departments" || course.department === department;
      return matchesSearch && matchesDepartment;
    });
  }, [searchTerm, department]);

  return (
    <section className="page-section">
      <div className="page-intro page-intro-row">
        <div><p className="eyebrow">COURSE CATALOGUE</p><h1>Explore available courses.</h1><p>Review course details and select the courses you plan to register for.</p></div>
        <div className="selection-counter"><strong>{registeredCourses.length}</strong><span>selected</span></div>
      </div>
      <div className="filter-bar">
        <label className="search-field">
          <span className="sr-only">Search courses</span>
          <span aria-hidden="true">⌕</span>
          <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search by course code or title" />
        </label>
        <label className="select-field">
          <span className="sr-only">Filter by department</span>
          <select value={department} onChange={(event) => setDepartment(event.target.value)}>
            {departments.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <div className="course-grid">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.code}
            course={course}
            selected={registeredCourses.some((item) => item.code === course.code)}
            onToggle={onToggleCourse}
          />
        ))}
      </div>
      {filteredCourses.length === 0 && <div className="empty-state"><h3>No courses found</h3><p>Try another search term or department.</p></div>}
      <p className="catalogue-footnote">Showing {filteredCourses.length} of {courses.length} sample courses. Confirm course eligibility and credit limits with your institution.</p>
    </section>
  );
}
