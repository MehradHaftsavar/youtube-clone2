import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import WhatshotRoundedIcon from "@material-ui/icons/WhatshotRounded";
import SubscriptionsRoundedIcon from "@material-ui/icons/SubscriptionsRounded";
import ExpandMoreRounded from "@material-ui/icons/ExpandMoreRounded";
import HistoryRounded from "@material-ui/icons/HistoryRounded";
import OndemandVideoRounded from "@material-ui/icons/OndemandVideoRounded";
import ThumbUpAltRounded from "@material-ui/icons/ThumbUpAltRounded";
import VideoLibraryRounded from "@material-ui/icons/VideoLibraryRounded";
import WatchLaterRounded from "@material-ui/icons/WatchLaterRounded";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeRoundedIcon} title="Home" />
      <SidebarRow Icon={WhatshotRoundedIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsRoundedIcon} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibraryRounded} title="Library" />
      <SidebarRow Icon={HistoryRounded} title="History" />
      <SidebarRow Icon={OndemandVideoRounded} title="You Videos" />
      <SidebarRow Icon={WatchLaterRounded} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltRounded} title="Liked Videos" />
      <SidebarRow Icon={ExpandMoreRounded} title="Show More" />
      <hr />
    </div>
  );
}

export default Sidebar;
