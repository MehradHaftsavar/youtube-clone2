import React from "react";
import TuneRoundedIcon from "@material-ui/icons/TuneRounded";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneRoundedIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        channel="Mehrad Haftsavar"
        verified
        subs="659k"
        noOfVideos={382}
        description="VideosVideos Videos Videos VideosVideos VideosVideos Videos Videos Videos"
      />

      <hr />

      <VideoRow
        title="AAAAAAA"
        subs="324M"
        views="2.5M Views"
        timestamp="3 days ago"
        description="descdesc desc descdesc desc desc desc"
        channel="Mehrad Haftsavar"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LtLwCiiWCw5Yn0ZTUpsuBtjr2t8l7QF6Bw&usqp=CAU"
      />
    </div>
  );
}

export default SearchPage;
