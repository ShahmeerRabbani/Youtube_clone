import React from 'react';
import { history, liberary, like, watchLater } from '../../../Images';

function ColumnComponentTwo() {
    const ColumnTwoData = [
        {
            id: 1,
            name: 'History',
            icone: <g><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path></g>,

        },
        {
            id: 2,
            name: 'Watch Later',
            icone: <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>,
            
        },
        {
            id: 3,
            name: 'Like Videos',
            icone: <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>,

        },
        
    ]
    return ( <>
    
    <div className="option-1">
        {ColumnTwoData.map((items, id)=>{
            return(
                <div key={id}>
                    <div className='first-row' title={items.name}>
                        <div className="home-icon">
                        <svg xmlns={"http://www.w3.org/2000/svg"} enable-background="new 0 0 24 24" height={25} viewBox="0 0 24 24" width={25} focusable="false" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%",}}>{items.icone}</svg>
                        </div>
                        <div>

                        <span>{items.name}</span>
                        </div>
                    </div>

                </div>
            )
        })}
                    {/* <div className="sixed-row" title="History">
                        <div className="history-icon">
                            <img src={history} alt=""/>
                        </div>
                        <p>History</p>
                    </div>
                    <div className="seven-row" title="Watch later">
                        <div className="watchlater-icon">
                            <img src={watchLater} alt=""/>
                        </div>
                        <p>Watch later</p>
                    </div>
                    <div className="eight-row" title="Liked videos">
                        <div className="thumb-icon">
                            <img src={like} alt=""/>
                        </div>
                        <p>Liked videos</p>
                    </div> */}
                </div>
    </> );
}

export default ColumnComponentTwo;