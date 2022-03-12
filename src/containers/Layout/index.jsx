import React from 'react';
import Topbar from './topbar/Topbar';

import { Outlet } from 'react-router-dom';


const PageLayout = () => (
  <main>
    
      <Topbar />
    
      <Outlet /> 
    
  </main>
);


export default PageLayout;