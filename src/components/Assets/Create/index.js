import React from 'react';

function CreateVideo({isOpen}) {
    return ( <>
    <div className='CreateVideo_Dropdown' style={{display: isOpen ? 'flex' : 'none'}}>

    </div>
    </> );
}

export default CreateVideo;