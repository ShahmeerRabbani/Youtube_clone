import React from 'react';

function MicrophoneDropdown({isOpen}) {
    return ( <>
    <div className='Microphone_Dropdown' style={{display: isOpen ? 'flex' : 'none'}}>

    </div>
    </> );
}

export default MicrophoneDropdown;