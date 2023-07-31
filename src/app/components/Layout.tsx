// components/Layout.js

import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }:{children : any}) => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
