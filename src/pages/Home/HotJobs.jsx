import { useAPI } from "../../hooks/useApi";
import { useEffect, useState } from "react";
import apiConfig from "../../config/api.json";

const HotJobs = () => {
    const { fetchData } = useAPI();
	const [response, setResponse] = useState([]);

	useEffect(() => {
		const fetchHotJobsData = async () => {
			const response = await fetchData({ apiUrl: `${apiConfig.site.hotJobsUrl}` });
			setResponse(response);
		};
		fetchHotJobsData();
	}, []);
    
    return (
        <div>
            <h1>{response.length}</h1>
        </div>
    );
};

export default HotJobs;