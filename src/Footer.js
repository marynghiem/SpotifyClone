import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <p>Album and song details</p>
      </div>
      <div className="footer_center">
        <p>Player controls</p>
      </div>
      <div className="footer_right">
        <p>Volume controls</p>
      </div>
    </div>
  );
};

export default Footer;
