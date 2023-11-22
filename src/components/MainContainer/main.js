import React from 'react';
import Head from './head';
import Sidebar from './sidebar';
import Content from './Content';

function MainContainer({isSidebarOpen, handleSizeToggle, isSmallSidebar}) {
    return ( 
        <>
        <Head handleSidebarToggleOpen={handleSizeToggle}/>
        <div className="main-body">
        <Sidebar isSidebarOpen={isSidebarOpen} isSmallSidebar={isSmallSidebar}/>
        <Content isSidebarOpen={isSidebarOpen}/>
        </div>
        </>
     );
}

export default MainContainer;