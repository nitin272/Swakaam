import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import { motion } from 'framer-motion';

const MainLayout = ({ children, userRole }) => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Side Navigation */}
      <Navigation userRole={userRole} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <Header userRole={userRole} />

        {/* Main Content Area */}
        <motion.main 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 overflow-auto p-4 md:p-6 lg:p-8"
        >
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default MainLayout; 