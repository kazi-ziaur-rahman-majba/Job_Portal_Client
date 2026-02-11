import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import JobsCardSkeleton from '../../components/skeleton/JobsCardSkeleton';

const Home = () => {
    
    return (
        <div>
            <Banner />
            <Suspense fallback={<JobsCardSkeleton />}>
                <HotJobs />
            </Suspense>
        </div>
    );
};

export default Home;