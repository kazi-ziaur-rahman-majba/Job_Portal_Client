import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayouts from '../layouts/RootLayouts';
import Home from '../pages/Home/Home';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayouts />,
        children: [
            {
                // path: '/',
                // element: <Home />
                index: true,
                element: <Home />
            }
        ]
    }
])

export default Router;