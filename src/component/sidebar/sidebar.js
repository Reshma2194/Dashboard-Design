import react from 'react';
import './sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import WidgetsIcon from '@mui/icons-material/Widgets';
import TocIcon from '@mui/icons-material/Toc';
import WidthFullIcon from '@mui/icons-material/WidthFull';
import ListAltIcon from '@mui/icons-material/ListAlt';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import AppsIcon from '@mui/icons-material/Apps';
import CreateIcon from '@mui/icons-material/Create';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import CampaignIcon from '@mui/icons-material/Campaign';

const Sidebar = ()=>{

    return(
        <div className='Sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <ul className='sidebarList'>
                        <li className='sidebarListitem'>
                            <DashboardIcon/> Dashboard
                        </li>
                        <li className='sidebarListitem'>
                            <BarChartIcon/> Charts
                        </li>
                        <li className='sidebarListitem'>
                            <WidgetsIcon/> Widgets
                        </li>
                        <li className='sidebarListitem'>
                            <TocIcon/> Tables
                        </li>
                        <li className='sidebarListitem'>
                            <WidthFullIcon/> Full Width
                        </li>
                        <li className='sidebarListitem'>
                            <ListAltIcon/> Forms
                        </li>
                        <li className='sidebarListitem'>
                            <KeyboardCommandKeyIcon/> Buttons
                        </li>
                        <li className='sidebarListitem'>
                            <AppsIcon/> Icons
                        </li>
                        <li className='sidebarListitem'>
                            <CreateIcon/> Elements
                        </li>
                        <li className='sidebarListitem'>
                            <CloseFullscreenIcon/> Addons
                        </li>
                        <li className='sidebarListitem'>
                            <CampaignIcon/> Authentication
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )


}

export default Sidebar;
