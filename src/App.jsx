import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";

export default function App() {
  const [registeredCourses, setRegisteredCourses] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("campusEnrollCourses")) || [];
    } catch {
      return [];
    }
  });
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("campusEnrollCourses", JSON.stringify(registeredCourses));
  }, [registeredCourses]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  function toggleCourse(course) {
    setRegisteredCourses((current) => {
      const exists = current.some((item) => item.code === course.code);
      return exists
        ? current.filter((item) => item.code !== course.code)
        : [...current, course];
    });
  }

  return (
    <div className="app-shell">
      <Navbar selectedCount={registeredCourses.length} />
      <main>
        <Routes>
          <Route path="/" element={<Home selectedCount={registeredCourses.length} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/courses"
            element={
              <Courses
                registeredCourses={registeredCourses}
                onToggleCourse={toggleCourse}
              />
            }
          />
          <Route
            path="/registration"
            element={<Registration registeredCourses={registeredCourses} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home selectedCount={registeredCourses.length} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
