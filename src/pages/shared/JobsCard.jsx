import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobsCard = ({job}) => {
    const { title, jobType, description, company, location, salaryRange, company_logo, requirements, _id} = job || {};
    return (
        <div className="card bg-white shadow-sm p-4 hover:shadow-lg transition-shadow duration-200 rounded-lg">
            <div className="flex items-center gap-4">
                <figure>
                    <img
                        src={company_logo}
                        alt={company}
                        className="w-14 h-14"
                    />
                </figure>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold">{company}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1"><FaMapMarkerAlt />{location}</p>
                </div>
                <div className="text-right">
                    <span className="badge badge-outline">{jobType}</span>
                </div>
            </div>
            <div className="card-body p-0 mt-3">
                <div className="flex gap-2 items-start justify-between">
                    <h2 className="card-title text-lg md:text-xl">{title}</h2>
                    <div className="badge badge-success text-sm">NEW</div>
                </div>
                <p className="text-sm font-semibold text-green-600 mt-1">{salaryRange?.min} - {salaryRange?.max} BDT</p>
                <p className="text-sm text-gray-700 mt-2 max-h-16 overflow-hidden text-justify">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                    {
                        requirements?.map((skills, idx) => (
                            <span key={idx} className="badge badge-outline badge-sm">{skills}</span>
                        ))
                    }
                </div>
                <div className="card-actions justify-end mt-4">
                    <Link to={`/job/${_id}`} className="btn btn-primary btn-sm">Apply Now</Link>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;
