import { useLoaderData, useParams } from "react-router-dom"


const JobDetails = () => {
    const job = useLoaderData();
    const { id } = useParams();
    const idint = parseInt(id)
    // const { logo, job_title, company_name, remote_or_onsite, location, salary, job_type } = job
    const jobfind = job.find((job) => job.id === idint)
    console.log(id, jobfind)
    return (
        <div className="container mx-auto">
            <div className=" h-40 flex align-middle justify-center items-center">
                <h2 className=" text-center text-4xl font-bold">Job details of <br />{jobfind.job_title}</h2>
            </div>
            <div className="flex justify-between  ">
                <div className=" text-2xl font-semibold max-w-lg flex-[3/4]  border border-blue-800">
                    <h3>Job-description:{jobfind.job_description}</h3>
                </div>
                <div className=" grid mr-1 border border-blue-800 bg-gray-200 ">
                    <div>
                        <h2> Details</h2>
                        <h2>Name:{jobfind.job_title}</h2>
                        <h2>sdfghjiikjhgfd</h2>
                    </div>
                    <div className=" grid-grow">
                        <button className="w-full btn btn-primary">Apply job</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails
