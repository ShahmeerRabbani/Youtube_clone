import React from "react";

function WatchLater() {
  return (
    <>
      <div
        style={{ display: "flex", height: "100%", width: "auto", padding: 50 }}
      >
        <div className="WatchHistory">
          <h3 style={{color: 'black'}}>
            <strong>Watch Later</strong>
          </h3>
          <span style={{ fontSize: 12 }}>No videos</span>
          <span style={{ marginLeft: 10, fontSize: 12 }}>No veiws</span>
          <span style={{ marginLeft: 10, fontSize: 12 }}>Updated today</span>
          <div
          className="watch-menu">
            <div
              style={{
                height: 3,
                width: 3,
                background: "black",
                borderRadius: 100,
              }}
            ></div>
            <div
              style={{
                height: 3,
                width: 3,
                background: "black",
                borderRadius: 100,
              }}
            ></div>
            <div
              style={{
                height: 3,
                width: 3,
                background: "black",
                borderRadius: 100,
              }}
            ></div>
          </div>
        </div>
        <div className="watchEvents">
            <span style={{fontSize: 14}}>There are no videos in this playlist yet</span>
        </div>
      </div>
    </>
  );
}

export default WatchLater;
