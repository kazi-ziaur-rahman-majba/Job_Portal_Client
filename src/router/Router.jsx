import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayouts from '../layouts/RootLayouts';
import Home from '../pages/Home/Home';
import RegisterPage from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';
import JobDetailsSkeleton from '../components/skeleton/JobDetailsSkeleton';

const LazyJobDetails = lazy(() => import('../pages/job-details/JobDetails'));

const Router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayouts />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/job/:id',
                element: (
                    <Suspense fallback={<JobDetailsSkeleton />}>
                        <LazyJobDetails />
                    </Suspense>
                )
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