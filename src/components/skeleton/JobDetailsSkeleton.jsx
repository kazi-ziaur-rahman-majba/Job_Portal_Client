const JobDetailsSkeleton = () => {
    return (
        <div className="container mx-auto p-4 md:p-8 lg:p-12">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden animate-pulse">
                <div className="bg-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                    <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
                    <div className="flex-1 text-center md:text-left">
                        <div className="h-8 bg-gray-300 rounded w-3/4 mb-2"></div>
                        <div className="h-5 bg-gray-300 rounded w-1/2 mb-2"></div>
                        <div className="flex items-center justify-center md:justify-start gap-3 mt-2">
                            <div className="h-4 bg-gray-300 rounded w-1/4"></div> 
                            <div className="h-4 bg-gray-300 rounded w-1/4"></div> 
                        </div>
                    </div>
                </div>

                <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div> 
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        </div>

                        <div className="mt-6 mb-6">
                            <div className="h-5 bg-gray-300 rounded w-1/4 mb-3"></div> 
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-11/12"></div>
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="h-5 bg-gray-300 rounded w-1/4 mb-3"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-11/12"></div>
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar: Key Details & Application Skeleton */}
                    <div className="lg:col-span-1 bg-gray-50 p-6 rounded-lg shadow-inner">
                        <div className="h-6 bg-gray-300 rounded w-1/2 mb-5"></div> {/* Key Details Title */}

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                <div className="flex-1">
                                    <div className="h-3 bg-gray-200 rounded w-2/3 mb-1"></div>
                                    <div className="h-5 bg-gray-300 rounded w-full"></div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                <div className="flex-1">
                                    <div className="h-3 bg-gray-200 rounded w-2/3 mb-1"></div>
                                    <div className="h-5 bg-gray-300 rounded w-full"></div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                <div className="flex-1">
                                    <div className="h-3 bg-gray-200 rounded w-2/3 mb-1"></div>
                                    <div className="h-5 bg-gray-300 rounded w-full mb-1"></div>
                                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="w-full h-12 bg-gray-300 rounded-md"></div> {/* Apply Now Button */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsSkeleton;
