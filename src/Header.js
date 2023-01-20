import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";

const Header = ({ spotify }) => {
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input placeholder="Search for Artists, Songs, or Podcasts " type="text" />
      </div>
      <div className="header_right">
        <Avatar src="" alt="MN" />
        <h4>Mary Nghiem</h4>
      </div>
    </div>
  );
};

export default Header;
