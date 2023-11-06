import React from 'react';
import '../profile_Dropdown/style.css'


function NotificationDrawer({isOpen}) {
    return ( <>
    <div className='Notification_Dropdown' style={{display: isOpen ? 'flex' : 'none'}}>

    </div>
    </> );
}

export default NotificationDrawer;