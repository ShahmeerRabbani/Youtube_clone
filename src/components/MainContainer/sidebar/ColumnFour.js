import React from 'react';
import { gaming, sport } from '../../../Images';

function ColumnComponentFour() {

    const ColumnOneData = [
        {
            id: 1,
            name: 'Trending',
            icone: <path d="M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09.5-1.19 1.29-2.21 2.27-2.97.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89 14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z"></path>,

        },
        {
            id: 2,
            name: 'Music',
            icone: <path d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z"></path>,
            
        },
        {
            id: 3,
            name: 'Gaming',
            icone: <path d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15 4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z"></path>,

        },
        {
            id: 4,
            name: 'News',
            icone: <path d="M11 11v6H7v-6h4m1-1H6v8h6v-8zM3 3.03V21h14l4-4V3.03M20 4v11.99l-.01.01H16v3.99l-.01.01H4V4h16zm-2 4H6V6h12v2zm0 7h-5v-2h5v2zm0-3h-5v-2h5v2z"></path>,

        },
        {
            id: 5,
            name: 'Sports',
            icone: <path d="M18 5V2H6v3H3v6l3.23 1.61c.7 2.5 2.97 4.34 5.69 4.38L8 19v3h8v-3l-3.92-2.01c2.72-.04 4.99-1.88 5.69-4.38L21 11V5h-3zM6 11.38l-2-1V6h2v5.38zM15 21H9v-1.39l3-1.54 3 1.54V21zm2-10c0 2.76-2.24 5-5 5s-5-2.24-5-5V3h10v8zm3-.62-2 1V6h2v4.38z"></path>,

        },
        
    ]
    return ( <>
    
    <div className="option-1">
                    <div className="explor-heading">
                        <p>Explore</p>
                    </div>
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
                    {/* <div className="sixtheen-row" title="Sports">
                        <div className="explor-2">
                            <img src={sport} alt=""/>
                        </div>
                        <p>Sports</p>
                    </div> */}
                </div>
    </> );
}

export default ColumnComponentFour;