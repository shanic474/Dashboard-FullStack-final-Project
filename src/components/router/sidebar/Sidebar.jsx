import React, { useState } from 'react';
import SidebarHeader from './SidebarHeader';
import SidebarNav from './SidebarNav';
import SidebarFooter from './SidebarFooter';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-linear-to-b from-gray-900 via-[#1a1a1a] to-gray-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out border-r border-amber-500/20">
      <SidebarHeader />
      <SidebarNav 
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;

