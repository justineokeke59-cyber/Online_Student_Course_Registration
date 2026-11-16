import React from "react";
import { useState } from "react";

const emptyMessage = { fullName: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyMessage);
  const [feedback, setFeedback] = useState("");

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setFeedback("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (Object.values(form).some((value) => !value.trim())) {
      setFeedback("Please complete all fields before submitting.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setFeedback("Please enter a valid email address.");
      return;
    }
    setFeedback("Thank you. Your demonstration message has been received.");
    setForm(emptyMessage);
  }

  return (
    <section className="page-section">
      <div className="page-intro"><p className="eyebrow">GET IN TOUCH</p><h1>How can we help?</h1><p>Send a message about the portal or the course registration process.</p></div>
      <div className="contact-layout">
        <div className="contact-details">
          <p className="eyebrow">CONTACT INFORMATION</p><h2>We are here to help.</h2>
          <p className="contact-copy">Use the sample contact details below for this project demonstration.</p>
          <div className="contact-detail"><span className="detail-label">EMAIL</span><a href="mailto:info@campusenroll.example">info@campusenroll.example</a></div>
          <div className="contact-detail"><span className="detail-label">TELEPHONE</span><a href="tel:+2348000000000">+234 800 000 0000</a></div>
          <div className="contact-detail"><span className="detail-label">OFFICE HOURS</span><span>Monday – Friday, 9:00 AM – 4:00 PM</span></div>
        </div>
        <form className="form-panel contact-form" onSubmit={handleSubmit}>
          <h2>Send us a message</h2>
          {feedback && <div className={feedback.startsWith("Thank") ? "success-message" : "error-banner"} role="status">{feedback}</div>}
          <div className="form-group"><label htmlFor="contactName">Full name</label><input id="contactName" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Your name" /></div>
          <div className="form-group"><label htmlFor="contactEmail">Email address</label><input id="contactEmail" type="email" name="email" value={form.email} onChange={handleChange} placeholder="name@example.com" /></div>
          <div className="form-group"><label htmlFor="subject">Subject</label><input id="subject" name="subject" value={form.subject} onChange={handleChange} placeholder="How can we help?" /></div>
          <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Write your message..." /></div>
          <button type="submit" className="button">Send message <span>→</span></button>
        </form>
      </div>
    </section>
  );
}
