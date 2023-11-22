import React from 'react';
import { createStudio, youtubeKids, youtubeMusic, youtubeTv } from '../../../Images';


function ColumnComponntFive() {

    const ColumnFiveData = [
        {
            id: 1,
            name: 'Create Studio',
            icone: createStudio,

        },
        {
            id: 2,
            name: 'Youtube Music',
            icone: youtubeMusic,
            
        },
        {
            id: 3,
            name: 'Youtube Kids',
            icone: youtubeKids,

        },
        {
            id: 4,
            name: 'Youtube TV',
            icone: youtubeTv,

        },
        
    ]
    return ( <>
    
    <div className="option-1">
                    <div className="other-youtube">
                        <p>More From YouTube</p>
                    </div>
                    {ColumnFiveData.map((items, id)=>{
            return(
                <div key={id}>
                    <div className='first-row' title={items.name} style={{gap: '15px',}}>
                        <div className="home-icon" style={{height: '30px', width: '30px',}}>
                            <img src={items.icone} alt="home icon" />
                        </div>
                        <div>
                        <span>{items.name}</span>

                        </div>
                    </div>
                </div>
            )
        })}
                    {/* <div className="eighteen-row" title="Youtube Music">
                        <div className="youtube-other2">
                            <img src={youtubeMusic} alt=""/>
                        </div>
                        <p>Youtube Music</p>
                    </div>
                    <div className="ninteen-row" title="Youtube Kids">
                        <div className="youtube-other3">
                            <img src={youtubeKids} alt=""/>
                        </div>
                        <p>Youtube Kids</p>
                    </div>
                    <div className="twenty-row" title="Youtube TV">
                        <div className="youtube-other4">
                            <img src={youtubeTv} alt=""/>
                        </div>
                        <p>Youtube TV</p>
                    </div> */}
                </div>
    </> );
}

export default ColumnComponntFive;