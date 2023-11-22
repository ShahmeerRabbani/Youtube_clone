import React from 'react';

function NotificationDrawer({isOpen}) {
    return ( <>
    <div className='Notification_Dropdown' style={{display: isOpen ? 'flex' : 'none'}}>

    </div>
    </> );
}

export default NotificationDrawer;