import React from "react";
import "./Style/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="title">Contact</div>
      <div className="contactForm">
        <form className="form">
          <label name="firstName" className="contactLabel">
            First Name
          </label>
          <input type="text" className="contactInput" />
          <label name="lastName" className="contactLabel">
            Last Name
          </label>
          <input type="text" className="contactInput" />
          <label className="contactLabel">Message</label>
          <textarea className="contactTextarea" placeholder="Message" />
          <button type="submit" className="contactSubmit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
