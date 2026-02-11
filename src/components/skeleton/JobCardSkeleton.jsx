const JobCardSkeleton = () => {
    return (
        <div className="card bg-white shadow-sm p-4 rounded-lg">
            <div className="flex items-center gap-4 animate-pulse">
                <div className="w-14 h-14 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="h-5 bg-gray-200 rounded w-1/6"></div>
            </div>
            <div className="card-body p-0 mt-3 animate-pulse">
                <div className="flex gap-2 items-start justify-between">
                    <div className="h-5 bg-gray-200 rounded w-4/5"></div> 
                    <div className="h-5 bg-gray-200 rounded w-1/6"></div> 
                </div>
                <div className="h-4 bg-gray-200 rounded w-2/5 mt-1"></div>
                <div className="h-3 bg-gray-200 rounded w-full mt-2"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6 mt-1"></div>
                <div className="h-3 bg-gray-200 rounded w-4/6 mt-1"></div>

                <div className="flex flex-wrap gap-2 mt-3">
                    <div className="h-4 bg-gray-200 rounded w-1/5"></div> 
                    <div className="h-4 bg-gray-200 rounded w-1/6"></div> 
                    <div className="h-4 bg-gray-200 rounded w-1/5"></div> 
                </div>
                <div className="card-actions justify-end mt-4">
                    <div className="h-9 bg-gray-200 rounded w-1/4"></div>
                </div>
            </div>
        </div>
    );
};

export default JobCardSkeleton;
