import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ title, Icon }) => {
  return (
    <div className="sidebar_option">
      <p>{title}</p>
    </div>
  );
};
export default SidebarOption;
