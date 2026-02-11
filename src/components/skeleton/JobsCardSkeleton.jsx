import React from 'react';
import JobCardSkeleton from './JobCardSkeleton';

const JobsCardSkeleton = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-3">
            {
                [...Array(8)].map((_, i) => <JobCardSkeleton key={i} />)
            }
        </div>
    );
};

export default JobsCardSkeleton;
