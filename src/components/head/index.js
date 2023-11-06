import React, { useState } from 'react';
import Dropdown from '../Assets/profile_Dropdown';
import NotificationDrawer from '../Assets/Notification_Dropdown';
import CreateVideo from '../Assets/Create';
import MicrophoneDropdown from '../Assets/Microphone';
import { menu, YoutubeLogo, SearchIcon, Mike, addVideo, bell, profilePic } from '../../Images';

function Head({handleSizeToggle}) {

    const [isEmailDrawerOpen, setIsEmailDrawerOpen] = useState(false);
  const [isNotificationDrawerOpen, setIsNotificationDrawerOpen] = useState(false);
  const [isCreatDrawerOpen, setIsCreateDrawerOpen] = useState(false);
  const [isMicrophoneOpen, setIsMicrophoneOpen] = useState(false);

  const [isFocused, setIsFocus] = useState(false);

  const handleFocus=()=>{
    setIsFocus(true)
  };

  const handleBlur=()=>{
    setIsFocus(false)
  };

  const toggleEmailDrawer = () => {
    setIsEmailDrawerOpen(!isEmailDrawerOpen);
  };

  const toggleNotificationDrawer = () => {
    setIsNotificationDrawerOpen(!isNotificationDrawerOpen);
  };

  const toggleCreateDrawer = () => {
    setIsCreateDrawerOpen(!isCreatDrawerOpen)
  }

  const toggleMicrophoneDrawer = () =>{
    setIsMicrophoneOpen(!isMicrophoneOpen)
  };


    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        const select = document.querySelectorAll('.btn-1, .btn-2, .btn-3, .btn-4, .btn-5, .btn-6, .btn-7, .btn-8, .btn-9, .btn-10');
        
        select.forEach((selects)=>{
            if (isDarkTheme){
                
                selects.classList.add('dark-theme');
                selects.classList.remove('light-theme');
            }
            else{
                selects.classList.add('light-theme')
                selects.classList.remove('dark-theme');
            }
        })
    };
    return ( 
        <>
        <div class="header">
            <div class="first-main">
                <div class="icon-bar" id='toggle_sidebar' 
                onClick={handleSizeToggle}
                >
                    <img src={menu} alt=""/>
                </div>
                <div class="picture">
                    <div class="youtube-icon">
                        <img src={YoutubeLogo} alt="youtube" title="Youtube Home"/>
                        <p>PK</p>
                    </div>

                </div>
            </div>
            <div class="input-div">
                <div className='parent_search'>
                <div className='search-bar'>
                <input
          type="text"
          placeholder="Search"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
                </div>
                <div className='search-icon'>
                    <img src={SearchIcon}/>
                </div>
                </div>

                {/* <div class="search-bar">
                {isFocused && <img src={SearchIcon} alt="" className="hidden-search" title="search" />}
        <input
          type="text"
          placeholder="Search"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
                    <img src={SearchIcon} alt="" class="search-icon" title="search"/>
                </div> */}
                <div class="mike-icon" onClick={toggleMicrophoneDrawer}>
                    <img src={Mike} alt="mike-icon-image" title="search with your voice"/>
                </div>
            </div>
            <div class="icon-div">
                <div class="add-video" onClick={toggleCreateDrawer}>
                    <img src={addVideo} alt="video-iconpic" title="Create"/>
                </div>
                <div class="bell-icon" onClick={toggleNotificationDrawer}>
                    <img src={bell} alt="" title="Notification"/>
                </div>
                <div class="email-pic" onClick={toggleEmailDrawer} 
                // onClick={toggleTheme}
                >
                    <img src={profilePic} alt=""/>
                </div>
            </div>
            <Dropdown isOpen={isEmailDrawerOpen}/>
            <NotificationDrawer isOpen={isNotificationDrawerOpen}/>
            <CreateVideo isOpen={isCreatDrawerOpen}/>
            <MicrophoneDropdown isOpen={isMicrophoneOpen}/>
        </div>
        </>
     );
}

export default Head;