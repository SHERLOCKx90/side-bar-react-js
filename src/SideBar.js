import React from 'react';
import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

// renders the sidebar -> renders the sidebaricon component
const Sidebar = () => {
    return (
        <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow-lg'>
            <SideBarIcon icon={<FaFire size="28" />} />
            <SideBarIcon icon={<BsPlus size="32" />} />
            <SideBarIcon icon={<BsFillLightningFill size="20" />} />
            <SideBarIcon icon={<FaPoo size="20" />} />
        </div>
    );
}

// returns the side bar icons 
const SideBarIcon = ({ icon }) => {
    return (<div className="sidebar-icon">
        {icon}
    </div>
    );
}
export default Sidebar;