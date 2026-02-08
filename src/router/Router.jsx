import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayouts from '../layouts/RootLayouts';
import Home from '../pages/Home/Home';
import RegisterPage from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';
import JobDetails from '../pages/job-details/JobDetails';

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
                path: '/job/:_id',
                element: <JobDetails />
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