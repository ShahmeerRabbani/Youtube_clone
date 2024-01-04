import React, { useState } from 'react';
import Head from './head';
import Sidebar from './sidebar';
import Content from './Content';

function MainContainer({isSidebarOpen, handleSizeToggle, isSmallSidebar}) {

    const [selectedComponent, setSelectedComponent] = useState('Home');

    const handleComponentChange = (componentName) => {
      setSelectedComponent(componentName);
    };
    return ( 
        <>
        <Head handleSidebarToggleOpen={handleSizeToggle}/>
        <div className="main-body">
        <Sidebar isSidebarOpen={isSidebarOpen} isSmallSidebar={isSmallSidebar} handleComponentChange={handleComponentChange}/>
        <Content isSidebarOpen={isSidebarOpen} selectedComponent={selectedComponent} />
        </div>
        </>
     );
}

export default MainContainer;