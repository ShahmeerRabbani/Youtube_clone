import React, { useState } from 'react';
import Videos from './Video/video';
import HomeLive from './Home/Live/HomeLive';
import HomeMusic from './Music/HomeMusic';
import HomeMixes from './Mixes/HomeMixes';
import GraphicsDesign from './GraphicDesign/HomeGraphic';

function HomePage({isSidebarOpen}) {

  const [selectedButton, setSelectedButton] = useState("All")

  const handleButtonChange = (ButtonName) => {
    setSelectedButton(ButtonName)
  }

  const handleNavigate = (ButtonName) => {
    handleButtonChange(ButtonName)
  }

    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (index) => {
      setActiveIndex(index);
      const selectedBox = boxData[index];
    if (selectedBox.EventClick) {
      selectedBox.EventClick();
    }
    };
  
  
    const boxData = [
      {
        id: 1,
        name: "All",
        EventClick: () => handleNavigate("All")
      },
      {
        id: 2,
        name: "Live",
        EventClick: () => handleNavigate("HomeLive"),
      },
      {
        id: 3,
        name: "Music",
        EventClick: () => handleNavigate("Music"),
      },
      {
        id: 4,
        name: "Mixes",
        EventClick: () => handleNavigate("Mixes"),
      },
      {
        id: 5,
        name: "Graphics Design",
        EventClick: () => handleNavigate("Graphics Design"),
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
         
        <div className="buttons">
          {boxData.map((items, index) => {
            return (
              <div key={index} onClick={()=>handleItemClick(index)}>
                <div className={`btn-1 ${index == activeIndex ? 'active' : ''}`} 
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

        
        {selectedButton === "All" && <Videos isSidebarOpen={isSidebarOpen}/>}    
        {selectedButton === "HomeLive" && <HomeLive/>}    
        {selectedButton === "Music" && <HomeMusic/>}
        {selectedButton === "Mixes" && <HomeMixes/>}
        {selectedButton === "Graphics Design" && <GraphicsDesign/>}
        </>
     );
}

export default HomePage;