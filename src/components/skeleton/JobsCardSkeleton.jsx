import React from 'react';

const JobsCardSkeleton = () => {
    return (
        <div className="card bg-white shadow-sm p-4 rounded-lg animate-pulse">
            {/* Header */}
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-200 rounded"></div>

                <div className="flex-1 space-y-2">
                    <div className="h-4 w-32 bg-gray-200 rounded"></div>
                    <div className="h-3 w-24 bg-gray-200 rounded"></div>
                </div>

                <div className="h-5 w-16 bg-gray-200 rounded-full"></div>
            </div>

            {/* Body */}
            <div className="mt-4 space-y-3">
                <div className="flex justify-between items-center">
                    <div className="h-5 w-48 bg-gray-200 rounded"></div>
                    <div className="h-4 w-10 bg-gray-200 rounded"></div>
                </div>

                <div className="h-4 w-36 bg-gray-200 rounded"></div>

                <div className="space-y-2">
                    <div className="h-3 w-full bg-gray-200 rounded"></div>
                    <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
                </div>

                {/* Skills */}
                <div className="flex gap-2 mt-2">
                    <div className="h-5 w-14 bg-gray-200 rounded-full"></div>
                    <div className="h-5 w-16 bg-gray-200 rounded-full"></div>
                    <div className="h-5 w-12 bg-gray-200 rounded-full"></div>
                </div>

                {/* Button */}
                <div className="flex justify-end mt-4">
                    <div className="h-8 w-24 bg-gray-200 rounded"></div>
                </div>
            </div>
        </div>
    );
};

export default JobsCardSkeleton;
