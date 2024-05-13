import React from 'react';
import SidebarLayout from '../(layout)/ownerLayout/sideLayout/SideBarLayout';

type AdminLayoutProps = {
  children: React.ReactNode;
};

const AddCarLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div>
      <h1>Admin Header</h1>
      <SidebarLayout/>
      {children}
      <footer>Admin Footer</footer>
    </div>
  );
};

export default AddCarLayout;
