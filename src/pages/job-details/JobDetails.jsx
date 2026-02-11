import { useParams } from "react-router-dom";
import { useAPI } from "../../hooks/useApi";
import { useEffect, useState } from "react";
import apiConfig from "../../config/api.json";
import { FaMapMarkerAlt, FaDollarSign, FaCalendarAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

const JobDetails = () => {
    const { id } = useParams();
    const { fetchData } = useAPI();
    const [job, setJob] = useState(null);

    useEffect(() => {
        const fetchJob = async () => {
            if (!id) return;
            try {
                const url = apiConfig.site.jobDetailsUrl.replace(":id", id);
                const data = await fetchData({ apiUrl: url });
                setJob(data);
            } catch (err) {
                console.error("Error fetching job details:", err);
            }
        };
        fetchJob();
    }, [id, fetchData]); // Added fetchData to dependency array

    if (!job) return <p className="text-center mt-10 text-xl font-medium">Loading job details...</p>;

    const {
        title,
        jobType,
        description,
        company,
        location,
        salaryRange,
        company_logo,
        requirements,
        responsibilities,
        applicationDeadline,
        hr_name,
        hr_email
    } = job;

    const formattedDeadline = new Date(applicationDeadline).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="container mx-auto p-4 md:p-8 lg:p-12">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Job Header Section */}
                <div className="bg-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                    {company_logo && (
                        <img
                            src={company_logo}
                            alt={`${company} logo`}
                            className="w-24 h-24 object-contain rounded-full border-2 border-gray-300"
                        />
                    )}
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h1>
                        <p className="text-xl text-gray-600 mt-1">{company}</p>
                        <div className="flex items-center justify-center md:justify-start gap-3 mt-2 text-gray-500 text-base">
                            <span className="flex items-center gap-1"><FaMapMarkerAlt /> {location}</span>
                            <span className="flex items-center gap-1"><MdWork /> {jobType}</span>
                        </div>
                    </div>
                </div>

                {/* Job Overview & Description */}
                <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Job Description</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            {description}
                        </p>

                        {/* Responsibilities */}
                        {responsibilities && responsibilities.length > 0 && (
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Responsibilities</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {responsibilities.map((res, idx) => (
                                        <li key={idx}>{res}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Requirements */}
                        {requirements && requirements.length > 0 && (
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Requirements</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {requirements.map((req, idx) => (
                                        <li key={idx}>{req}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Sidebar: Key Details & Application */}
                    <div className="lg:col-span-1 bg-gray-50 p-6 rounded-lg shadow-inner">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-5">Key Details</h2>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-700">
                                <FaDollarSign className="text-blue-500 text-xl" />
                                <div>
                                    <span className="block text-sm font-medium">Salary Range</span>
                                    <span className="block text-lg font-bold">
                                        {salaryRange?.min} - {salaryRange?.max} {salaryRange?.currency?.toUpperCase()}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-gray-700">
                                <FaCalendarAlt className="text-green-500 text-xl" />
                                <div>
                                    <span className="block text-sm font-medium">Application Deadline</span>
                                    <span className="block text-lg font-bold">{formattedDeadline}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-gray-700">
                                <HiOutlineMail className="text-purple-500 text-xl" />
                                <div>
                                    <span className="block text-sm font-medium">Contact HR</span>
                                    <span className="block text-lg font-bold">{hr_name}</span>
                                    <span className="block text-md">{hr_email}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button className="btn btn-primary btn-sm">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;

