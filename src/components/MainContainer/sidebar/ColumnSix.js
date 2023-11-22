import React from 'react';
import { feedback, help, reportHistory, settings } from '../../../Images';

function ColumnComponentSix() {

    const ColumnOneData = [
        {
            id: 1,
            name: 'Settings',
            icone: <path d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z"></path>,

        },
        {
            id: 2,
            name: 'Repot history',
            icone: <path d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"></path>,
            
        },
        {
            id: 3,
            name: 'Help',
            icone: <path d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 1.01-.77 1.01-1.49 0-.51-.23-.97-.63-1.29-.4-.31-.92-.42-1.42-.29-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>,

        },
        {
            id: 4,
            name: 'Send feedback',
            icone: <path d="M13 14h-2v-2h2v2zm0-9h-2v6h2V5zm6-2H5v16.59l3.29-3.29.3-.3H19V3m1-1v15H9l-5 5V2h16z"></path>,

        },
        
    ]
    return ( <>
    
    <div className="option-1">
    {ColumnOneData.map((items, id)=>{
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
                    {/* <div className="twenty2-row" title="Report History">
                        <div className="report">
                            <img src={reportHistory} alt=""/>
                        </div>
                        <p>Report History</p>
                    </div>
                    <div className="twenty3-row" title="Help">
                        <div className="help">
                            <img src={help} alt=""/>
                        </div>
                        <p>Help</p>
                    </div>
                    <div className="twenty4-row" title="Send feedback">
                        <div className="feedback">
                            <img src={feedback} alt=""/>
                        </div>
                        <p>Send feedback</p>
                    </div> */}
                </div>
    </> );
}

export default ColumnComponentSix;