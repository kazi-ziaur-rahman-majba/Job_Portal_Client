import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import Navbar from '../pages/shared/Navbar';

const RootLayouts = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default RootLayouts;