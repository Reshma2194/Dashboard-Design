import React from 'react';
import './top.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SmsIcon from '@mui/icons-material/Sms';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


const Topbar =()=>{

    return(
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>
                   Dashboard Design
                    </span>
                    <div className='topbarIconContainer'>
                        <MenuIcon/>
                    </div>
                    <div className='topbarIconContainer'>
                      <input type='text' placeholder='Create New '></input>
                    </div>
                    <div className='topbarIconContainer'>
                        <SearchIcon/>
                    </div>
                  
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <NotificationsNoneIcon/>
                    </div>
                    <div className='topbarIconContainer'>
                        <SmsIcon/>
                    </div>
                    <div className='topbarIconContainer'>
                        <TipsAndUpdatesOutlinedIcon/>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Topbar;
