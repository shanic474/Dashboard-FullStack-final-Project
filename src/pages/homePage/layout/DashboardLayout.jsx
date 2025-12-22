import React from 'react';
import Sidebar from '../../../components/router/sidebar/Sidebar.jsx';
import DashboardHeader from './DashboardHeader';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <DashboardHeader />
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

