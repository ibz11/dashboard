import { Outlet } from '@remix-run/react';
import React from 'react';

const Index = () => {
    return (
        <div>
          <Outlet/>  
        </div>
    );
}

export default Index;
