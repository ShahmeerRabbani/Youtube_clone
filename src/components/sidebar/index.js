import React, { useEffect, useState } from 'react';
import { Home, compuse, createStudio, dp1, dp2, dp3, dp4, dp5, dp6, feedback, gaming, help, history, liberary, like, reportHistory, settings, shorts, sport, subscribe, watchLater, youtubeKids, youtubeMusic, youtubeTv } from '../../Images';

function Sidebar({isSidebarOpen}) {

    return ( 
        <>
        {isSidebarOpen && (
            <div class="side-body">
                <div class="option-1">
                    <div class="first-row" title="Home">
                        <div class="home-icon">
                            <img src={Home} alt="home icon" />
                        </div>
                        <p>Home</p>
                    </div>
                    <div class="second-row" title="Explore">
                        <div class="explore-icon">
                            <img src={compuse} alt="campass icon"/>
                        </div>
                        <p>Explore</p>
                    </div>
                    <div class="third-row" title="Shorts">
                        <div class="short-icon">
                            <img src={shorts} alt=""/>
                        </div>
                        <p>Shorts</p>
                    </div>
                    <div class="forth-row" title="Subscriptions">
                        <div class="subscrib-icon">
                            <img src={subscribe} alt=""/>
                        </div>
                        <p>Subscriptions</p>
                    </div>
                </div>


                <div class="option-2">
                    <div class="fifth-row" title="Library">
                        <div class="library-icon">
                            <img src={liberary} alt=""/>
                        </div>
                        <p>Library</p>
                    </div>
                    <div class="sixed-row" title="History">
                        <div class="history-icon">
                            <img src={history} alt=""/>
                        </div>
                        <p>History</p>
                    </div>
                    <div class="seven-row" title="Watch later">
                        <div class="watchlater-icon">
                            <img src={watchLater} alt=""/>
                        </div>
                        <p>Watch later</p>
                    </div>
                    <div class="eight-row" title="Liked videos">
                        <div class="thumb-icon">
                            <img src={like} alt=""/>
                        </div>
                        <p>Liked videos</p>
                    </div>
                </div>
                <div class="option-3">
                    <div class="subs-heading">
                        <p>Subscriptions</p>
                    </div>
                    <div class="nine-row" title="Azora Hantai">
                        <div class="subscirb-1">
                            <img src={dp1} alt=""/>
                        </div>
                        <p>Azora Hantai</p>
                    </div>
                    <div class="ten-row" title="App Yacht Club NFT">
                        <div class="subscirb-2">
                            <img src={dp2} alt=""/>
                        </div>
                        <p>App Yacht Club NFT</p>
                    </div>
                    <div class="eleven-row" title="The Green Land Beauty">
                        <div class="subscirb-3">
                            <img src={dp3} alt=""/>
                        </div>
                        <p>The Green Land Beauty</p>
                    </div>
                    <div class="twelve-row" title="The Guardian Of Universe">
                        <div class="subscirb-4">
                            <img src={dp4} alt=""/>
                        </div>
                        <p>The Guardian Of Universe</p>
                    </div>
                    <div class="thirteen-row" title="The Demon Alive">
                        <div class="subscirb-5">
                            <img src={dp5} alt=""/>
                        </div>
                        <p>The Demon Alive</p>
                    </div>
                    <div class="forteen-row" title="Marvel Entertainment">
                        <div class="subscirb-6">
                            <img src={dp6} alt=""/>
                        </div>
                        <p>Marvel Entertainment</p>
                    </div>
                </div>
                <div class="option-4">
                    <div class="explor-heading">
                        <p>Explore</p>
                    </div>
                    <div class="fiftheen-row" title="Gaming">
                        <div class="explor-1">
                            <img src={gaming} alt=""/>
                        </div>
                        <p>Gaming</p>
                    </div>
                    <div class="sixtheen-row" title="Sports">
                        <div class="explor-2">
                            <img src={sport} alt=""/>
                        </div>
                        <p>Sports</p>
                    </div>
                </div>
                <div class="option-5">
                    <div class="other-youtube">
                        <p>More From YouTube</p>
                    </div>
                    <div class="seventeen-row" title="Creator Studio">
                        <div class="youtube-other">
                            <img src={createStudio} alt=""/>
                        </div>
                        <p>Creator Studio</p>
                    </div>
                    <div class="eighteen-row" title="Youtube Music">
                        <div class="youtube-other2">
                            <img src={youtubeMusic} alt=""/>
                        </div>
                        <p>Youtube Music</p>
                    </div>
                    <div class="ninteen-row" title="Youtube Kids">
                        <div class="youtube-other3">
                            <img src={youtubeKids} alt=""/>
                        </div>
                        <p>Youtube Kids</p>
                    </div>
                    <div class="twenty-row" title="Youtube TV">
                        <div class="youtube-other4">
                            <img src={youtubeTv} alt=""/>
                        </div>
                        <p>Youtube TV</p>
                    </div>
                </div>
                <div class="option-6">
                    <div class="twenty1-row" title="Setting">
                        <div class="setting">
                            <img src={settings} alt=""/>
                        </div>
                        <p>Setting</p>
                    </div>
                    <div class="twenty2-row" title="Report History">
                        <div class="report">
                            <img src={reportHistory} alt=""/>
                        </div>
                        <p>Report History</p>
                    </div>
                    <div class="twenty3-row" title="Help">
                        <div class="help">
                            <img src={help} alt=""/>
                        </div>
                        <p>Help</p>
                    </div>
                    <div class="twenty4-row" title="Send feedback">
                        <div class="feedback">
                            <img src={feedback} alt=""/>
                        </div>
                        <p>Send feedback</p>
                    </div>
                </div>
            </div>
        )}
        </>
     );
}

export default Sidebar;