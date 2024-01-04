import React, { useEffect, useState } from "react";
import ColumnComponentOne from "./ColumnOne";
import ColumnComponentTwo from "./ColumnTwo";
import ColumnComponentThree from "./ColumnThree";
import ColumnComponentFour from "./ColumnFour";
import ColumnComponntFive from "./ColumnFive";
import ColumnComponentSix from "./ColumnSix";

function Sidebar({ isSidebarOpen, isSmallSidebar, handleComponentChange }) {
  const SmallData = [
    {
      id: 1,
      name: "Home",
      icon: [
        "m12 4.44 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z",
        "M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z",
      ],
    },
    {
      id: 2,
      name: "Shorts",
      icon: [
        "M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z",
        "m17.77 10.32-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z",
      ],
    },
    {
      id: 3,
      name: "Subcription",
      icon: [
        "M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z",
        "M20 7H4V6h16v1zm2 2v12H2V9h20zm-7 6-5-3v6l5-3zm2-12H7v1h10V3z",
      ],
    },
    {
      id: 2,
      name: "You",
      icon: [
        "m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z",
        "M4 20h14v1H3V6h1v14zM21 3v15H6V3h15zm-4 7.5L11 7v7l6-3.5z",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [activePath, setActivePath] = useState(Array(SmallData.length).fill(0));

  const handleItemClick = (index) => {
    setActiveIndex(index);
  setActivePath((prevState) =>
    prevState.map((path, i) => (i === index ? (path === 0 ? 1 : 0) : 0))
  );
  };

  const activeStyle = (index) => {
    return {
      background: index === activeIndex ? "#f1f1f1" : "",
    };
  };

  return (
    <>
      {isSidebarOpen && (
        <div className="side-body">
          <ColumnComponentOne handleComponentChange={handleComponentChange}/>
          <hr />
          <ColumnComponentTwo handleComponentChange={handleComponentChange}/>
          <hr />
          {/* <ColumnComponentThree/> */}
          <ColumnComponentFour handleComponentChange={handleComponentChange}/>
          <hr />
          <ColumnComponntFive />
          <hr />
          <ColumnComponentSix />
          <hr />
        </div>
      )}
      {isSmallSidebar && (
        <div className="Small-sidebar">
          {SmallData.map((items, index) => {
            return (
              <div key={index} onClick={() => handleItemClick(index)}>
                <div
                  className={`small-home ${
                    index == activeIndex ? "active" : ""
                  }`}
                  style={activeStyle(index)}
                >
                  <div style={{ height: " 60", width: " 60", display: "flex" }}>
                    <svg
                      xmlns={"http://www.w3.org/2000/svg"}
                      enable-background="new 0 0 24 24"
                      height={24}
                      viewBox="0 0 24 24"
                      width={24}
                      focusable="false"
                      style={{
                        pointerEvents: "none",
                        display: "block",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      {/* Render paths conditionally based on activeIndex */}
                      {items.icon.map((path, i) => (
                        <path
                        key={i}
                        d={path}
                        fill={i === activePath[index] ? 'black' : 'none'}
                        stroke={i === activePath[index] ? 'black' : ''}
                        strokeWidth={i === activePath[index] ? '0.1' : '0'} // Adjust the width as needed
                      />
                      ))}
                    </svg>
                  </div>
                  <span>{items.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Sidebar;
