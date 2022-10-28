import React from "react";
import "../styles/Footer.css";
import I4GLogo from "./logo-svg-components/I4GLogo";
import ZuriLogo from "./logo-svg-components/ZuriLogo";

export default function Footer() {
  return (
    <div id="footer__div">
      <div id="separator__div"></div>
      <div id="logos__div">
        <span className="footer__logos" id="zuri__logo">
          <ZuriLogo />
        </span>
        <span className="footer__logos">
          <p id="hng__text">HNG Internship 9 Frontend Task</p>
        </span>
        <span className="footer__logos" id="i4g__logo">
          <I4GLogo />
        </span>
      </div>
    </div>
  )
}
