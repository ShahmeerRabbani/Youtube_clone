import React from "react";

function CreateVideo({ isOpen }) {
  return (
    <>
      <div
        className="CreateVideo_Dropdown"
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <div className="inner_createFirst">
          <div className="inner_createimage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              width={24}
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path>
            </svg>
          </div>
          <div className="inner_createText">
            <span>Upload Video</span>
          </div>
        </div>
        <div className="inner_createSecond">
          <div className="inner_createimage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              width={24}
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8.48 8.45l-.71-.7C6.68 8.83 6 10.34 6 12s.68 3.17 1.77 4.25l.71-.71C7.57 14.64 7 13.39 7 12s.57-2.64 1.48-3.55zm7.75-.7-.71.71c.91.9 1.48 2.15 1.48 3.54s-.57 2.64-1.48 3.55l.71.71C17.32 15.17 18 13.66 18 12s-.68-3.17-1.77-4.25zM5.65 5.63l-.7-.71C3.13 6.73 2 9.24 2 12s1.13 5.27 2.95 7.08l.71-.71C4.02 16.74 3 14.49 3 12s1.02-4.74 2.65-6.37zm13.4-.71-.71.71C19.98 7.26 21 9.51 21 12s-1.02 4.74-2.65 6.37l.71.71C20.87 17.27 22 14.76 22 12s-1.13-5.27-2.95-7.08z"></path>
            </svg>
          </div>
          <div className="inner_createText">
            <span>Go Live</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateVideo;
