import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const RootLayouts = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-screen-sm md:max-w-screen-3xl lg:max-w-screen-5xl xl:max-w-screen-7xl 2xl:max-w-screen-2xl mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default RootLayouts;