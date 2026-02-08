import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobsCard = ({job}) => {
    const { title, jobType, description, company, location, salaryRange, company_logo, requirements} = job || {};
    return (
        <div className="card bg-base-100 shadow-sm p-4">
            <div className="flex items-center gap-3">
                <figure>
                    <img
                    src={company_logo}
                    alt=""
                    height={60}
                    width={60}
                    />
                </figure>
                <div className="">
                    <h3 className="text-xl md:text-2xl lg:text-4xl">{company}</h3>
                    <p className="text-base flex items-center gap-1"><FaMapMarkerAlt />{location}</p>
                </div>
            </div>
            <div className="card-body">
                <div className="flex gap-2 items-center">
                    <h2 className="card-title">{title}</h2>
                    <div className="badge badge-secondary">NEW</div>
                </div>
                <p className="font-bold">{salaryRange.min} - {salaryRange.max}BDT</p>
                <p className="text-justify">
                    {description}
                </p>
                <div className="card-actions ">
                    {
                        requirements?.map((skills, idx) => <div key={idx} className="badge badge-outline">{skills}</div>)
                    }
                    <div className="badge badge-outline">Products</div>
                </div>
                <div className="card-actions justify-end mt-2">
                    <Link to={`/job/${job._id}`} className="btn btn-primary">Apply Now</Link>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;
