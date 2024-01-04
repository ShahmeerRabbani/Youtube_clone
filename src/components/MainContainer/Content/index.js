import React, { useState } from "react";
import SubscriptionLayout from "./Subscription";
import HomePage from "./Home";
import WatchLater from "./watchlater/watchlater";
import LikeVideo from "./Like/LikeVideo";
import Shorts from "./Shorts/Shorts";
import History from "./History/History";
import Trending from "./Trending/Trending";
import Music from "./Music/Music";
import Gaming from "./Gaming/Gaming";
import News from "./News/News";
import Sports from "./Sports/Sports";

function Content({isSidebarOpen, selectedComponent}) {

  return (
    <>
    <div
        className="video-body"
        // id={isDarkTheme ? 'dark-theme' : 'light-theme'}
      >
        {selectedComponent === "Home" && <HomePage isSidebarOpen={isSidebarOpen} />}
      {selectedComponent === "Subscription" && <SubscriptionLayout />}
      {selectedComponent === "Shorts" && <Shorts/>}

      {selectedComponent === "History" && <History/>}
      {selectedComponent === "Watch Later" && <WatchLater/>}
      {selectedComponent === "Like Videos" && <LikeVideo/>}

      {selectedComponent === "Trending" && <Trending/>}
      {selectedComponent === "Music" && <Music/>}
      {selectedComponent === "Gaming" && <Gaming/>}
      {selectedComponent === "News" && <News/>}
      {selectedComponent === "Sports" && <Sports/>}
      

        
        </div>
     </>
  );
}

export default Content;
