import React from 'react';
import Head from '../head';
import Sidebar from '../sidebar';
import Content from '../Content';

function MainContainer({isSidebarOpen, handleSizeToggle}) {
    return ( 
        <>
        <Head handleSizeToggle={handleSizeToggle}/>
        <div class="main-body">
        <Sidebar isSidebarOpen={isSidebarOpen}/>
        <Content isSidebarOpen={isSidebarOpen}/>
        </div>
        </>
     );
}

export default MainContainer;