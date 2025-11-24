import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/shared/Footer';
import Navbar from '../pages/Home/shared/Navbar';

const RootLayouts = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayouts;