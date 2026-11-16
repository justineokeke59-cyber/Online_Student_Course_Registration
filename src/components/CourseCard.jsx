import React from "react";
export default function CourseCard({ course, selected, onToggle }) {
  return (
    <article className={`course-card ${selected ? "course-card-selected" : ""}`}>
      <div className="course-card-top">
        <span className="course-code">{course.code}</span>
        <span className="course-tag">{course.tag}</span>
      </div>
      <div>
        <p className="eyebrow">{course.department} · {course.level}</p>
        <h3>{course.title}</h3>
        <p className="course-description">{course.description}</p>
      </div>
      <div className="course-card-bottom">
        <span className="unit-count">{course.units} credit units</span>
        <button
          type="button"
          className={selected ? "button button-outline button-small" : "button button-small"}
          onClick={() => onToggle(course)}
        >
          {selected ? "Remove course" : "Select course"}
        </button>
      </div>
    </article>
  );
}
