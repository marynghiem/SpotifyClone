import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ title, Icon }) => {
  return (
    <div className="sidebar_option">
      {Icon && <Icon className="sidebar_option_icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};
export default SidebarOption;
