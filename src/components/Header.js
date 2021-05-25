import React, { useState } from "react";
import MenuRounded from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallRoundedIcon from "@material-ui/icons/VideoCallRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import NotificationsActiveRoundedIcon from "@material-ui/icons/NotificationsActiveRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header_left">
        <MenuRounded />
        <Link to="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="header_input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header_inputButton" />
        </Link>
      </div>

      <div className="header_icons">
        <VideoCallRoundedIcon className="header_icon" />
        <AppsRoundedIcon className="header_icon" />
        <NotificationsActiveRoundedIcon className="header_icon" />
        <AccountCircleRoundedIcon />
      </div>
    </div>
  );
}

export default Header;
