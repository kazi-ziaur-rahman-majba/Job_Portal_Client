import React, { Suspense } from 'react';
// import React, { lazy, Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import JobsCardSkeleton from '../../components/skeleton/JobsCardSkeleton';

// const HotJobsList = lazy(() => import('./HotJobs'));

const Home = () => {
    
    return (
        <div>
            <Banner />
            <Suspense 
                fallback={<JobsCardSkeleton/>}>
                <HotJobs />
            </Suspense>
        </div>
    );
};

export default Home;