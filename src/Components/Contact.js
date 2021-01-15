import React from "react";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <div>
        <BiMailSend />
        <h4>tiagojosepjesus@gmail.com</h4>
      </div>
      <div>
        <FaLinkedin />
        <h4>
          <a href="https://www.linkedin.com/in/tiagojosejesus/">
            Tiago José Jesus
          </a>
        </h4>
      </div>
      <div>
        <BiPhoneCall />
        <h4>(+351)914491938</h4>
      </div>
    </div>
  );
}

export default Contact;
