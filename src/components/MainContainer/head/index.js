import React, { useState } from 'react';
import ProfileDropdown from '../../Assets/profile_Dropdown';
import NotificationDrawer from '../../Assets/Notification_Dropdown';
import CreateVideo from '../../Assets/Create';
import MicrophoneDropdown from '../../Assets/Microphone';
import { menu, YoutubeLogo, SearchIcon, Mike, addVideo, bell, profilePic } from '../../../Images';

function Head({handleSidebarToggleOpen}) {

    const handlePrompt = () => {
        var userInput = prompt("enter Your name");
        if (userInput !== null) {
            alert(`You entered: ${userInput}`);
          } else {
            alert('User canceled the prompt.');
          }
    };

    const [isEmailDrawerOpen, setIsEmailDrawerOpen] = useState(false);
  const [isNotificationDrawerOpen, setIsNotificationDrawerOpen] = useState(false);
  const [isCreatDrawerOpen, setIsCreateDrawerOpen] = useState(false);
  const [isMicrophoneOpen, setIsMicrophoneOpen] = useState(false);

  // const [isFocused, setIsFocus] = useState(false);

  // const handleFocus=()=>{
  //   setIsFocus(true)
  // };

  // const handleBlur=()=>{
  //   setIsFocus(false)
  // };

  const toggleEmailDrawer = () => {
    setIsEmailDrawerOpen(!isEmailDrawerOpen);
    setIsCreateDrawerOpen(false)
    setIsNotificationDrawerOpen(false)
  };

  const closeEmailDrawer = () =>{
    setIsEmailDrawerOpen(false)
  };

  const toggleNotificationDrawer = () => {
    setIsNotificationDrawerOpen(!isNotificationDrawerOpen);
    setIsCreateDrawerOpen(false)
    setIsEmailDrawerOpen(false)
  };

  const toggleCreateDrawer = () => {
    setIsCreateDrawerOpen(!isCreatDrawerOpen)
  }

  const handleCloseDrawer = () => {
    setIsMicrophoneOpen(false);
  };

  const toggleMicrophoneDrawer = () =>{
    setIsMicrophoneOpen(!isMicrophoneOpen)
    setIsCreateDrawerOpen(false)
    setIsNotificationDrawerOpen(false)
    setIsEmailDrawerOpen(false)
  };


    // const [isDarkTheme, setIsDarkTheme] = useState(false);

    // const toggleTheme = () => {
    //     setIsDarkTheme(!isDarkTheme);
    //     const select = document.querySelectorAll('.btn-1, .btn-2, .btn-3, .btn-4, .btn-5, .btn-6, .btn-7, .btn-8, .btn-9, .btn-10');
        
    //     select.forEach((selects)=>{
    //         if (isDarkTheme){
                
    //             selects.classList.add('dark-theme');
    //             selects.classList.remove('light-theme');
    //         }
    //         else{
    //             selects.classList.add('light-theme')
    //             selects.classList.remove('dark-theme');
    //         }
    //     })
    // };
    return ( 
        <>
        <div className="header">
            <div className="first-main">
                <div className="icon-bar" id='toggle_sidebar' onClick={handleSidebarToggleOpen}>
                    <img src={menu} alt=""/>
                </div>
                <div className="picture">
                    <div className="youtube-icon" onClick={handlePrompt}>
                        <img src={YoutubeLogo} alt="youtube" title="Youtube Home"/>
                        <p>PK</p>
                    </div>

                </div>
            </div>
            <div className="input-div">
                <div className='parent_search'>
                <div className='search-bar'>
                <input
          type="text"
          placeholder="Search"
          // onFocus={handleFocus}
          // onBlur={handleBlur}
        />
                </div>
                <div className='search-icon'>
                    <img src={SearchIcon}/>
                </div>
                </div>

                {/* <div className="search-bar">
                {isFocused && <img src={SearchIcon} alt="" className="hidden-search" title="search" />}
        <input
          type="text"
          placeholder="Search"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
                    <img src={SearchIcon} alt="" className="search-icon" title="search"/>
                </div> */}
                <div className="mike-icon" onClick={toggleMicrophoneDrawer} title='Search with Your voice'>
                <svg xmlns="http://www.w3.org/2000/svg" height={40} viewBox="0 0 24 24" width={40} focusable="false" style={{pointerEvents: "none", display: "flex", justifyContent: 'center', alignItems: 'center', width: "60%", height: "60%",}}>
                  <path d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"></path>
                </svg>
                    {/* <img src={Mike} alt="mike-icon-image" title="search with your voice"/> */}
                </div>
            </div>
            <div className="icon-div">
                <div className="add-video" onClick={toggleCreateDrawer}>
                <svg xmlns="http://www.w3.org/2000/svg" height={24}  width={24} focusable="false" style={{pointerEvents: "none", display: "flex", justifyContent: 'center', alignItems: 'center',}}>
                <path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z" fill='black'></path>
                </svg>
                    {/* <img src={addVideo} alt="video-iconpic" title="Create"/> */}
                </div>
                <div className="bell-icon" onClick={toggleNotificationDrawer}>
                <svg xmlns="http://www.w3.org/2000/svg" height={24}  width={24} focusable="false" style={{pointerEvents: "none", display: "flex", justifyContent: 'center', alignItems: 'center',}}>
                <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z" fill='black'></path>
                </svg>
                    {/* <img src={bell} alt="" title="Notification"/> */}
                </div>

                <div className='searchMob-icon' style={{display: 'none',}}>
                    <img src={SearchIcon}/>
                </div>

                <div className="email-pic" onClick={toggleEmailDrawer} 
                // onClick={toggleTheme}
                >
                    <img src={profilePic} alt=""/>
                </div>
            </div>
            <ProfileDropdown isOpen={isEmailDrawerOpen} isClose={closeEmailDrawer}/>
            <NotificationDrawer isOpen={isNotificationDrawerOpen}/>
            <CreateVideo isOpen={isCreatDrawerOpen} onClose={handleCloseDrawer}/>
            <MicrophoneDropdown isOpen={isMicrophoneOpen} onClose={handleCloseDrawer}/>
        </div>
        </>
     );
}

export default Head;