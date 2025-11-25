import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayouts from '../layouts/RootLayouts';
import Home from '../pages/Home/Home';
import RegisterPage from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';

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
            },
            {
                path: '/register',
                element: <RegisterPage />
            },
            {
                path: '/signIn',
                element: <SignIn />
            }
        ]
    }
])

export default Router;