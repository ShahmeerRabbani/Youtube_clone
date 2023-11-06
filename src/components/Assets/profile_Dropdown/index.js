import React from 'react';

function ProfileDropdown({isOpen}) {
    return ( <>
    <div className='DropDown' style={{display: isOpen ? 'flex' : 'none'}} >

    </div>
    </> );
}

export default ProfileDropdown;