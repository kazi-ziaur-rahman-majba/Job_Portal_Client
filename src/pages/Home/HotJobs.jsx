import { useAPI } from "../../hooks/useApi";
import { useEffect, useState } from "react";
import apiConfig from "../../config/api.json";
import JobsCard from "../shared/JobsCard";

const HotJobs = () => {
    const { fetchData } = useAPI();
	const [response, setResponse] = useState([]);

	useEffect(() => {
		const fetchHotJobsData = async () => {
			const data = await fetchData({ apiUrl: `${apiConfig.site.hotJobsUrl}` });
			setResponse(data ?? []);
			console.log("Hot Jobs", data);
		};
		fetchHotJobsData();
	}, []);

    return (
        <div>
			<h1 className="text-xl md:text-2xl lg:text-4xl text-center">Hot jobs of the day</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-3">
				{
					response?.map(job => <JobsCard key={job._id} job={job}></JobsCard>)
				}
			</div>
        </div>
    );
};

export default HotJobs;