import React, { useState } from "react";
import Video from "../Video";

function Content({isSidebarOpen}) {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };


  const boxData = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Live",
    },
    {
      id: 3,
      name: "Music",
    },
    {
      id: 4,
      name: "Mixes",
    },
    {
      id: 5,
      name: "Graphics Design",
    },
    {
      id: 6,
      name: "Marvel Comics",
    },
    {
      id: 7,
      name: "Hollywood",
    },
    {
      id: 8,
      name: "Java",
    },
    {
      id: 9,
      name: "Anime Scene",
    },
    {
      id: 10,
      name: "MCU Comics",
    },
    {
      id: 11,
      name: "New to You",
    },
    {
      id: 12,
      name: "Reverberation",
    },
    {
      id: 13,
      name: "Rhythem & Blues",
    },
    {
      id: 14,
      name: "Beats",
    },
    {
      id: 15,
      name: "SoundTracks",
    },
    {
      id: 16,
      name: "Alternative Rocks",
    },
  ];

  return (
    <>
      <div
        class="video-body"
        // id={isDarkTheme ? 'dark-theme' : 'light-theme'}
      >
        <div class="buttons">
          {boxData.map((items, index) => {
            return (
              <div key={index} onClick={()=>handleItemClick(index)}>
                <div class={`btn-1 ${index == activeIndex ? 'active' : ''}`} 
                style={{
                  backgroundColor: index === activeIndex ? 'black' : '#E9E9E9',
                  color: index === activeIndex ? 'White' : 'black',
                  height: "33px",
                  padding: "0px 13px",
                  marginRight: "15px",
                  borderRadius: "10px",
                  fontWeight: 'bold',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  marginBottom: "-10px",
                }}
                title={items.name}>
                  <span style={{whiteSpace: 'nowrap'}}>
                    {items.name}
                  </span>
                </div>
              </div>
            );
          })}
          
        </div>
        <Video isSidebarOpen={isSidebarOpen}/>
      </div>
    </>
  );
}

export default Content;
