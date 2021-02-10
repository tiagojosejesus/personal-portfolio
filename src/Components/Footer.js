import React from "react";
import { BiMailSend } from "react-icons/bi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Style/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerInfo">
        <a href="https://twitter.com/tiagojosejesus">
          <FaTwitter />
        </a>
      </div>
      <div className="footerInfo">
        <a href="mailto: tiagojosepjesus@gmail.com">
          <BiMailSend />
        </a>
      </div>
      <div className="footerInfo">
        <a href="https://www.linkedin.com/in/tiagojosejesus/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
